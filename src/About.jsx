import { useEffect, useRef } from 'react';
import profile from './assets/images/pfp.jpeg';
import { Badge, BlockCard, BlockGrid, PixelBorder } from './components/ui/index.js';

const biography = 'I am a 19 year old undergraduate student from Bangalore, India. I love to learn new things. I am a Frontend Developer currently learning web development. I am good at problem solving and passionate about creating interactive and user-friendly interfaces. ';

const profileFacts = [
    { label: 'Age', value: '19 year old undergraduate student' },
    { label: 'Based in', value: 'Bangalore, India' },
    { label: 'Role', value: 'Frontend Developer' },
    { label: 'Learning', value: 'currently learning web development' },
];

export default function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const section = aboutRef.current;
        if (!section) return undefined;

        const revealSection = () => section.classList.add('about-is-visible');

        if (!('IntersectionObserver' in window)) {
            revealSection();
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                revealSection();
                observer.disconnect();
            },
            { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

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
                    className="about-profile-panel about-reveal-item about-reveal-avatar"
                    variant="stone"
                    inset
                    aria-labelledby="about-avatar-caption"
                >
                    <PixelBorder as="figure" className="about-avatar-frame" variant="wood" inset>
                        <div className="about-avatar-media">
                            <img className="about-cont-img" src={profile} alt="Profile" loading="lazy" decoding="async" />
                        </div>
                        <figcaption id="about-avatar-caption">
                            <Badge className="about-avatar-caption" variant="wood">Profile</Badge>
                        </figcaption>
                    </PixelBorder>
                </BlockCard>

                <BlockCard
                    as="article"
                    className="about-copy-panel about-reveal-item"
                    variant="stone"
                    inset
                    aria-labelledby="about-record-title"
                >
                    <header className="about-copy-heading">
                        <h3 className="about-copy-title" id="about-record-title">Who am I ?</h3>
                        <span className="about-copy-rule" aria-hidden="true" />
                    </header>
                    <p className="about-desc">{biography}</p>
                </BlockCard>

                <BlockCard
                    as="aside"
                    className="about-info-panel about-reveal-item"
                    variant="stone"
                    inset
                    aria-labelledby="about-info-title"
                >
                    <h3 className="about-info-heading" id="about-info-title">PLAYER INFO</h3>
                    <BlockGrid as="dl" className="about-info-grid" minItemWidth="120px">
                        {profileFacts.map((fact) => (
                            <div className="about-info-slot" key={fact.label}>
                                <dt className="about-info-label">{fact.label}</dt>
                                <dd className="about-info-value">{fact.value}</dd>
                            </div>
                        ))}
                    </BlockGrid>
                </BlockCard>
            </div>
        </section>
    );
}
