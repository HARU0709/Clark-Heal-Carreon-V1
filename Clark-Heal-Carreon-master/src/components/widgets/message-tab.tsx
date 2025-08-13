
"use client"

import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SendHorizonal, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';
import { chat } from '@/ai/flows/chat-flow';
import type { ChatInput } from '@/ai/flows/chat-flow';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  type User 
} from "firebase/auth";
import { FaGoogle, FaGithub } from 'react-icons/fa';


interface Message {
    id: number;
    role: 'user' | 'model';
    content: string;
}

const initialMessages: Message[] = [
    { id: 1, role: 'model', content: "Hello! I'm Clark's AI assistant. Select a question below to get started." },
];

const predefinedQuestions = [
    "What are your top 3 technical skills?",
    "Tell me about your RJS Payroll System project.",
    "Are you available for freelance work?",
];

function MarkdownContent({ content }: { content: string }) {
    // Regex to find markdown links, bold text, and list items
    const parts = content.split(/(\[.*?\]\(#.*?\)|- \*\*.*?\*\*|\*\*.*?\*\*|(?:\n- .*)|\n)/g).filter(Boolean);

    return (
        <>
            {parts.map((part, index) => {
                const linkMatch = part.match(/\[(.*?)\]\((#.*?)\)/);
                if (linkMatch) {
                    const [, text, href] = linkMatch;
                    return (
                        <Link key={index} href={href} className="text-primary underline hover:text-primary/80" onClick={(e) => {
                             // This allows smooth scroll for in-page links
                            if (href.startsWith('#')) {
                                e.preventDefault();
                                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                            {text}
                        </Link>
                    );
                }

                const boldListItemMatch = part.match(/- \*\*(.*?):\*\* (.*)/);
                if (boldListItemMatch) {
                    const [, category, text] = boldListItemMatch;
                    return (
                        <div key={index} className="flex">
                            <span className="mr-2">•</span>
                            <span>
                                <strong>{category}:</strong> {text}
                            </span>
                        </div>
                    );
                }

                const boldMatch = part.match(/\*\*(.*?)\*\*/);
                 if (boldMatch) {
                    return <strong key={index}>{boldMatch[1]}</strong>;
                }
                
                if (part.startsWith('\n- ')) {
                    return <div key={index} className="flex"><span className="mr-2">•</span><span>{part.substring(3)}</span></div>;
                }
                
                if (part === '\n') {
                    return <br key={index} />;
                }

                return <span key={index}>{part}</span>;
            })}
        </>
    );
}


export function MessageTab() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState<User | null>(null);
    const [questionCount, setQuestionCount] = useState(0);
    const freeQuestionLimit = 1;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
           const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if(viewport) {
                 setTimeout(() => {
                    viewport.scrollTop = viewport.scrollHeight;
                 }, 100);
            }
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    const handleSendMessage = async (content: string) => {
        if (content.trim() && !isLoading) {
            const newUserMessage: Message = { id: Date.now(), role: 'user', content };
            const currentMessages = [...messages, newUserMessage];
            setMessages(currentMessages);
            setInputValue('');
            setIsLoading(true);

            if (!user) {
                setQuestionCount(prev => prev + 1);
            }
            
            try {
                const chatHistory = currentMessages.slice(0, -1).map(msg => ({
                    role: msg.role,
                    content: msg.content,
                }));

                const chatInput: ChatInput = {
                    history: chatHistory,
                    message: content,
                };
                
                const result = await chat(chatInput);

                let finalResponse = result.response;
                if (!user && (questionCount + 1) >= freeQuestionLimit) {
                    finalResponse += "\n\nSign in to ask your own questions and get a fully interactive response!";
                }

                const newBotMessage: Message = { id: Date.now() + 1, role: 'model', content: finalResponse };
                setMessages(prev => [...prev, newBotMessage]);

            } catch (error) {
                console.error("Error calling chat flow:", error);
                const errorBotMessage: Message = { id: Date.now() + 1, role: 'model', content: "Sorry, I'm having a little trouble connecting right now. Please try again in a moment." };
                setMessages(prev => [...prev, errorBotMessage]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleAuthProviderSignIn = async (provider: GoogleAuthProvider | GithubAuthProvider) => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Authentication failed:", error);
            // Optionally, show a toast message to the user here
        }
    };
    
    const renderInputArea = () => {
        if (user) {
            return (
                <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="flex items-center gap-2">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        autoComplete="off"
                        disabled={isLoading}
                    />
                    <Button type="submit" size="icon" disabled={!inputValue.trim() || isLoading}>
                        <SendHorizonal className="h-5 w-5" />
                        <span className="sr-only">Send</span>
                    </Button>
                </form>
            );
        }

        if (questionCount < freeQuestionLimit) {
            return (
                <div className="space-y-2">
                     <p className="text-xs text-center text-muted-foreground mb-2">
                        Select a question to get started.
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                        {predefinedQuestions.map((q, i) => (
                            <Button key={i} variant="outline" onClick={() => handleSendMessage(q)} disabled={isLoading}>
                                {q}
                            </Button>
                        ))}
                    </div>
                </div>
            );
        }

        return (
             <div className="text-center space-y-3">
                <p className="text-sm font-medium text-foreground">Please sign in to continue the conversation.</p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <Button variant="default" onClick={() => handleAuthProviderSignIn(new GoogleAuthProvider())} className="w-full">
                         <FaGoogle className="mr-2 h-4 w-4" /> Sign in with Google
                    </Button>
                    <Button variant="default" onClick={() => handleAuthProviderSignIn(new GithubAuthProvider())} className="w-full">
                        <FaGithub className="mr-2 h-4 w-4" /> Sign in with GitHub
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full bg-secondary/50">
            <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                    {messages.map(message => (
                        <div key={message.id} className={cn("flex items-end gap-2", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                           {message.role === 'model' && (
                             <Avatar className="h-8 w-8 flex-shrink-0">
                                <AvatarImage src="/icon.svg" alt="Bot" />
                                <AvatarFallback>B</AvatarFallback>
                            </Avatar>
                           )}
                            <div className={cn(
                                "max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap",
                                message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground shadow-sm'
                            )}>
                                {message.role === 'model' ? <MarkdownContent content={message.content} /> : message.content}
                            </div>
                            {message.role === 'user' && (
                               <Avatar className="h-8 w-8 flex-shrink-0">
                                    <AvatarImage src={user?.photoURL ?? undefined} alt="User" />
                                    <AvatarFallback>{user?.displayName?.[0] || 'U'}</AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    ))}
                     {isLoading && (
                        <div className="flex items-end gap-2 justify-start">
                             <Avatar className="h-8 w-8">
                                <AvatarImage src="/icon.svg" alt="Bot" />
                                <AvatarFallback>B</AvatarFallback>
                            </Avatar>
                            <div className="max-w-[75%] rounded-lg px-3 py-2 text-sm bg-background text-foreground shadow-sm flex items-center">
                                <Loader2 className="h-4 w-4 animate-spin" />
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
            <div className="p-4 border-t bg-background">
                {renderInputArea()}
            </div>
        </div>
    );
}
