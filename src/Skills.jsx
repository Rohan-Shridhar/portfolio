import antigravity from './assets/images/Tools/antigravity.png';
import useViewportReveal from './hooks/useViewportReveal.js';
import { Badge, BlockCard, BlockGrid, PixelBorder } from './components/ui/index.js';

const skillGroups = [
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=js', alt: 'JavaScript' },
            { name: 'Java', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=java', alt: 'Java' },
            { name: 'Python', level: 'Beginner', icon: 'https://skillicons.dev/icons?i=python', alt: 'Python' },
            { name: 'C++', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=cpp', alt: 'C++' }
        ]
    },
    {
        title: 'Web Dev',
        skills: [
            { name: 'HTML', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=html', alt: 'HTML' },
            { name: 'CSS', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=css', alt: 'CSS' },
            { name: 'React', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=react', alt: 'React' },
            { name: 'Node.js', level: 'Beginner', icon: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node.js' }
        ]
    },
    {
        title: 'Databases',
        skills: [
            { name: 'MySQL', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=mysql', alt: 'MySQL' },
            { name: 'Postgres', level: 'Beginner', icon: 'https://skillicons.dev/icons?i=postgres', alt: 'Postgres' },
            { name: 'MongoDB', level: 'Beginner', icon: 'https://skillicons.dev/icons?i=mongodb', alt: 'MongoDB' }
        ]
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', level: 'Version Control', icon: 'https://skillicons.dev/icons?i=git', alt: 'Git' },
            { name: 'VS Code', level: 'Editor', icon: 'https://skillicons.dev/icons?i=vscode', alt: 'VS Code' },
            { name: 'Antigravity', level: 'Editor', icon: antigravity, alt: 'Antigravity' },
            { name: 'Markdown', level: 'Writing', icon: 'https://skillicons.dev/icons?i=markdown', alt: 'Markdown' },
            { name: 'Excalidraw', level:'Visualising', icon: 'https://www.google.com/s2/favicons?domain=excalidraw.com&sz=32', alt: 'Excalidraw'}
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

function getMeterFill(level) {
    if (level === 'Intermediate') return 6;
    if (level === 'Beginner') return 3;
    return 0;
}

function SkillMeter({ level }) {
    const filledSegments = getMeterFill(level);

    if (!filledSegments) return null;

    return (
        <div className="skill-meter" aria-hidden="true">
            <span className="skill-meter-label">XP</span>
            <span className="skill-meter-segments">
                {Array.from({ length: 10 }, (_, index) => (
                    <i className={index < filledSegments ? 'is-filled' : undefined} key={index} />
                ))}
            </span>
        </div>
    );
}

export default function Skills() {
    const { ref: skillsRef } = useViewportReveal({
        targetSelector: '.skill-card',
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
                        <BlockCard
                            as="section"
                            className="skill-group"
                            variant={groupVariant}
                            inset
                            key={group.title}
                            aria-labelledby={groupId}
                        >
                            <div className="skill-group-heading">
                                <span className="skill-group-marker" aria-hidden="true" />
                                <h3 className="lang" id={groupId}>{group.title}</h3>
                            </div>
                            <BlockGrid className="skill-grid" minItemWidth="148px">
                                {group.skills.map((skill, index) => {
                                    const skillId = getSkillId(group.title, skill.name);
                                    const tooltipId = `${skillId}-tooltip`;

                                    return (
                                        <article
                                            className="skill-card block-enter inventory-select"
                                            key={skill.name}
                                            tabIndex="0"
                                            aria-describedby={tooltipId}
                                            style={{
                                                '--skill-delay': `${index * 60}ms`,
                                                '--reveal-delay': `${index * 60}ms`,
                                            }}
                                        >
                                            <PixelBorder className="skill-card-icon-frame" variant={groupVariant} inset>
                                                <img src={skill.icon} alt={skill.alt} loading="lazy" decoding="async" />
                                            </PixelBorder>
                                            <div className="skill-card-body">
                                                <span className="skill-name">{skill.name}</span>
                                                <Badge className="skill-level" variant={groupVariant}>{skill.level}</Badge>
                                                <SkillMeter level={skill.level} />
                                            </div>
                                            <div className="skill-tooltip" id={tooltipId} role="tooltip">
                                                <strong>{skill.name}</strong>
                                                <span>{group.title}</span>
                                                <span>{skill.level}</span>
                                            </div>
                                        </article>
                                    );
                                })}
                            </BlockGrid>
                        </BlockCard>
                    );
                })}
            </div>
        </section>
    );
}
