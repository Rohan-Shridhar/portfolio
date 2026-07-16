import antigravity from './assets/images/Tools/antigravity.png';

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
            { name: 'React', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=react', alt: 'React' }
        ]
    },
    {
        title: 'Databases',
        skills: [
            { name: 'MySQL', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=mysql', alt: 'MySQL' },
            { name: 'MongoDB', level: 'Beginner', icon: 'https://skillicons.dev/icons?i=mongodb', alt: 'MongoDB' }
        ]
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', level: 'Version Control', icon: 'https://skillicons.dev/icons?i=git', alt: 'Git' },
            { name: 'VS Code', level: 'Editor', icon: 'https://skillicons.dev/icons?i=vscode', alt: 'VS Code' },
            { name: 'Antigravity', level: 'Editor', icon: antigravity, alt: 'Antigravity' },
            { name: 'Markdown', level: 'Writing', icon: 'https://skillicons.dev/icons?i=markdown', alt: 'Markdown' }
        ]
    }
];

export default function Skills() {
    return (
        <div className="skills-cont" id="skills">
            <div className="skills-title">What do I know ?</div>
            {skillGroups.map((group) => (
                <section className="skill-group" key={group.title}>
                    <p className="lang">{group.title}</p>
                    <div className="skill-grid">
                        {group.skills.map((skill) => (
                            <div className="skill-card" key={skill.name}>
                                <img src={skill.icon} alt={skill.alt} />
                                <hr />
                                <span>{skill.level}</span>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}