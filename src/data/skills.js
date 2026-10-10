import antigravity from '../assets/images/Tools/antigravity.png';

export const skillGroups = [
    {
        id: 'languages',
        title: 'Languages',
        color: 'language',
        skills: [
            { id: 'javascript', name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js', role: 'Programming language · React, Node.js and npm', desktop: { x: 360, y: 260 }, tablet: { x: 230, y: 190 }, mobile: { x: 260, y: 200 } },
            { id: 'java', name: 'Java', icon: 'https://skillicons.dev/icons?i=java', role: 'Object-oriented programming · coursework', desktop: { x: 160, y: 395 }, tablet: { x: 90, y: 190 }, mobile: { x: 100, y: 120 } },
            { id: 'python', name: 'Python', icon: 'https://skillicons.dev/icons?i=python', role: 'Scripting · automation · learning projects', desktop: { x: 360, y: 395 }, tablet: { x: 230, y: 315 }, mobile: { x: 260, y: 120 } },
            { id: 'cpp', name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp', role: 'Data structures · competitive programming', desktop: { x: 160, y: 530 }, tablet: { x: 90, y: 315 }, mobile: { x: 100, y: 200 } },
        ],
    },
    {
        id: 'web',
        title: 'Web Development',
        color: 'web',
        skills: [
            { id: 'html', name: 'HTML', icon: 'https://skillicons.dev/icons?i=html', role: 'Semantic structure · accessible interfaces', desktop: { x: 590, y: 260 }, tablet: { x: 450, y: 190 }, mobile: { x: 100, y: 345 } },
            { id: 'css', name: 'CSS', icon: 'https://skillicons.dev/icons?i=css', role: 'Responsive layouts · animation', desktop: { x: 780, y: 260 }, tablet: { x: 555, y: 190 }, mobile: { x: 260, y: 345 } },
            { id: 'react', name: 'React', icon: 'https://skillicons.dev/icons?i=react', role: 'Component-driven frontend interfaces', desktop: { x: 970, y: 260 }, tablet: { x: 660, y: 190 }, mobile: { x: 100, y: 450 } },
            { id: 'nodejs', name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs', role: 'Backend runtime · routes · API development', desktop: { x: 1160, y: 260 }, tablet: { x: 765, y: 190 }, mobile: { x: 260, y: 450 } },
        ],
    },
    {
        id: 'databases',
        title: 'Databases',
        color: 'database',
        skills: [
            { id: 'mysql', name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql', role: 'Relational schemas · queries · data modeling', desktop: { x: 220, y: 690 }, tablet: { x: 90, y: 535 }, mobile: { x: 60, y: 635 } },
            { id: 'postgres', name: 'Postgres', icon: 'https://skillicons.dev/icons?i=postgres', role: 'SQL practice · application data', desktop: { x: 410, y: 690 }, tablet: { x: 230, y: 535 }, mobile: { x: 180, y: 635 } },
            { id: 'mongodb', name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb', role: 'Document storage · learning projects', desktop: { x: 600, y: 690 }, tablet: { x: 370, y: 535 }, mobile: { x: 300, y: 635 } },
        ],
    },
    {
        id: 'tools',
        title: 'Tools & Platforms',
        color: 'tool',
        skills: [
            { id: 'git', name: 'Git', icon: 'https://skillicons.dev/icons?i=git', role: 'Version control · branches · collaboration', desktop: { x: 790, y: 530 }, tablet: { x: 480, y: 535 }, mobile: { x: 100, y: 770 } },
            { id: 'vscode', name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode', role: 'Daily development · debugging · extensions', desktop: { x: 980, y: 530 }, tablet: { x: 610, y: 535 }, mobile: { x: 260, y: 770 } },
            { id: 'antigravity', name: 'Antigravity', icon: antigravity, role: 'AI-assisted editor · portfolio experiments', desktop: { x: 1170, y: 530 }, tablet: { x: 740, y: 535 }, mobile: { x: 100, y: 860 } },
            { id: 'vercel', name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel', role: 'Frontend hosting · preview deployments', desktop: { x: 885, y: 680 }, tablet: { x: 540, y: 680 }, mobile: { x: 260, y: 860 } },
            { id: 'excalidraw', name: 'Excalidraw', icon: 'https://www.google.com/s2/favicons?domain=excalidraw.com&sz=64', role: 'Wireframes · diagrams · interface planning', desktop: { x: 1080, y: 680 }, tablet: { x: 680, y: 680 }, mobile: { x: 180, y: 950 } },
        ],
    },
];

export const skillConnections = [
    { id: 'html-css', sourceId: 'html', targetId: 'css', evidence: 'shared-web-workflow', path: 'M 622 260 H 748', tabletPath: 'M 482 190 H 523', mobilePath: 'M 132 345 H 228' },
    { id: 'css-react', sourceId: 'css', targetId: 'react', evidence: 'interface-styling', path: 'M 812 260 H 938', tabletPath: 'M 587 190 H 628' },
    { id: 'javascript-react', sourceId: 'javascript', targetId: 'react', evidence: 'skill-usage', path: 'M 392 260 C 520 188 810 188 938 260', tabletPath: 'M 262 190 C 365 125 550 125 628 190', mobilePath: 'M 260 232 C 225 300 135 355 100 422' },
    { id: 'javascript-nodejs', sourceId: 'javascript', targetId: 'nodejs', evidence: 'skill-usage', path: 'M 392 260 C 560 120 965 120 1128 260', tabletPath: 'M 262 190 C 420 90 655 90 733 190', mobilePath: 'M 260 232 C 320 290 322 370 260 422' },
    { id: 'react-nodejs', sourceId: 'react', targetId: 'nodejs', evidence: 'reference-request-flow', path: 'M 1002 260 H 1128', tabletPath: 'M 692 190 H 733', mobilePath: 'M 132 450 H 228' },
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
