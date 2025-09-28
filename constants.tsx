
import React from 'react';
import type { NavLink, TeamMember, Service, Testimonial, CaseStudy, BlogPost } from './types';

export const COMPANY_NAME = "Aether AI";
export const COMPANY_SLOGAN = "Digitize, Automate, Thrive";

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Why AI?', path: '/why-ai' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// --- ICONS ---

export const DocumentIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const WorkflowIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);

export const InsightsIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

export const CustomSolutionIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

// --- MOCK DATA ---

export const teamMembers: TeamMember[] = [
  { name: 'Elara Vance', role: 'Founder & CEO', bio: 'With a PhD in Machine Learning, Elara founded Aether AI to bridge the gap between cutting-edge AI and the practical needs of small businesses.', imageUrl: 'https://picsum.photos/seed/elara/300/300' },
  { name: 'Kaelen Corr', role: 'Lead AI Engineer', bio: 'Kaelen is the architect behind our automation engine, constantly pushing the boundaries of what our technology can achieve for clients.', imageUrl: 'https://picsum.photos/seed/kaelen/300/300' },
  { name: 'Jian Li', role: 'Head of Client Solutions', bio: 'Jian ensures every solution we build is perfectly tailored to our clients\' unique challenges, translating business needs into technical reality.', imageUrl: 'https://picsum.photos/seed/jian/300/300' },
];

export const services: Service[] = [
  { 
    icon: <DocumentIcon className="w-10 h-10 text-aqua mb-4" />,
    title: 'Intelligent Document Processing',
    description: 'Turn your physical and digital paperwork into structured, usable data with our AI-powered OCR technology.',
    details: ['Invoice & receipt digitization', 'Automated data extraction', 'Form processing', 'Contract analysis'],
    benefits: ['Save 10+ hours a week on manual entry.', 'Eliminate costly data entry errors.', 'Access information instantly.']
  },
  {
    icon: <WorkflowIcon className="w-10 h-10 text-aqua mb-4" />,
    title: 'Automated Workflow Design',
    description: 'We create custom, automated workflows that handle your repetitive tasks, from approvals to data entry and notifications.',
    details: ['Approval process automation', 'Cross-platform data synchronization', 'Automated report generation', 'Customer onboarding workflows'],
    benefits: ['Increase team efficiency by 40%.', 'Ensure process compliance.', 'Free up your staff for high-value work.']
  },
  {
    icon: <InsightsIcon className="w-10 h-10 text-aqua mb-4" />,
    title: 'AI-Powered Data Insights',
    description: 'Unlock the hidden potential in your data. We help you analyze your newly digitized information to find trends and make better decisions.',
    details: ['Sales trend analysis', 'Operational efficiency reports', 'Customer behavior insights', 'Financial forecasting'],
    benefits: ['Make smarter, data-driven decisions.', 'Identify new revenue opportunities.', 'Optimize your operations for better profitability.']
  },
  {
    icon: <CustomSolutionIcon className="w-10 h-10 text-aqua mb-4" />,
    title: 'Custom AI Solutions',
    description: 'Have a unique challenge? We build tailored AI tools and solutions designed specifically for your business needs.',
    details: ['Bespoke AI model development', 'Proprietary software integration', 'AI-powered chatbots', 'Specialized data analysis tools'],
    benefits: ['Gain a competitive edge with unique technology.', 'Solve complex problems standard software can\'t.', 'Integrate AI seamlessly into your existing systems.']
  },
];

export const testimonials: Testimonial[] = [
  { quote: 'Aether AI transformed our invoicing process. What used to take days now takes minutes. It\'s a game-changer for our finance team.', author: 'Sarah Jenkins', company: 'Apex Innovations', logoUrl: 'https://picsum.photos/seed/apex/200/100' },
  { quote: 'The workflow automation they designed for us has saved our team countless hours and eliminated human error. I can\'t recommend them enough.', author: 'Michael Chen', company: 'Starlight Logistics', logoUrl: 'https://picsum.photos/seed/starlight/200/100' },
];

export const caseStudies: CaseStudy[] = [
    {
        client: 'Road Tanker Northern (RTN) Ltd.',
        problem: 'RTN was managing complex operations through disparate Excel spreadsheets, leading to critical information silos between departments. Tracking the real-time status of an order was a manual, inefficient process, requiring management to chase down updates from multiple sources, which caused delays and communication breakdowns.',
        solution: 'We developed a custom, centralized application to act as a single source of truth. The system features a unified database, a real-time dashboard for at-a-glance order tracking, and integrated document management, ensuring all departments work from the same live data.',
        results: [
            { metric: 'Order Visibility', value: '100% Real-Time' },
            { metric: 'Manual Reporting', value: 'Reduced by 70%' },
            { metric: 'Data Silos', value: 'Eliminated' }
        ]
    }
];

export const blogPosts: BlogPost[] = [
    { title: '5 Repetitive Tasks You Can Automate Today', excerpt: 'Discover how small businesses can immediately benefit from AI by automating these common, time-consuming tasks...', imageUrl: 'https://picsum.photos/seed/blog1/400/300', category: 'Productivity Tips', date: 'March 15, 2025' },
    { title: 'AI for Beginners: What is OCR and Why Does It Matter?', excerpt: 'We break down the technology behind Intelligent Document Processing and explain how it can revolutionize your business...', imageUrl: 'https://picsum.photos/seed/blog2/400/300', category: 'AI for Beginners', date: 'March 10, 2025' },
    { title: 'The Future of Small Business: Integrating AI into Your Strategy', excerpt: 'Learn how to think strategically about implementing AI to not just save time, but to actively grow your business and get ahead...', imageUrl: 'https://picsum.photos/seed/blog3/400/300', category: 'Small Business Tech', date: 'March 5, 2025' },
];
