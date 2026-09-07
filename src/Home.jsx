import { useState, useEffect, useRef } from 'react';
import profile from './assets/images/pfp.jpeg';
import { Badge, BlockButton, BlockCard, PixelBorder } from './components/ui/index.js';

export default function Home(){
    const [theme, setTheme] = useState("space");

    // Theme button refs & state (top-right corner)
    const themePlaceholderRef = useRef(null);
    const themeBtnRef = useRef(null);
    const [themeBtnStyle, setThemeBtnStyle] = useState({});
    const [themeTextStyle, setThemeTextStyle] = useState({});

    // Resume button refs & state (top-left corner)
    const resumePlaceholderRef = useRef(null);
    const resumeBtnRef = useRef(null);
    const [resumeBtnStyle, setResumeBtnStyle] = useState({});
    const [resumeTextStyle, setResumeTextStyle] = useState({});

    function toggleTheme() {
        const newTheme = theme === "light" ? "space" : "light";
        setTheme(newTheme);
        document.body.className = newTheme;
    }

    function downloadResume() {
        const a = document.createElement('a');
        a.href = './resume.pdf';
        a.download = 'Rohan_Mirjankar_Resume.pdf';
        a.click();
    }

    useEffect(() => {
        const handleScrollAndResize = () => {
            const aboutSection = document.getElementById('about-me');
            const limit = aboutSection ? aboutSection.offsetTop : window.innerHeight * 0.8;
            const y = window.scrollY;
            const progress = Math.min(1, y / limit);
            const textProgress = Math.min(1, progress / 0.6);
            const margin = window.innerWidth * 0.05;

            function animateBtn(placeholderRef, toRight, setStyle, setText) {
                const placeholder = placeholderRef.current;
                if (!placeholder) return;

                const rect = placeholder.getBoundingClientRect();
                const startTop = rect.top + y;
                const startLeft = rect.left + window.scrollX;
                const width = rect.width;
                const height = rect.height;

                const targetTop = 20;
                const targetLeft = toRight
                    ? window.innerWidth - margin - height
                    : margin;

                const currentTop = (startTop - y) * (1 - progress) + targetTop * progress;
                const currentWidth = width * (1 - progress) + height * progress;
                const currentLeft = startLeft * (1 - progress) + targetLeft * progress;

                if (y === 0) {
                    setStyle({ position: 'static', zIndex: 'auto' });
                    setText({ display: 'inline', opacity: 1, maxWidth: '80px', overflow: 'hidden' });
                } else {
                    setStyle({
                        position: 'fixed',
                        top: `${currentTop}px`,
                        left: `${currentLeft}px`,
                        width: `${currentWidth}px`,
                        height: `${height}px`,
                        margin: 0,
                        zIndex: 1000,
                        boxShadow: progress > 0.5 ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
                        transform: `scale(${1 - progress * 0.1})`,
                        transition: 'box-shadow 0.3s ease, transform 0.1s ease',
                        pointerEvents: 'auto'
                    });
                    setText({
                        display: 'inline-block',
                        opacity: 1 - textProgress,
                        maxWidth: `${(1 - textProgress) * 80}px`,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        verticalAlign: 'middle',
                        transition: 'none'
                    });
                }
            }

            animateBtn(themePlaceholderRef, true, setThemeBtnStyle, setThemeTextStyle);
            animateBtn(resumePlaceholderRef, false, setResumeBtnStyle, setResumeTextStyle);
        };

        handleScrollAndResize();
        window.addEventListener('scroll', handleScrollAndResize, { passive: true });
        window.addEventListener('resize', handleScrollAndResize);
        const timeoutId = setTimeout(handleScrollAndResize, 100);

        return () => {
            window.removeEventListener('scroll', handleScrollAndResize);
            window.removeEventListener('resize', handleScrollAndResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="home-cont hero-section" id="home">
            <div className="hero-environment" aria-hidden="true" />
            <BlockCard
                as="section"
                className="hero-shell"
                variant="stone"
                inset
                aria-labelledby="hero-title"
            >
                <PixelBorder
                    className="hero-avatar-frame hero-block-fall"
                    variant="stone"
                    inset
                >
                    <img className="hero-avatar" src={profile} alt="Profile" />
                </PixelBorder>

                <div className="hero-copy hero-block-fall">
                    <div className="hero-identity">
                        <span className="hero-eyebrow">PLAYER IDENTITY</span>
                        <h1 id="hero-title">Hi, I'm Rohan S M</h1>
                        <p className="hero-role">Frontend Developer</p>
                    </div>

                    <div className="home-btn-cont hero-actions hero-block-fall" role="group" aria-label="Hero actions">
                        <span ref={resumePlaceholderRef} className="hero-action-slot" style={{ display: 'inline-block', position: 'relative' }}>
                            <BlockButton
                                ref={resumeBtnRef}
                                className="resume-btn hero-action-button"
                                variant="grass"
                                icon={<i className="fa-solid fa-download" />}
                                onClick={downloadResume}
                                style={resumeBtnStyle}
                            >
                                <span style={resumeTextStyle}>Resume </span>
                            </BlockButton>
                        </span>
                        <span className="hero-action-slot">
                            <BlockButton
                                className="hero-action-button"
                                variant="diamond"
                                icon={<i className="fa-solid fa-square-envelope" />}
                                onClick={() => { location.href = '#contact' }}
                            >
                                Contact
                            </BlockButton>
                        </span>
                        <span ref={themePlaceholderRef} className="hero-action-slot" style={{ display: 'inline-block', position: 'relative' }}>
                            <BlockButton
                                ref={themeBtnRef}
                                className="theme-btn hero-action-button"
                                variant="stone"
                                icon={<i className="fa-solid fa-circle-half-stroke" />}
                                onClick={toggleTheme}
                                style={themeBtnStyle}
                            >
                                <span style={themeTextStyle}>Theme </span>
                            </BlockButton>
                        </span>
                    </div>

                    <div className="hero-hud hero-block-fall" aria-hidden="true">
                        <div className="hero-hud-item">
                            <Badge variant="diamond">PLAYER</Badge>
                            <span>ROHAN S M</span>
                        </div>
                        <div className="hero-hud-item">
                            <Badge variant="grass">STATUS</Badge>
                            <span>ONLINE</span>
                        </div>
                        <div className="hero-hud-item">
                            <Badge variant="wood">WORLD</Badge>
                            <span>PORTFOLIO</span>
                        </div>
                    </div>
                </div>
            </BlockCard>
        </div>
    );
}
