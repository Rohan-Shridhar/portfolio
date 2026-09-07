import project1 from './assets/images/grid.png';
import project2 from './assets/images/clipboard.png';
import project3 from './assets/images/envguard.png';
import useViewportReveal from './hooks/useViewportReveal.js';
import { Badge, BlockButton, BlockCard, PixelBorder } from './components/ui/index.js';

const projects = [
    {
        name: 'GridCraft',
        image: project1,
        alt: 'GridCraft project preview',
        description: 'Front end application using react.js that runs directly in your browser used to create pixel arts in a 16 X 16 grid and download as an image',
        badges: [{ label: 'React.js', variant: 'diamond' }],
        github: 'https://github.com/Rohan-Shridhar/gridcraft',
        demo: 'https://rohan-shridhar.github.io/gridcraft/',
        demoLabel: 'Live demo',
    },
    {
        name: 'Kravoxin',
        image: project2,
        alt: 'Kravoxin project preview',
        description: 'Browser extension for storing copied itmes along with categorisation and editing',
        badges: [{ label: 'Browser extension', variant: 'wood' }],
        github: 'https://github.com/Rohan-Shridhar/Kravoxin',
        demo: 'https://rohan-shridhar.github.io/Kravoxin/',
        demoLabel: 'Live demo',
    },
    {
        name: 'Envguard',
        image: project3,
        alt: 'Envguard project preview',
        description: 'envguard is a zero-boilerplate environment variable validator for Node.js that checks all your env vars at startup, coerces types like numbers and booleans, and throws a clear combined error if anything is missing or invalid. ',
        badges: [{ label: 'Node.js', variant: 'grass' }],
        github: 'https://github.com/Rohan-Shridhar/envguard',
        demo: 'https://www.npmjs.com/package/@rohansm14/envguard',
        demoLabel: 'NPM package',
    },
];

export default function Projects() {
    const { ref: projectsRef } = useViewportReveal({
        targetSelector: '.project-card',
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
    });

    return (
        <section ref={projectsRef} className="projects-cont" id="projects" aria-labelledby="projects-title">
            <div className="projects-heading">
                <span className="projects-kicker">PROJECT INVENTORY</span>
                <h2 className="project-title" id="projects-title">What have i built?</h2>
                <span className="projects-divider" aria-hidden="true" />
            </div>

            <div className="project-cont">
                {projects.map((project, index) => (
                    <BlockCard
                        as="article"
                        className="project-card block-enter inventory-select"
                        variant="stone"
                        inset
                        key={project.name}
                        style={{ '--reveal-delay': `${index * 60}ms` }}
                    >
                        <PixelBorder className="project-card-img" variant="wood" inset>
                            <img src={project.image} alt={project.alt} loading="lazy" />
                        </PixelBorder>

                        <div className="project-card-content">
                            <h3 className="project-card-title">{project.name}</h3>
                            <p className="project-card-desc">{project.description}</p>
                            <div className="project-card-badges" role="group" aria-label={`${project.name} technologies and format`}>
                                {project.badges.map((badge) => (
                                    <Badge variant={badge.variant} key={badge.label}>{badge.label}</Badge>
                                ))}
                            </div>
                        </div>

                        <span className="project-card-tooltip" aria-hidden="true">
                            <strong>{project.name}</strong>
                            <span>Build links below</span>
                        </span>

                        <div className="project-card-btn" role="group" aria-label={`${project.name} links`}>
                            <BlockButton
                                as="a"
                                className="project-link project-link-github"
                                variant="stone"
                                size="sm"
                                href={project.github}
                                icon={<i className="fab fa-github" />}
                                aria-label={`${project.name} GitHub repository`}
                            >
                                GitHub
                            </BlockButton>
                            <BlockButton
                                as="a"
                                className="project-link project-link-demo"
                                variant="diamond"
                                size="sm"
                                href={project.demo}
                                icon={<i className="fas fa-globe" />}
                                aria-label={`${project.name} ${project.demoLabel}`}
                            >
                                {project.demoLabel}
                            </BlockButton>
                        </div>
                    </BlockCard>
                ))}
            </div>

            <div className="explore-more-cont">
                <BlockButton
                    as="a"
                    href="https://rohan-shridhar.github.io/rohan-shridhar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="explore-more-btn"
                    variant="wood"
                    icon={<i className="fas fa-arrow-right" />}
                    iconPosition="end"
                >
                    Explore more projects
                </BlockButton>
            </div>
        </section>
    );
}

