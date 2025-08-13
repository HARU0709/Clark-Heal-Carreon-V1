
'use server';
/**
 * @fileOverview A chatbot flow for the portfolio website.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { getProjects } from '@/lib/project-data';
import { getArticles } from '@/lib/blog-data';
import type { Testimonial } from '@/types';

// Data from testimonials section
const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Clark is an exceptional developer with a keen eye for detail and a strong commitment to quality. He consistently delivered outstanding results and was a pleasure to work with. His problem-solving skills are top-notch!",
    author: 'Alvin Reyes',
    title: 'Colleague'
  },
  {
    id: '2',
    quote: "Working with Clark on our recent project was a fantastic experience. His technical expertise and proactive communication ensured we stayed on track and launched successfully. Highly recommended!",
    author: 'Jericho Dela Cruz',
    title: 'Project Manager'
  },
  {
    id: '3',
    quote: "The UI/UX work Clark provided was transformative for our application. He has a great understanding of user needs and translates them into beautiful, functional designs. A true asset to any team.",
    author: 'Renzo Bautista',
    title: 'Client'
  },
];

// Prepare context from project data
const projectContext = getProjects().map(p => ({
    title: p.title,
    description: p.description,
    skills: p.skills,
    category: p.category,
})).map(p => `Project: ${p.title}\nDescription: ${p.description}\nCategory: ${p.category}\nSkills: ${p.skills.join(', ')}`).join('\n\n');

const articleContext = getArticles().map(a => ({
    title: a.title,
    excerpt: a.excerpt,
    tags: a.tags,
    date: a.date,
})).map(a => `Article: ${a.title}\nExcerpt: ${a.excerpt}\nTags: ${a.tags.join(', ')}\nDate: ${a.date}`).join('\n\n');

const testimonialContext = testimonials.map(t => `Testimonial from ${t.author} (${t.title}): "${t.quote}"`).join('\n');

const skillsContext = `
Clark's Skills:
- **Frontend:** HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS, ShadCN UI
- **Backend:** Node.js, Express.js, Python, Django, REST APIs, GraphQL
- **Databases:** PostgreSQL, MongoDB, Firebase, SQL
- **Tools:** Git, GitHub, Docker, VS Code, Figma, Genkit
`;

const aboutContext = `
About Clark:
- **Background:** Clark is a passionate Full Stack Developer with over 5 years of experience, specializing in both frontend and backend technologies. He has worked on a diverse range of projects from e-commerce platforms to complex enterprise applications. His approach combines technical expertise with a keen eye for design, ensuring applications are functional and deliver exceptional user experiences. He is dedicated to continuous learning to stay at the forefront of web development.
- **Core Values:** Quality-focused, Innovation-driven, User-centered, and a Continuous learner.
- **Education:**
  - Bachelor of Science in Information Technology from Zamboanga Peninsula Polytechnic State University (June 12, 2023) - Dean's Lister.
  - Information and Communication Technology from Ayala National High School (April 6, 2017) - With Honors.
- **Achievements:**
  - Technical Drafting NC III (2016)
  - 3D Animation NC II (2017)
  - Computer System Servicing NC II (2017)
  - Logo making contest winner (2016)
  - Certificate of Participation for Information Security Training (2021)
  - Certificate of Recognition for attending ICT camp as a Guest Speaker (2023)
- **Interests:** Reading technical books and manga, coffee, traveling, and motorcycle rides.
`;

const contactContext = `
**Contact Information:**
- **Email:** carreonclark72@gmail.com
- **Phone:** +63 9362536991
- **Address:** Zone 8, Ayala, Zamboanga City, Zamboanga Del Sur Philippines, 7000

**Availability:** Clark is currently available for freelance projects. Daily 09 am - 05 pm.

**Get in Touch:** To contact Clark, visitors should use the contact form on the website or the "Hire Me" button. When asked for a link or how to get in touch, provide a markdown link to '#contact'.
`;


const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })),
  message: z.string(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const systemPrompt = `You are a friendly and helpful AI assistant for Clark Heal Carreon's personal portfolio website. Your name is "ClarkBot".
Your goal is to answer questions from visitors about Clark's skills, projects, blog posts, background, education, achievements, testimonials, and availability.
Be conversational, concise, and professional. Use markdown for formatting, especially for lists. Ensure list items are on new lines.
Use the context provided below to answer questions. If the answer isn't in the context, say that you don't have that information but that Clark would be happy to answer directly.
When a user asks how to contact Clark or for a link, you should provide a direct markdown link to the contact section like this: "[You can reach him through the contact form](#contact)".

${contactContext}

**Context on About Clark:**
${aboutContext}

**Context on Projects:**
${projectContext}

**Context on Skills:**
${skillsContext}

**Context on Writings/Blog Posts:**
${articleContext}

**Context on Testimonials:**
${testimonialContext}
`;

    // Filter out the initial greeting from the history if it's the first message.
    const filteredHistory = input.history.length > 0 && input.history[0].role === 'model' 
      ? input.history.slice(1) 
      : input.history;
      
    const history = filteredHistory.map(msg => ({
      role: msg.role,
      content: [{ text: msg.content }],
    }));

    const { text } = await ai.generate({
      model: 'googleai/gemini-2.0-flash',
      system: systemPrompt,
      messages: [
        ...history,
        { role: 'user', content: [{ text: input.message }] },
      ],
    });

    return { response: text ?? "Sorry, I couldn't generate a response." };
  }
);
