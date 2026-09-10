import profile from './assets/images/pfp.jpeg';
import useViewportReveal from './hooks/useViewportReveal.js';
import { Badge, BlockCard, PixelBorder } from './components/ui/index.js';

const biography = 'Computer Science Engineering undergraduate at BMS College of Engineering, currently in the 3rd year, with a strong interest in web development, artificial intelligence, and cloud technologies. Interested in developing practical, scalable applications while continuously expanding skills across modern software and AI technologies. ';

const profileHighlights = [
    {
        label: 'GitHub',
        value: '19 followers',
        details: ['45 repos', '102 stars'],
        tone: 'github',
        icon: 'fab fa-github',
    },
    { label: 'GPA', value: '9.68', suffix: '/10', tone: 'gpa', emoji: '🥰' },
    { label: 'NPM', value: '3K+ downloads', tone: 'npm', icon: 'fab fa-npm' },
    {
        label: 'Role',
        value: 'HALF STACK DEVELOPER',
        details: ['{ learning backend }'],
        tone: 'stack',
        emoji: '😭',
    },
];

export default function About() {
    const { ref: aboutRef } = useViewportReveal({
        targetSelector: '.about-reveal-item',
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
    });

    return (
        <section
            ref={aboutRef}
            className="about-cont"
            id="about-me"
            aria-labelledby="about-profile-title"
        >
            <header className="about-heading">
                <div className="about-heading-copy">
                    <Badge className="about-kicker" variant="stone">ABOUT ME</Badge>
                    <h2 className="about-title" id="about-profile-title">PLAYER PROFILE</h2>
                </div>
                <span className="about-divider" aria-hidden="true" />
            </header>

            <div className="about-profile-grid">
                <BlockCard
                    as="aside"
                    className="about-profile-panel about-reveal-item about-reveal-avatar block-enter"
                    variant="stone"
                    inset
                    aria-labelledby="about-avatar-caption"
                >
                    <PixelBorder as="figure" className="about-avatar-frame" variant="stone" inset>
                        <div className="about-avatar-media">
                            <img className="about-cont-img" src={profile} alt="Profile" loading="lazy" decoding="async" />
                        </div>
                        <figcaption id="about-avatar-caption">
                            <Badge className="about-avatar-caption" variant="stone">Profile</Badge>
                        </figcaption>
                    </PixelBorder>
                </BlockCard>

                <BlockCard
                    as="article"
                    className="about-copy-panel about-reveal-item block-enter"
                    variant="stone"
                    inset
                    aria-labelledby="about-record-title"
                >
                    <header className="about-copy-heading">
                        <h3 className="about-copy-title" id="about-record-title">Who am I ?</h3>
                        <span className="about-copy-rule" aria-hidden="true" />
                    </header>
                    <p className="about-name-inline">Rohan S Mirjankar</p>
                    <p className="about-desc">
                        {biography}
                    </p>
                    <ul className="about-highlights" aria-label="Profile highlights">
                        {profileHighlights.map((highlight) => (
                            <li
                                className={`about-highlight-card about-highlight-card--${highlight.tone}`}
                                key={highlight.tone}
                            >
                                {highlight.icon && (
                                    <i className={`about-highlight-icon ${highlight.icon}`} aria-hidden="true" />
                                )}
                                {highlight.emoji && (
                                    <span className="about-highlight-emoji" aria-hidden="true">{highlight.emoji}</span>
                                )}
                                <span className="about-highlight-content">
                                    <span className="about-highlight-label">{highlight.label}</span>
                                    <span className="about-highlight-value">
                                        {highlight.value}
                                        {highlight.suffix && (
                                            <small className="about-highlight-suffix">{highlight.suffix}</small>
                                        )}
                                    </span>
                                    {highlight.details && (
                                        <span className="about-highlight-details">
                                            {highlight.details.map((detail) => (
                                                <span className="about-highlight-detail" key={detail}>{detail}</span>
                                            ))}
                                        </span>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </BlockCard>

            </div>
        </section>
    );
}
