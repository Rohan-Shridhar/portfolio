import antigravity from './assets/images/Tools/antigravity.png';
import { useRef, useState } from 'react';
import useViewportReveal from './hooks/useViewportReveal.js';
import { Badge, BlockCard, PixelBorder } from './components/ui/index.js';

const skillGroups = [
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', type: 'Programming language', level: 'Intermediate', xp: 68, usage: 'React, Node.js, Express, and npm', projects: 'JSCrafts, GridCraft, EnvGuard', icon: 'https://skillicons.dev/icons?i=js', alt: 'JavaScript' },
            { name: 'Java', type: 'Programming language', level: 'Intermediate', xp: 62, usage: 'Object-oriented programming and coursework', projects: 'Academic projects', icon: 'https://skillicons.dev/icons?i=java', alt: 'Java' },
            { name: 'Python', type: 'Programming language', level: 'Beginner', xp: 34, usage: 'Scripting, automation, and problem solving', projects: 'Learning projects', icon: 'https://skillicons.dev/icons?i=python', alt: 'Python' },
            { name: 'C++', type: 'Programming language', level: 'Intermediate', xp: 58, usage: 'Data structures and competitive programming', projects: 'Practice problems', icon: 'https://skillicons.dev/icons?i=cpp', alt: 'C++' }
        ]
    },
    {
        title: 'Web Dev',
        skills: [
            { name: 'HTML', type: 'Markup language', level: 'Intermediate', xp: 74, usage: 'Semantic page structure and accessible interfaces', projects: 'Portfolio, GridCraft', icon: 'https://skillicons.dev/icons?i=html', alt: 'HTML' },
            { name: 'CSS', type: 'Styling language', level: 'Intermediate', xp: 71, usage: 'Responsive layouts, animations, and pixel interfaces', projects: 'Portfolio, GridCraft', icon: 'https://skillicons.dev/icons?i=css', alt: 'CSS' },
            { name: 'React', type: 'UI library', level: 'Intermediate', xp: 66, usage: 'Component-driven frontend applications', projects: 'Portfolio, EnvGuard', icon: 'https://skillicons.dev/icons?i=react', alt: 'React' },
            { name: 'Node.js', type: 'Runtime environment', level: 'Beginner', xp: 38, usage: 'Backend routes, APIs, and development tooling', projects: 'EnvGuard', icon: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node.js' }
        ]
    },
    {
        title: 'Databases',
        skills: [
            { name: 'MySQL', type: 'Relational database', level: 'Intermediate', xp: 57, usage: 'Relational schemas, queries, and data modeling', projects: 'Academic projects', icon: 'https://skillicons.dev/icons?i=mysql', alt: 'MySQL' },
            { name: 'Postgres', type: 'Relational database', level: 'Beginner', xp: 35, usage: 'SQL practice and application data', projects: 'Learning projects', icon: 'https://skillicons.dev/icons?i=postgres', alt: 'Postgres' },
            { name: 'MongoDB', type: 'Document database', level: 'Beginner', xp: 31, usage: 'Exploring flexible document-based storage', projects: 'Learning projects', icon: 'https://skillicons.dev/icons?i=mongodb', alt: 'MongoDB' }
        ]
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', type: 'Version control', level: 'Version Control', xp: 78, usage: 'Branches, collaboration, and release history', projects: 'All active projects', icon: 'https://skillicons.dev/icons?i=git', alt: 'Git' },
            { name: 'VS Code', type: 'Code editor', level: 'Editor', xp: 84, usage: 'Daily development, debugging, and extensions', projects: 'All active projects', icon: 'https://skillicons.dev/icons?i=vscode', alt: 'VS Code' },
            { name: 'Antigravity', type: 'Code editor', level: 'Editor', xp: 52, usage: 'Experimenting with an AI-assisted workflow', projects: 'Portfolio experiments', icon: antigravity, alt: 'Antigravity' },
            { name: 'Vercel', type: 'Deployment platform', level: 'Deploying', xp: 46, usage: 'Hosting frontend builds and preview deployments', projects: 'Portfolio', icon: 'https://skillicons.dev/icons?i=vercel', alt: 'Vercel' },
            { name: 'Excalidraw', type: 'Visualisation tool', level: 'Visualising', xp: 43, usage: 'Wireframes, diagrams, and interface planning', projects: 'Portfolio planning', icon: 'https://www.google.com/s2/favicons?domain=excalidraw.com&sz=32', alt: 'Excalidraw'}
        ]
    }
];

const groupVariants = {
    Languages: 'diamond',
    'Web Dev': 'wood',
    Databases: 'stone',
    Tools: 'grass',
};

function getSkillId(groupTitle, skillName) {
    return `${groupTitle}-${skillName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function SkillMeter({ xp }) {
    const filledSegments = Math.round(xp / 10);
    return (
        <div className="skill-meter" aria-label={`${xp}% experience`}>
            <span className="skill-meter-segments">
                {Array.from({ length: 10 }, (_, index) => (
                    <i className={index < filledSegments ? 'is-filled' : undefined} key={index} />
                ))}
            </span>
            <span className="skill-meter-value">{xp}%</span>
        </div>
    );
}

function SkillHotbar({ group, selectedIndex, onSelect }) {
    const itemRefs = useRef([]);

    const selectSkill = (index, moveFocus = false) => {
        onSelect(index);
        if (moveFocus) {
            requestAnimationFrame(() => itemRefs.current[index]?.focus());
        }
    };

    return (
        <div className="skill-hotbar-wrap">
            <span className="skill-hotbar-label">HOTBAR</span>
            <div className="skill-hotbar" role="tablist" aria-label={`${group.title} skills`}>
                {group.skills.map((skill, index) => {
                    const skillId = getSkillId(group.title, skill.name);
                    return (
                        <button
                            ref={(element) => { itemRefs.current[index] = element; }}
                            className={`skill-hotbar-item${selectedIndex === index ? ' is-selected' : ''}`}
                            id={`${skillId}-tab`}
                            key={skill.name}
                            type="button"
                            role="tab"
                            aria-selected={selectedIndex === index}
                            aria-controls={`${skillId}-inspection`}
                            aria-label={`${skill.name}, ${skill.level}`}
                            title={skill.name}
                            tabIndex={selectedIndex === index ? 0 : -1}
                            onClick={() => selectSkill(index)}
                            onKeyDown={(event) => {
                                if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
                                event.preventDefault();
                                const direction = event.key === 'ArrowRight' ? 1 : -1;
                                selectSkill((index + direction + group.skills.length) % group.skills.length, true);
                            }}
                        >
                            <span className="skill-hotbar-slot-number">{index + 1}</span>
                            <span className="skill-hotbar-icon-frame">
                                <img src={skill.icon} alt="" loading="lazy" decoding="async" />
                            </span>
                            <span className="skill-hotbar-name">{skill.name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function SkillInspectionPanel({ group, skill }) {
    const skillId = getSkillId(group.title, skill.name);

    return (
        <div className="skill-inspection" id={`${skillId}-inspection`} role="tabpanel" aria-labelledby={`${skillId}-tab`}>
            <div className="skill-inspection-heading">
                <span className="skill-inspection-kicker">ITEM INSPECTION</span>
                <span className="skill-inspection-index">SLOT {group.skills.indexOf(skill) + 1}</span>
            </div>
            <div className="skill-inspection-title">
                <PixelBorder className="skill-inspection-icon" variant={groupVariants[group.title]} inset>
                    <img src={skill.icon} alt="" />
                </PixelBorder>
                <div>
                    <h4>{skill.name}</h4>
                    <p>{skill.type}</p>
                </div>
            </div>
            <div className="skill-inspection-experience">
                <div className="skill-inspection-label">
                    <span>EXPERIENCE</span>
                    <Badge className="skill-level" variant={groupVariants[group.title]}>{skill.level}</Badge>
                </div>
                <SkillMeter xp={skill.xp} />
            </div>
            <div className="skill-inspection-details">
                <div>
                    <span className="skill-inspection-label">USED FOR</span>
                    <p>{skill.usage}</p>
                </div>
                <div>
                    <span className="skill-inspection-label">PROJECTS</span>
                    <p>{skill.projects}</p>
                </div>
            </div>
        </div>
    );
}

function SkillCategory({ group, groupVariant, groupId }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedSkill = group.skills[selectedIndex];

    return (
        <BlockCard
            as="section"
            className="skill-group"
            variant={groupVariant}
            inset
            aria-labelledby={groupId}
        >
            <div className="skill-group-heading">
                <span className="skill-group-marker" aria-hidden="true" />
                <h3 className="lang" id={groupId}>{group.title}</h3>
                <span className="skill-group-count">{group.skills.length} ITEMS</span>
            </div>
            <SkillHotbar group={group} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
            <SkillInspectionPanel key={selectedSkill.name} group={group} skill={selectedSkill} />
        </BlockCard>
    );
}

export default function Skills() {
    const { ref: skillsRef } = useViewportReveal({
        targetSelector: '.skill-group',
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
    });

    return (
        <section ref={skillsRef} className="skills-cont" id="skills" aria-labelledby="skills-title">
            <div className="skills-heading">
                <span className="skills-kicker">PLAYER INVENTORY</span>
                <h2 className="skills-title" id="skills-title">What do I know ?</h2>
                <span className="skills-divider" aria-hidden="true" />
            </div>

            <div className="skills-groups">
                {skillGroups.map((group) => {
                    const groupVariant = groupVariants[group.title] || 'stone';
                    const groupId = `${getSkillId(group.title, 'group')}-title`;

                    return (
                        <SkillCategory
                            key={group.title}
                            group={group}
                            groupVariant={groupVariant}
                            groupId={groupId}
                        />
                    );
                })}
            </div>
        </section>
    );
}
