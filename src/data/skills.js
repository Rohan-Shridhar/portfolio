import antigravity from '../assets/images/Tools/antigravity.png';

export const skillGroups = [
    {
        id: 'languages',
        title: 'Languages',
        color: 'language',
        skills: [
            { id: 'javascript', name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js', role: 'Programming language · React, Node.js and npm', desktop: { x: 360, y: 210 }, tablet: { x: 230, y: 190 }, mobile: { x: 260, y: 220 } },
            { id: 'java', name: 'Java', icon: 'https://skillicons.dev/icons?i=java', role: 'Object-oriented programming · coursework', desktop: { x: 160, y: 370 }, tablet: { x: 90, y: 190 }, mobile: { x: 100, y: 105 } },
            { id: 'python', name: 'Python', icon: 'https://skillicons.dev/icons?i=python', role: 'Scripting · automation · learning projects', desktop: { x: 360, y: 370 }, tablet: { x: 230, y: 315 }, mobile: { x: 260, y: 105 } },
            { id: 'cpp', name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp', role: 'Data structures · competitive programming', desktop: { x: 160, y: 510 }, tablet: { x: 90, y: 315 }, mobile: { x: 100, y: 220 } },
        ],
    },
    {
        id: 'web',
        title: 'Web Development',
        color: 'web',
        skills: [
            { id: 'html', name: 'HTML', icon: 'https://skillicons.dev/icons?i=html', role: 'Semantic structure · accessible interfaces', desktop: { x: 590, y: 210 }, tablet: { x: 450, y: 190 }, mobile: { x: 100, y: 340 } },
            { id: 'css', name: 'CSS', icon: 'https://skillicons.dev/icons?i=css', role: 'Responsive layouts · animation', desktop: { x: 780, y: 210 }, tablet: { x: 555, y: 190 }, mobile: { x: 260, y: 340 } },
            { id: 'react', name: 'React', icon: 'https://skillicons.dev/icons?i=react', role: 'Component-driven frontend interfaces', desktop: { x: 970, y: 210 }, tablet: { x: 660, y: 190 }, mobile: { x: 100, y: 455 } },
            { id: 'nodejs', name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs', role: 'Backend runtime · routes · API development', desktop: { x: 1160, y: 210 }, tablet: { x: 765, y: 190 }, mobile: { x: 260, y: 455 } },
        ],
    },
    {
        id: 'databases',
        title: 'Databases',
        color: 'database',
        skills: [
            { id: 'mysql', name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql', role: 'Relational schemas · queries · data modeling', desktop: { x: 220, y: 660 }, tablet: { x: 90, y: 535 }, mobile: { x: 60, y: 580 } },
            { id: 'postgres', name: 'Postgres', icon: 'https://skillicons.dev/icons?i=postgres', role: 'SQL practice · application data', desktop: { x: 410, y: 660 }, tablet: { x: 230, y: 535 }, mobile: { x: 180, y: 580 } },
            { id: 'mongodb', name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb', role: 'Document storage · learning projects', desktop: { x: 600, y: 660 }, tablet: { x: 370, y: 535 }, mobile: { x: 300, y: 580 } },
        ],
    },
    {
        id: 'tools',
        title: 'Tools & Platforms',
        color: 'tool',
        skills: [
            { id: 'git', name: 'Git', icon: 'https://skillicons.dev/icons?i=git', role: 'Version control · branches · collaboration', desktop: { x: 790, y: 510 }, tablet: { x: 480, y: 535 }, mobile: { x: 100, y: 700 } },
            { id: 'vscode', name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode', role: 'Daily development · debugging · extensions', desktop: { x: 980, y: 510 }, tablet: { x: 610, y: 535 }, mobile: { x: 260, y: 700 } },
            { id: 'antigravity', name: 'Antigravity', icon: antigravity, role: 'AI-assisted editor · portfolio experiments', desktop: { x: 1170, y: 510 }, tablet: { x: 740, y: 535 }, mobile: { x: 100, y: 810 } },
            { id: 'vercel', name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel', role: 'Frontend hosting · preview deployments', desktop: { x: 885, y: 660 }, tablet: { x: 540, y: 680 }, mobile: { x: 260, y: 810 } },
            { id: 'excalidraw', name: 'Excalidraw', icon: 'https://www.google.com/s2/favicons?domain=excalidraw.com&sz=64', role: 'Wireframes · diagrams · interface planning', desktop: { x: 1080, y: 660 }, tablet: { x: 680, y: 680 }, mobile: { x: 180, y: 920 } },
        ],
    },
];

export const skillConnections = [
    { id: 'html-css', sourceId: 'html', targetId: 'css', evidence: 'shared-web-workflow', path: 'M 622 210 H 748', tabletPath: 'M 482 190 H 523', mobilePath: 'M 132 340 H 228' },
    { id: 'css-react', sourceId: 'css', targetId: 'react', evidence: 'interface-styling', path: 'M 812 210 H 938', tabletPath: 'M 587 190 H 628' },
    { id: 'javascript-react', sourceId: 'javascript', targetId: 'react', evidence: 'skill-usage', path: 'M 392 210 C 520 138 810 138 938 210', tabletPath: 'M 262 190 C 365 125 550 125 628 190', mobilePath: 'M 260 252 C 225 310 135 370 100 427' },
    { id: 'javascript-nodejs', sourceId: 'javascript', targetId: 'nodejs', evidence: 'skill-usage', path: 'M 392 210 C 560 70 965 70 1128 210', tabletPath: 'M 262 190 C 420 90 655 90 733 190', mobilePath: 'M 260 252 C 320 305 322 375 260 427' },
    { id: 'react-nodejs', sourceId: 'react', targetId: 'nodejs', evidence: 'reference-request-flow', path: 'M 1002 210 H 1128', tabletPath: 'M 692 190 H 733', mobilePath: 'M 132 455 H 228' },
];

export const projectHighlights = [
    { id: 'gridcraft', name: 'GridCraft', skillIds: ['react'], evidence: 'React.js project badge in Projects.jsx', href: '#project-gridcraft' },
    { id: 'trashtrace', name: 'Trashtrace', skillIds: ['nodejs'], evidence: 'nodejs project badge in Projects.jsx', href: '#project-trashtrace' },
    { id: 'envguard', name: 'EnvGuard', skillIds: ['nodejs'], evidence: 'Node.js package description and skill project metadata', href: '#project-envguard' },
];

export const skillById = Object.fromEntries(
    skillGroups.flatMap((group) => group.skills.map((skill) => [skill.id, { ...skill, categoryId: group.id, categoryTitle: group.title, categoryColor: group.color }])),
);

export const skillMapViewBox = { desktop: '0 0 1280 780', tablet: '0 0 840 780', mobile: '0 0 360 1040' };
