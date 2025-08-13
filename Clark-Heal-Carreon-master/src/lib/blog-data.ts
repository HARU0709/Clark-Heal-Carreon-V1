
import type { Article } from '@/types';

const articles: Article[] = [
  {
    id: '1',
    title: 'Mastering React Hooks: A Deep Dive into useState and useEffect',
    excerpt: 'Unlock the full potential of functional components in React by mastering the two most fundamental hooks: useState and useEffect. This guide provides practical examples and best practices.',
    content: `
      <p>In the world of modern React, functional components and hooks have become the standard for building dynamic and efficient user interfaces. Among the plethora of available hooks, <code>useState</code> and <code>useEffect</code> are the cornerstones you'll use in almost every component. Mastering them is crucial for any React developer.</p>
      
      <h3 class="mt-8 mb-4 text-2xl font-semibold">The Power of <code>useState</code></h3>
      <p>Before hooks, managing state in components required converting them into class components. The <code>useState</code> hook changed the game entirely. It allows you to add state to functional components with a simple, declarative API.</p>
      <pre><code class="language-javascript">
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      </code></pre>
      <p>Here, <code>useState(0)</code> initializes our state <code>count</code> with a value of 0. It returns an array containing the current state value and a function (<code>setCount</code>) to update it. It's clean, concise, and incredibly powerful.</p>

      <h4 class="mt-6 mb-2 text-xl font-semibold">Do's and Don'ts of <code>useState</code></h4>
      <ul>
        <li><strong>Do:</strong> Use multiple <code>useState</code> hooks for unrelated state variables. It keeps your state logic separated and easier to manage.</li>
        <li><strong>Don't:</strong> Modify state directly. Always use the setter function (e.g., <code>setCount</code>) to update state and trigger a re-render.</li>
        <li><strong>Do:</strong> Use a functional update when your new state depends on the previous state. For example: <code>setCount(prevCount => prevCount + 1)</code>. This avoids potential issues with stale state in closures.</li>
      </ul>

      <h3 class="mt-8 mb-4 text-2xl font-semibold">Handling Side Effects with <code>useEffect</code></h3>
      <p>What about actions that need to happen outside the normal component rendering flow, like fetching data, setting up subscriptions, or manually changing the DOM? That's where <code>useEffect</code> comes in.</p>
      <p>The <code>useEffect</code> hook runs after every render by default. However, you can control when it runs by providing a dependency array.</p>
       <pre><code class="language-javascript">
import { useState, useEffect } from 'react';

function DataFetcher({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // This effect runs when 'userId' changes
  useEffect(() => {
    setLoading(true);
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); 

  // This effect runs only once, after the initial render
  useEffect(() => {
    document.title = 'User Profile';
  }, []); // Empty dependency array

  if (loading) return <p>Loading...</p>;

  return <div>{user.name}</div>;
}
      </code></pre>
      
      <h4 class="mt-6 mb-2 text-xl font-semibold">The Cleanup Function</h4>
      <p>Sometimes, effects need to be cleaned up. For example, if you set up a subscription or a timer, you need to clear it when the component unmounts to prevent memory leaks. <code>useEffect</code> allows you to return a function that will handle this cleanup.</p>
       <pre><code class="language-javascript">
useEffect(() => {
  const timerId = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timerId);
    console.log('Timer cleared');
  };
}, []);
      </code></pre>
      <p>This hook is essential for integrating your React components with the outside world, making it a fundamental tool for building complex applications.</p>`,
    imageUrl: 'https://i.ibb.co/P2yfRkR/5413.webp',
    imageHint: 'react code editor',
    slug: 'mastering-react-hooks',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-07-15',
    tags: ['React', 'JavaScript', 'Web Development'],
  },
  {
    id: '2',
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Learn how to design, build, and deploy robust and scalable REST APIs using Node.js and the Express framework. We will cover everything from routing to error handling.',
    content: `
      <p>Node.js, with its event-driven, non-blocking I/O model, has become a go-to choice for building fast and scalable network applications. When paired with the Express framework, creating powerful REST APIs becomes a streamlined and enjoyable process.</p>
      
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Setting Up Your Express Server</h3>
      <p>Getting started is incredibly simple. After initializing a Node.js project and installing Express, a basic server can be up and running in just a few lines of code.</p>
      <pre><code class="language-javascript">
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
      </code></pre>

      <h3 class="mt-8 mb-4 text-2xl font-semibold">Structuring Your Application for Scale</h3>
      <p>While the above is fine for a "Hello World," a real-world application requires structure. A common pattern is to separate your concerns into different directories:</p>
      <ul>
        <li><code>/routes</code>: Defines the API endpoints and maps them to controller functions.</li>
        <li><code>/controllers</code>: Contains the business logic for each route.</li>
        <li><code>/services</code>: Handles interactions with databases or external APIs.</li>
        <li><code>/middleware</code>: For functions that process requests before they reach the controller, like authentication or logging.</li>
      </ul>
      <p>This separation makes your code easier to maintain, test, and scale as your application grows in complexity.</p>
      
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Middleware and Error Handling</h3>
      <p>Middleware functions are the backbone of an Express application. They can execute any code, make changes to the request and response objects, and end the request-response cycle.</p>
      <pre><code class="language-javascript">
// Example: A simple logging middleware
const requestLogger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // Pass control to the next middleware
};

app.use(requestLogger);

// Example: A centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
      </code></pre>
      <p>A robust error-handling strategy is crucial. By defining a special error-handling middleware (one that accepts four arguments), you can catch and process errors from anywhere in your application in a consistent way.</p>`,
    imageUrl: 'https://i.ibb.co/5W6FbmGY/Add-a-subheading-6.webp',
    imageHint: 'server infrastructure diagram',
    slug: 'scalable-nodejs-apis',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-06-28',
    tags: ['Node.js', 'API', 'Backend'],
  },
  {
    id: '3',
    title: 'The Art of UI/UX: Principles for Developers',
    excerpt: 'You don\'t need to be a designer to create beautiful UIs. This article breaks down key UI/UX principles that every developer can apply to build more intuitive and user-friendly applications.',
    content: `
      <p>As developers, we often focus on functionality, performance, and clean code. However, the user's experience (UX) and the user interface (UI) are just as critical to a project's success. A powerful application with a poor interface will struggle to gain traction. Here are a few key principles to keep in mind.</p>
      
      <h3 class="mt-8 mb-4 text-2xl font-semibold">1. Consistency is Key</h3>
      <p>A consistent interface is predictable and easy to learn. Buttons, menus, and other interactive elements should look and behave the same way throughout your application. This builds a sense of familiarity and trust for the user.</p>
      <ul>
        <li><strong>Do:</strong> Create a style guide or use a component library (like ShadCN) to maintain consistency in colors, typography, and spacing.</li>
        <li><strong>Don't:</strong> Use different designs for the same type of element on different pages. A "Submit" button should always look like a "Submit" button.</li>
      </ul>

      <h3 class="mt-8 mb-4 text-2xl font-semibold">2. Hierarchy and Clarity</h3>
      <p>Visual hierarchy guides the user's eye to the most important elements on the page. Use size, color, contrast, and placement to create a clear path of information. A well-defined heading structure, prominent call-to-action buttons, and logical grouping of related items are essential.</p>

      <h3 class="mt-8 mb-4 text-2xl font-semibold">3. Feedback and Communication</h3>
      <p>Always let the user know what's happening. The system should provide immediate and clear feedback for every user action.</p>
      <ul>
        <li><strong>Do:</strong> Show a loading spinner when data is being fetched. Display a success message after a form is submitted. Provide clear, helpful error messages right next to the form field with the issue.</li>
        <li><strong>Don't:</strong> Let the user click a button and see nothing happen. This leads to confusion and frustration.</li>
      </ul>

      <h3 class="mt-8 mb-4 text-2xl font-semibold">4. Simplicity and "Less is More"</h3>
      <p>Avoid clutter. Every extra element on the screen competes for the user's attention. A clean, minimal design makes it easier for users to find what they're looking for and complete their tasks.</p>
      <p>By incorporating these simple principles, you can significantly improve the quality of your applications, making them not just functional, but truly enjoyable to use.</p>`,
    imageUrl: 'https://i.ibb.co/6Jvxpt8p/16683353-5757453.webp',
    imageHint: 'ui design wireframe',
    slug: 'ui-ux-for-developers',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-05-10',
    tags: ['UI/UX', 'Design', 'Frontend'],
  },
  {
    id: '4',
    title: 'Styling Made Easy: A Beginner\'s Guide to Tailwind CSS',
    excerpt: 'Learn how Tailwind CSS can revolutionize your workflow by building custom designs without ever leaving your HTML. This guide covers the basics of utility-first CSS and how to get started.',
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. It's a different approach from component-based frameworks like Bootstrap or Material UI, offering more flexibility and control without being tied to pre-built components.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Core Concepts: The Utility-First Approach</h3>
      <p>With Tailwind, instead of writing custom CSS, you apply pre-existing classes. For example, to create a simple card component, you might do this:</p>
      <pre><code class="language-html">
&lt;div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"&gt;
  &lt;div class="shrink-0"&gt;
    &lt;img class="h-12 w-12" src="/logo.svg" alt="ChitChat Logo"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;div class="text-xl font-medium text-black"&gt;ChitChat&lt;/div&gt;
    &lt;p class="text-slate-500"&gt;You have a new message!&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
      </code></pre>
      <p>This approach keeps your styling co-located with your HTML, which can speed up development significantly. You're not context-switching between HTML and CSS files, and you're not trying to come up with clever class names.</p>
      
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Do's and Don'ts of Tailwind CSS</h3>
      <ul>
          <li><strong>Do:</strong> Use <code>@apply</code> in your CSS for repeated utility combinations. This is great for custom button styles or form inputs that you use across your application.</li>
          <pre><code class="language-css">
.btn-primary {
  @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700;
}
          </code></pre>
          <li><strong>Don't:</strong> Overuse <code>@apply</code>. The primary benefit of Tailwind is working directly in your markup. Only extract components when you have a clear, reusable pattern.</li>
          <li><strong>Do:</strong> Customize your <code>tailwind.config.js</code> file. Add your brand colors, fonts, and spacing to create a design system that is unique to your project.</li>
          <li><strong>Don't:</strong> Be afraid of long class lists in your HTML. It's the intended way to use the framework. Use a code formatter and consider breaking down your UI into smaller components if readability becomes an issue.</li>
      </ul>

      <p class="mt-6">Getting started is easy with the Tailwind CLI or by integrating it into a modern frontend framework like Next.js or Vite. Once set up, you can start using thousands of utility classes to style every aspect of your application, from layout and spacing to typography and color.</p>`,
    imageUrl: 'https://i.ibb.co/v6hwjMMn/Add-a-subheading-7.webp',
    imageHint: 'css code snippet',
    slug: 'tailwind-css-beginners-guide',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-07-22',
    tags: ['Tailwind CSS', 'Frontend', 'CSS'],
  },
  {
    id: '5',
    title: 'Global State in React: When to Use Redux vs. Context API',
    excerpt: 'Dive into two of React\'s most popular state management solutions. We\'ll explore the pros and cons of Redux and the built-in Context API to help you decide which is right for your project.',
    content: `
      <p>Choosing the right state management tool is a critical decision in any React project. As an application grows, passing state down through props (prop drilling) becomes cumbersome and hard to maintain. This is where global state management solutions come in.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">The Context API: Simple and Built-in</h3>
      <p>The Context API is React's built-in solution for sharing state. It's perfect for passing data through the component tree without having to pass props down manually at every level. It's best suited for low-frequency updates, such as theme data, user authentication status, or language preference.</p>
       <pre><code class="language-javascript">
// 1. Create a context
const ThemeContext = React.createContext('light');

// 2. Provide the context value
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Consume the context value
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <Button theme={theme} />;
}
      </code></pre>
      <p><strong>When to use Context:</strong> Simple state, low-frequency updates, avoiding prop drilling for things like theme or user info.</p>
      <p><strong>Potential Pitfall:</strong> It can lead to performance issues if not used carefully, as any change to the context value will re-render all consuming components, regardless of whether they use that specific piece of state.</p>
      
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Enter Redux: Predictable and Scalable</h3>
      <p>For more complex applications with high-frequency updates or complex state logic, Redux (now almost always used with Redux Toolkit) provides a more robust solution. It offers a centralized store, predictable state updates via reducers, and powerful developer tools for debugging time-travel style.</p>
      <p><strong>When to use Redux:</strong> Large-scale applications, complex state logic, high-frequency updates, when many components need to share and modify the same state.</p>
      <p>While it has a steeper learning curve, its scalability, performance optimizations (via selectors), and excellent dev tools make it a worthy investment for large projects. Libraries like Redux Toolkit have significantly reduced the boilerplate code, making it much more approachable than it used to be.</p>`,
    imageUrl: 'https://i.ibb.co/5zkQWTD/Add-a-subheading-10.webp',
    imageHint: 'data flow diagram',
    slug: 'redux-vs-context-api',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-07-18',
    tags: ['React', 'State Management', 'Redux'],
  },
  {
    id: '6',
    title: 'An Introduction to Docker for Web Developers',
    excerpt: 'Simplify your development workflow and eliminate "it works on my machine" issues by learning the fundamentals of Docker. This article explains how to containerize your web applications.',
    content: `
      <p>Docker is a platform for developing, shipping, and running applications in containers. A container packages up code and all its dependencies, ensuring that the application runs quickly and reliably from one computing environment to another. This solves the classic "it works on my machine" problem.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Why Use Docker?</h3>
      <ul>
        <li><strong>Consistency:</strong> It provides a consistent development environment for the entire team.</li>
        <li><strong>Isolation:</strong> Apps run in isolated containers, so they don't interfere with each other.</li>
        <li><strong>Portability:</strong> A containerized app can run on any machine that has Docker installed, from a developer's laptop to a production server in the cloud.</li>
      </ul>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">The Dockerfile: Your App's Blueprint</h3>
      <p>You define your application's environment in a simple text file called a <code>Dockerfile</code>. This file contains a series of instructions that Docker follows to build your image.</p>
      <pre><code class="language-dockerfile">
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Your app binds to port 3000, so expose it
EXPOSE 3000

# Define the command to run your app
CMD [ "node", "server.js" ]
      </code></pre>
      <p>With this file, you can run <code>docker build -t my-node-app .</code> to create a reusable image, and then <code>docker run -p 4000:3000 my-node-app</code> to start your application, accessible on your machine at port 4000.</p>`,
    imageUrl: 'https://i.ibb.co/5gzqVC0B/Add-a-subheading-12.webp',
    imageHint: 'docker containers illustration',
    slug: 'docker-for-web-developers',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-07-12',
    tags: ['Docker', 'DevOps', 'Backend'],
  },
  {
    id: '7',
    title: 'Securing Your Web App: An Overview of JWT Authentication',
    excerpt: 'Learn how JSON Web Tokens (JWT) work and how to implement a secure authentication flow in your web applications. This guide covers the basics of creating, sending, and verifying tokens.',
    content: `
      <p>JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. In web development, they are a popular method for handling user authentication in a stateless way.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">The JWT Authentication Flow</h3>
      <ol class="list-decimal list-inside space-y-2">
        <li>A user logs in with their credentials (e.g., email and password).</li>
        <li>The server verifies the credentials. If they are correct, it creates a JWT containing a payload of user information (like user ID and roles). The server then signs the token with a secret key.</li>
        <li>The server sends this token back to the client.</li>
        <li>The client stores the JWT (typically in an HttpOnly cookie or local storage) and sends it in the Authorization header of every subsequent request to protected routes.</li>
        <li>The server receives the request, verifies the token's signature using its secret key, and if valid, processes the request.</li>
      </ol>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">JWT Structure</h3>
      <p>A JWT consists of three parts separated by dots: the Header, the Payload, and the Signature. <code>xxxxx.yyyyy.zzzzz</code></p>
      <ul>
        <li><strong>Header:</strong> Contains the token type (JWT) and the signing algorithm being used (e.g., HMAC SHA256 or RSA).</li>
        <li><strong>Payload:</strong> Contains the claims. Claims are statements about an entity (typically, the user) and additional data.</li>
        <li><strong>Signature:</strong> To create the signature part, you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.</li>
      </ul>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Important Security Considerations</h3>
      <ul>
        <li><strong>Don't store sensitive data in the payload:</strong> The payload is readable by anyone. Only store non-sensitive information.</li>
        <li><strong>Use a strong secret key:</strong> Your secret key is what ensures the token's integrity. Keep it secure and don't expose it.</li>
        <li><strong>Set an expiration date:</strong> Always include an expiration claim (<code>exp</code>) in your tokens to limit the time a token is valid.</li>
      </ul>`,
    imageUrl: 'https://i.ibb.co/BGCy2Tt/19199200-6086884.webp',
    imageHint: 'security lock icon',
    slug: 'jwt-authentication-guide',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-07-05',
    tags: ['Security', 'JWT', 'Authentication'],
  },
  {
    id: '8',
    title: 'Getting Started with GraphQL',
    excerpt: 'Tired of over-fetching and under-fetching with REST APIs? GraphQL might be the solution. This introduction covers the core concepts of GraphQL and how it compares to traditional REST.',
    content: `
      <p>GraphQL is a query language for your API and a server-side runtime for executing those queries by using a type system you define for your data. It gives clients the power to ask for exactly what they need and nothing more.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">GraphQL vs. REST: A Quick Comparison</h3>
      <p>Unlike REST, which exposes a multitude of endpoints for different resources (e.g., <code>/users</code>, <code>/posts/:id</code>), a GraphQL API typically has a single endpoint. The client sends a query specifying the exact data it needs, and the server responds with a JSON object matching that structure.</p>
      <p>This solves two common problems with REST:</p>
      <ol>
        <li><strong>Over-fetching:</strong> Getting more data than you need because an endpoint returns a fixed data structure.</li>
        <li><strong>Under-fetching:</strong> Having to make multiple API calls to get all the data you need for a single view.</li>
      </ol>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Core Concepts of GraphQL</h3>
      <ul>
          <li><strong>Schema Definition Language (SDL):</strong> You define the capabilities of your API in a schema. This schema is a contract between the client and the server.</li>
          <pre><code class="language-graphql">
type Query {
  user(id: ID!): User
}

type User {
  id: ID!
  name: String
  email: String
  posts: [Post]
}

type Post {
  id: ID!
  title: String
  content: String
}
          </code></pre>
          <li><strong>Queries:</strong> How clients fetch data. The query structure mirrors the shape of the JSON response.</li>
          <pre><code class="language-graphql">
query GetUserWithPosts {
  user(id: "1") {
    name
    email
    posts {
      title
    }
  }
}
          </code></pre>
          <li><strong>Mutations:</strong> How clients create, update, or delete data.</li>
          <li><strong>Subscriptions:</strong> A way to maintain a real-time connection to the server, enabling it to push updates to the client.</li>
      </ul>
      <p>This article explores these concepts, providing a solid foundation for anyone looking to get started with this powerful technology.</p>`,
    imageUrl: 'https://i.ibb.co/mH04w6G/Add-a-subheading-8.webp',
    imageHint: 'graphql api query',
    slug: 'getting-started-with-graphql',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-06-20',
    tags: ['GraphQL', 'API', 'Backend'],
  },
  {
    id: '9',
    title: 'Optimizing Web Performance: Core Web Vitals Explained',
    excerpt: 'Good performance is crucial for user experience and SEO. This guide breaks down Google\'s Core Web Vitals (LCP, FID, CLS) and provides actionable tips to optimize them for your website.',
    content: `
      <p>Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience. They are made up of three specific page speed and user interaction measurements: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Largest Contentful Paint (LCP)</h3>
      <p><strong>What it measures:</strong> Loading performance. Specifically, the time it takes for the largest image or text block visible within the viewport to be rendered.</p>
      <p><strong>Goal:</strong> LCP should occur within <strong>2.5 seconds</strong> of when the page first starts loading.</p>
      <p><strong>How to improve it:</strong> Optimize images (compress and use modern formats like WebP), pre-load important resources, and reduce server response times.</p>
      
      <h3 class="mt-8 mb-4 text-2xl font-semibold">First Input Delay (FID)</h3>
      <p><strong>What it measures:</strong> Interactivity. The time from when a user first interacts with a page (e.g., clicks a button) to the time when the browser is actually able to respond to that interaction.</p>
      <p><strong>Goal:</strong> Pages should have an FID of <strong>100 milliseconds</strong> or less.</p>
      <p><strong>How to improve it:</strong> Break up long-running JavaScript tasks, use web workers to run scripts in the background, and minimize third-party script usage.</p>

      <h3 class="mt-8 mb-4 text-2xl font-semibold">Cumulative Layout Shift (CLS)</h3>
      <p><strong>What it measures:</strong> Visual stability. The unexpected shifting of page content while the page is still loading.</p>
      <p><strong>Goal:</strong> Maintain a CLS score of <strong>0.1</strong> or less.</p>
      <p><strong>How to improve it:</strong> Always include size attributes on your images and video elements, or otherwise reserve the required space with CSS. Avoid inserting content above existing content, except in response to a user interaction.</p>`,
    imageUrl: 'https://i.ibb.co/gDFvK0h/13355393-5212937.webp',
    imageHint: 'website performance dashboard',
    slug: 'core-web-vitals-explained',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-06-11',
    tags: ['Performance', 'SEO', 'Web Vitals'],
  },
  {
    id: '10',
    title: 'Advanced TypeScript: Mastering Utility Types',
    excerpt: 'Take your TypeScript skills to the next level by learning how to use built-in utility types like Partial, Required, Pick, and Omit to write more flexible and robust code.',
    content: `
      <p>TypeScript's utility types are powerful tools that allow you to manipulate and transform existing types. Mastering them can help you write cleaner, more maintainable, and less repetitive code.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold"><code>Partial&lt;T&gt;</code> and <code>Required&lt;T&gt;</code></h3>
      <p><code>Partial&lt;T&gt;</code> constructs a type with all properties of <code>T</code> set to optional. This is incredibly useful for writing update functions where a user might only provide a subset of properties.</p>
      <p><code>Required&lt;T&gt;</code> is the opposite, making all properties of <code>T</code> required.</p>
      <pre><code class="language-typescript">
interface User {
  id: number;
  name?: string;
  email?: string;
}

// All properties are now optional
type PartialUser = Partial<User>;

// All properties are now required
type RequiredUser = Required<User>;
      </code></pre>
      <h3 class="mt-8 mb-4 text-2xl font-semibold"><code>Pick&lt;T, K&gt;</code> and <code>Omit&lt;T, K&gt;</code></h3>
      <p><code>Pick&lt;T, K&gt;</code> constructs a new type by picking a set of properties <code>K</code> from an existing type <code>T</code>.</p>
      <p><code>Omit&lt;T, K&gt;</code> does the opposite, creating a type by removing a set of properties <code>K</code> from <code>T</code>.</p>
      <pre><code class="language-typescript">
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// Creates a type with only 'title' and 'completed'
type TodoPreview = Pick<Todo, "title" | "completed">;

// Creates a type with all properties except 'createdAt'
type TodoUpdate = Omit<Todo, "createdAt">;
      </code></pre>
      <p>By leveraging these and other utility types, you can create highly flexible and type-safe APIs and components, reducing bugs and improving the developer experience.</p>`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'typescript code',
    slug: 'advanced-typescript-utility-types',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-08-01',
    tags: ['TypeScript', 'Web Development', 'Best Practices'],
  },
  {
    id: '11',
    title: 'The Rise of Server Components in Next.js',
    excerpt: 'Explore the new paradigm of React Server Components (RSC) in Next.js. Understand how they work, why they improve performance, and when to use them versus Client Components.',
    content: `
      <p>With the introduction of the App Router, Next.js has embraced React Server Components (RSC) as the default. This marks a significant shift in how we think about building React applications, moving much of the rendering and data fetching logic to the server.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">What are Server Components?</h3>
      <p>Server Components are React components that run exclusively on the server. They have direct access to server-side resources like databases and file systems. They render ahead of time and send a non-interactive, HTML-like result to the client. This significantly reduces the amount of JavaScript sent to the browser, leading to faster initial page loads.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Server vs. Client Components</h3>
      <p>In the Next.js App Router, all components are Server Components by default. To create a component that runs on the client (i.e., a traditional React component with state and effects), you must explicitly mark it with the <code>'use client'</code> directive at the top of the file.</p>
      <h4 class="mt-6 mb-2 text-xl font-semibold">When to use Server Components:</h4>
      <ul>
        <li>For fetching data directly from a backend source.</li>
        <li>To access sensitive information or environment variables on the server.</li>
        <li>For large components that don't require interactivity, reducing the client-side bundle size.</li>
      </ul>
      <h4 class="mt-6 mb-2 text-xl font-semibold">When to use Client Components:</h4>
      <ul>
        <li>When you need to use hooks like <code>useState</code> or <code>useEffect</code>.</li>
        <li>For components that require event listeners (e.g., <code>onClick</code>, <code>onChange</code>).</li>
        <li>When you need to access browser-only APIs like <code>window</code> or <code>localStorage</code>.</li>
      </ul>
      <p>Understanding this distinction is key to building modern, performant applications with the Next.js App Router.</p>`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'nextjs logo server',
    slug: 'server-components-nextjs',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-07-28',
    tags: ['Next.js', 'React', 'Performance'],
  },
  {
    id: '12',
    title: 'A Guide to CSS Grid for Modern Web Layouts',
    excerpt: 'Move beyond Flexbox and master the power of CSS Grid for creating complex, two-dimensional layouts with ease. This guide covers the essential concepts of grid containers and items.',
    content: `
      <p>While Flexbox is excellent for one-dimensional layouts, CSS Grid is the undisputed champion for creating complex, two-dimensional grids. It gives you precise control over both rows and columns simultaneously.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Defining a Grid Container</h3>
      <p>It all starts by declaring <code>display: grid</code> on a container element. From there, you can define your columns and rows using <code>grid-template-columns</code> and <code>grid-template-rows</code>.</p>
      <pre><code class="language-css">
.grid-container {
  display: grid;
  /* Creates three equal-width columns */
  grid-template-columns: 1fr 1fr 1fr;
  /* Creates two rows, the first 100px high, the second 200px high */
  grid-template-rows: 100px 200px;
  gap: 1rem; /* Adds space between grid items */
}
      </code></pre>
      <p>The <code>fr</code> unit is incredibly powerful, allowing you to create flexible grids that distribute free space proportionally.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Placing Grid Items</h3>
      <p>You can then place items within this grid explicitly using line numbers or named grid areas.</p>
      <pre><code class="language-css">
.item-a {
  /* Start at column line 1, end at column line 3 */
  grid-column: 1 / 3;
  /* Start at row line 1, end at row line 2 */
  grid-row: 1 / 2;
}
      </code></pre>
      <p>This simple example only scratches the surface. CSS Grid also allows for creating responsive layouts with <code>minmax()</code> and <code>auto-fit</code>, aligning items with <code>justify-items</code> and <code>align-items</code>, and much more. It is an essential tool for any modern frontend developer.</p>`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'css grid layout',
    slug: 'css-grid-guide',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-07-25',
    tags: ['CSS', 'Frontend', 'Web Design'],
  },
  {
    id: '13',
    title: 'Using Genkit with Next.js for AI-Powered Features',
    excerpt: 'Learn how to integrate Google\'s Genkit into your Next.js application to easily build and manage AI-powered features, from simple text generation to complex, multi-step flows.',
    content: `
      <p>Genkit is an open-source framework from Google designed to simplify the development of AI-powered applications. When combined with Next.js, it provides a powerful stack for building, deploying, and monitoring generative AI features.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Setting Up Genkit Flows</h3>
      <p>A core concept in Genkit is the "flow". A flow is a function that orchestrates calls to AI models, tools, and other logic. Because they are just TypeScript functions, they integrate seamlessly into a Next.js backend, often as Server Actions.</p>
      <pre><code class="language-typescript">
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Define input and output schemas with Zod
const StoryInputSchema = z.object({
  topic: z.string(),
});
const StoryOutputSchema = z.object({
  story: z.string(),
});

// Define the flow
export const generateStoryFlow = ai.defineFlow(
  {
    name: 'generateStoryFlow',
    inputSchema: StoryInputSchema,
    outputSchema: StoryOutputSchema,
  },
  async ({ topic }) => {
    const llmResponse = await ai.generate({
      prompt: \`Write a short story about \${topic}.\`,
    });
    return { story: llmResponse.text };
  }
);
      </code></pre>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Calling Flows from React Components</h3>
      <p>You can then call this flow directly from your React components, just like any other async server function. This makes adding AI features surprisingly straightforward.</p>
      <pre><code class="language-tsx">
'use client';
import { useState } from 'react';
import { generateStoryFlow } from '@/ai/flows/storyFlow';

export function StoryGenerator() {
  const [topic, setTopic] = useState('');
  const [story, setStory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await generateStoryFlow({ topic });
    setStory(result.story);
  };

  // ... form JSX
}
      </code></pre>
      <p>Genkit also provides a local development UI for inspecting flows, tracing their execution, and viewing logs, which is invaluable for debugging complex AI interactions.</p>`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai robot brain',
    slug: 'genkit-with-nextjs',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-08-05',
    tags: ['AI', 'Genkit', 'Next.js', 'TypeScript'],
  },
  {
    id: '14',
    title: 'Accessible Web Design: A Guide for Developers',
    excerpt: 'Web accessibility (a11y) is not just a checklist, it\'s about making your content usable by everyone. This guide covers key principles and practical tips for building accessible websites.',
    content: `
      <p>Web accessibility (often abbreviated as a11y) is the practice of ensuring that your websites and applications are usable by people with disabilities. This includes people with visual, auditory, motor, and cognitive impairments. Building accessible sites is not only the right thing to do, it also benefits all users and can improve your SEO.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Semantic HTML is Your Foundation</h3>
      <p>The easiest and most important step towards accessibility is using HTML elements for their intended purpose. Use <code>&lt;nav&gt;</code> for navigation, <code>&lt;button&gt;</code> for buttons, and proper heading tags (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc.) to structure your content. This provides a clear structure that screen readers can understand.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">Key Areas to Focus On</h3>
      <ul>
        <li><strong>Image Alt Text:</strong> Always provide descriptive <code>alt</code> text for images. If an image is purely decorative, use an empty alt attribute (<code>alt=""</code>).</li>
        <li><strong>Keyboard Navigation:</strong> Ensure that all interactive elements (links, buttons, form fields) can be reached and operated using only the keyboard. The focus order should be logical.</li>
        <li><strong>Color Contrast:</strong> Text should have sufficient contrast against its background to be readable by people with low vision. Use tools to check your color combinations against WCAG guidelines.</li>
        <li><strong>Forms:</strong> Always associate a <code>&lt;label&gt;</code> with every form control. Use the <code>for</code> attribute on the label and the <code>id</code> attribute on the input.</li>
      </ul>
      <p>By keeping these principles in mind from the start of a project, you can build websites that are more robust, inclusive, and user-friendly for everyone.</p>`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'accessibility icon person',
    slug: 'accessible-web-design-guide',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-07-30',
    tags: ['Accessibility', 'HTML', 'CSS', 'Best Practices'],
  },
  {
    id: '15',
    title: 'Database Choices for Modern Web Apps: SQL vs. NoSQL',
    excerpt: 'Choosing the right database is a critical architectural decision. This article compares the strengths and weaknesses of SQL (like PostgreSQL) and NoSQL (like MongoDB) databases.',
    content: `
      <p>When building a new application, one of the first major decisions is which type of database to use. The two main categories are SQL (relational) and NoSQL (non-relational). Neither is universally better; the right choice depends on your application's needs.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">SQL Databases (e.g., PostgreSQL, MySQL)</h3>
      <p>SQL databases have been the standard for decades. They store data in tables with rows and columns, and they enforce a predefined schema. This rigid structure ensures data integrity and consistency.</p>
      <p><strong>Strengths:</strong></p>
      <ul>
        <li><strong>ACID Compliance:</strong> Guarantees reliability for transactions.</li>
        <li><strong>Structured Data:</strong> Excellent for applications where data structure is well-defined and doesn't change often.</li>
        <li><strong>Powerful Queries:</strong> The SQL language is mature and powerful, allowing for complex joins and queries.</li>
      </ul>
      <p><strong>Best for:</strong> E-commerce sites, financial applications, and any system where data consistency is paramount.</p>
      <h3 class="mt-8 mb-4 text-2xl font-semibold">NoSQL Databases (e.g., MongoDB, Firebase Firestore)</h3>
      <p>NoSQL databases arose to handle the demands of large-scale, distributed systems. They are more flexible and often store data in formats like JSON-like documents, key-value pairs, or graphs.</p>
      <p><strong>Strengths:</strong></p>
      <ul>
        <li><strong>Flexible Schema:</strong> You can store documents with different structures in the same collection. Great for rapidly evolving applications.</li>
        <li><strong>Horizontal Scalability:</strong> Designed to scale out across many servers easily.</li>
        <li><strong>High Performance:</strong> Often faster for simple read/write operations on large datasets.</li>
      </ul>
      <p><strong>Best for:</strong> Big data applications, real-time systems, content management systems, and applications with unstructured or rapidly changing data.</p>`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'database server comparison',
    slug: 'sql-vs-nosql-database-choices',
    author: 'Clark Heal Carreon',
    authorImageUrl: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg',
    date: '2024-08-08',
    tags: ['Databases', 'Backend', 'Architecture'],
  },
];

export function getArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getPreviousArticle(currentId: string): Article | undefined {
  const sortedArticles = getArticles();
  const currentIndex = sortedArticles.findIndex(article => article.id === currentId);
  return sortedArticles[currentIndex + 1];
}

export function getNextArticle(currentId: string): Article | undefined {
    const sortedArticles = getArticles();
    const currentIndex = sortedArticles.findIndex(article => article.id === currentId);
    if (currentIndex > 0) {
        return sortedArticles[currentIndex - 1];
    }
    return undefined;
}
