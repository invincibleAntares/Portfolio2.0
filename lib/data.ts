import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'kumarabhishek2928@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Abhishek, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/abhishek',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/invincibleAntares' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/abhishek2928/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },

        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },

        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Remindrly',
        slug: 'remindrly',
        liveUrl: 'https://remindrly.vercel.app/',
        year: 2025,
        description: `
      A smart subscription tracking platform that helps users never miss a renewal or surprise charge. Built with a focus on privacy-first design and seamless user experience. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📝 Manual Subscription Management: Add and track unlimited subscriptions with ease</li>
        <li>🔔 Multi-Channel Notifications: Choose Email, SMS, or Phone call reminders</li>
        <li>📊 Dashboard Analytics: View spending overview, upcoming renewals, and trial alerts</li>
        <li>📱 Fully Responsive: Optimized for all device sizes with modern UI/UX</li>
        <li>🔐 Privacy-First: Secure authentication with Google OAuth</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with server-side rendering</li>
        <li>📧 Gmail Connect (Coming Soon): Automatic subscription detection from email receipts</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built responsive landing page with animated hero section using Framer Motion</li>
        <li>Implemented interactive FAQ accordion with smooth expand/collapse animations</li>
        <li>Created modern pricing section with gradient highlights and feature lists</li>
        <li>Developed full-width dashboard with subscription management table</li>
        <li>Configured Supabase for backend authentication and data storage</li>
        <li>Integrated Google APIs for future Gmail Connect feature</li>
        <li>Designed reusable UI components with Tailwind CSS for consistency</li>
        <li>Implemented client-side state management for real-time updates</li>
      </ul>
    `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Supabase database with custom schemas for subscriptions and users</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and Lucide icons</li>
        <li>🔄 State Management: Implemented client-side data fetching and real-time updates</li>
        <li>🔐 Authentication: Integrated Google OAuth with Supabase Auth</li>
        <li>📧 API Integration: Set up Google APIs for Gmail email parsing (coming soon)</li>
        <li>🚀 Deployment: Configured CI/CD pipeline for Vercel hosting</li>
        <li>🎭 Animations: Implemented smooth page transitions and micro-interactions with Framer Motion</li>
        <li>📱 Responsive Design: Ensured mobile-first approach across all components</li>
      </ul>
    `,
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Supabase',
            'Google APIs',
            'Lucide React',
            'Vercel',
        ],
        thumbnail:
            '/Projects/screencapture-remindrly-vercel-app-2025-12-11-14_58_27.png',
        longThumbnail:
            '/Projects/screencapture-remindrly-vercel-app-2025-12-11-14_58_27.png',
        images: [
            '/Projects/remindrly1.png',
            '/Projects/remindrly2.png',
            '/Projects/remindrly3.png',
        ],
    },

    {
        title: 'CareerHub',
        slug: 'careerhub',
        techStack: [
            'Next.js (App Router)',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Clerk Auth',
            'Drizzle ORM',
            'Neon Postgres',
        ],
        thumbnail: '/Projects/CareerHub1.png',
        longThumbnail: '/Projects/CareerHub1.png',
        images: [
            '/Projects/CareerHub1.png',
            '/Projects/CareerHub2.png',
            '/Projects/CareerHub3.png',
        ],
        liveUrl: 'https://careerhub.tech/',
        year: 2025,
        description: `CareerHub is a curated tech job board that aggregates internships and full-time roles. It offers fast search, category filters, and clean listing cards so candidates can discover and apply directly on the employer’s site.`,
        role: `As the full-stack developer, I:<br/>
  - Built the Next.js App Router frontend with React server components, Suspense, and responsive Tailwind UI.<br/>
  - Implemented search, category/kind filtering, and hydrated job cards with metadata for better discovery.<br/>
  - Integrated Clerk for authentication and protected admin posting, using Drizzle ORM with Neon Postgres for persistence.<br/>
  - Added SEO/OG metadata, reusable components (NavBar, Footer, filters, search), and polish for a production-ready experience.`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Abhishek/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Abhishek/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer',
        company: 'Paninian',
        duration: 'July 2025 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'ThirdPlace',
        duration: 'May 2025 - June 2025',
    },
];
