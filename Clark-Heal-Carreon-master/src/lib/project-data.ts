
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    slug: 'advanced-inventory-system-vba',
    title: 'Advanced Inventory System using VBA',
    description: 'A comprehensive inventory system built in Microsoft Access to streamline operations with role-based access and VBA automation.',
    longDescription: 'I developed a project called Advanced Inventory System fully built in Microsoft Access. This system was designed to streamline inventory management and improve operational efficiency through well-defined user roles and automation. The entire system was created within Microsoft Access, utilizing its built-in features for database structure, forms, queries, and reports, while leveraging VBA (Visual Basic for Applications) for custom logic, automation, and enhanced user interaction. It integrates inventory tracking, data imports, role-based access, and reporting—all within a single, user-friendly Access application.',
    imageUrl: 'https://i.ibb.co/DPxYHxKm/Advance-Inventory-Tracking-System-1.png',
    imageHint: 'database application interface',
    gallery: [
        { url: 'https://i.ibb.co/DPxYHxKm/Advance-Inventory-Tracking-System-1.png', caption: 'Login screen with user authentication.', imageHint: 'login screen' },
        { url: 'https://i.ibb.co/KpZDmn9F/Advance-Inventory-Tracking-System-2.png', caption: 'Main dashboard with navigation for different system modules.', imageHint: 'application dashboard' },
        { url: 'https://i.ibb.co/1k1mfZP/Advance-Inventory-Tracking-System-3.png', caption: 'Inventory management view with product details.', imageHint: 'inventory list' },
        { url: 'https://i.ibb.co/Xxdy10YL/Advance-Inventory-Tracking-System-4.png', caption: 'Reporting module for generating stock reports.', imageHint: 'reporting interface' },
        { url: 'https://i.ibb.co/fY8MXMkz/Advance-Inventory-Tracking-System-5.png', caption: 'User account management screen for administrators.', imageHint: 'user management' }
    ],
    projectUrl: '#',
    repoUrl: '#',
    skills: ['Microsoft Access', 'VBA', 'SQL', 'Database Design', 'UI/UX Design', 'Process Automation', 'Excel Integration'],
    achievements: [
      'Full system control for Admins, including user management and system backups.',
      'Role-based access control for Admin, Manager, and User roles.',
      'Functionality to manage products, including those with missing barcodes.',
      'Automated tracking of recently added items and stock movements.',
      'Direct data import from Excel files to streamline data entry.',
      'Comprehensive report generation and management.'
    ],
    category: 'Automation',
    myRole: 'Access/VBA Developer & System Architect',
    problemStatement: 'Businesses often require a robust inventory system with granular user permissions, but custom software can be expensive. A solution was needed that could provide detailed control and automation within a cost-effective, familiar platform.',
    solution: 'I designed and built a multi-user inventory system in Microsoft Access. The system features three distinct user roles (Admin, Manager, User), each with specific permissions. VBA is used extensively to automate tasks like data import from Excel, report generation, system backups, and to create an intuitive user interface with custom forms and logic for managing inventory, purchase orders, and user accounts.',
    responsibilities: [
      'Admin Role: Full system control, manage inventory, track products (including missing barcodes), view recent additions, import from Excel, generate reports, perform backups, and manage user accounts.',
      'Manager Role: Access most features, manage stocks, handle tracking and reporting, perform data imports and backups (cannot manage users).',
      'User Role: View inventory, manage stock movement, create and track Purchase Orders (POs), generate reports, import Excel data, and perform system backups.'
    ]
  },
  {
    id: '2',
    slug: 'rjs-payroll-system',
    title: 'RJS Payroll System',
    description: 'A modern, full-stack web application designed to streamline Human Resources and payroll processes for small to medium-sized businesses.',
    longDescription: 'RJS Payroll System is a modern, full-stack web application designed to streamline Human Resources and payroll processes for small to medium-sized businesses. Built with a powerful and scalable tech stack, this platform provides a centralized hub for managing employee data, attendance, leave, financials, and payroll, all accessible through a clean, role-based user interface.',
    imageUrl: 'https://i.ibb.co/hxM2hrhs/MAIN-DASHBOARD.png',
    imageHint: 'payroll system dashboard',
    gallery: [
      { url: 'https://i.ibb.co/0pdc9msp/LOG-IN-PAGE.png', caption: 'Secure login page for administrators and employees.', imageHint: 'login page' },
      { url: 'https://i.ibb.co/hxM2hrhs/MAIN-DASHBOARD.png', caption: 'The main dashboard provides an at-a-glance overview of key HR metrics.', imageHint: 'admin dashboard' },
      { url: 'https://i.ibb.co/nNS5dLYV/EMPLOYEE-PAGE.png', caption: 'A comprehensive and searchable employee directory with filtering options.', imageHint: 'employee list' },
      { url: 'https://i.ibb.co/0y9rzCyn/LEAVE-PAGE.png', caption: 'The leave management system for submitting and tracking requests.', imageHint: 'leave request form' },
      { url: 'https://i.ibb.co/bj4kgTbW/VISUAL-CALENDAR.png', caption: 'Visual company calendar displaying approved leaves and holidays.', imageHint: 'leave calendar' },
      { url: 'https://i.ibb.co/Zp44PnVc/ATTENDANCE-PAGE.png', caption: 'Admins can view and manage daily attendance records.', imageHint: 'attendance records' },
      { url: 'https://i.ibb.co/xqy4nq6n/PAYROLL-PAGE.png', caption: 'Payroll processing page for generating payslips for selected periods.', imageHint: 'payroll processing' },
      { url: 'https://i.ibb.co/TBj5HMnt/VIEW-PAYSLIP-PAGE.png', caption: 'A generated payslip with a detailed breakdown of earnings and deductions.', imageHint: 'payslip document' },
      { url: 'https://i.ibb.co/CKbBDhLG/FINANCIALS-APGE.png', caption: 'Financials page for managing employee loans and company benefits.', imageHint: 'financials page' }
    ],
    projectUrl: 'https://rjs-payroll-system.vercel.app/login',
    repoUrl: '#',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Firebase', 'Firestore', 'React Hook Form', 'Zod', 'Genkit'],
    achievements: [
      'Role-Based Access Control (RBAC) for Admins and Employees.',
      'Interactive admin dashboard with real-time data visualization.',
      'Comprehensive employee directory with search and filtering.',
      'Full leave management workflow with a company-wide calendar.',
      'Dynamic payroll processing with automated calculations for deductions and net pay.',
      'Customizable system settings for holidays, benefits, and payroll configurations.',
      'Built-in communication tools like announcements and a help desk.',
      'User-customizable UI with multiple themes and dark mode support.'
    ],
    category: 'Web Application',
    myRole: 'Full-Stack Developer',
    problemStatement: 'Small to medium-sized businesses often struggle with fragmented or manual systems for managing HR and payroll, leading to inefficiencies, errors, and a lack of centralized data.',
    solution: 'Developed a comprehensive, full-stack web application using Next.js and Firebase to provide a single, unified platform for all HR and payroll needs. The system features secure role-based access, automates complex calculations, and provides intuitive interfaces for managing employees, attendance, leave, and finances, significantly improving administrative efficiency and data accuracy.',
    responsibilities: [
      'Designed and developed the frontend architecture using Next.js, React, and TypeScript.',
      'Implemented a clean and responsive UI with Tailwind CSS and ShadCN UI components.',
      'Structured the backend on Firebase, utilizing Firestore for the database and Firebase Authentication for security.',
      'Engineered the role-based access control system for "Administrator" and "User" roles.',
      'Built core modules including the employee directory, time & attendance, leave management, and payroll processing systems.',
      'Integrated React Hook Form and Zod for robust, schema-based form validation.',
      'Set up the project for future AI-powered enhancements using Genkit.'
    ]
  }
];

export function getProjects(): Project[] {
    return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}
