import { useState, useEffect } from 'react';
import profile from './assets/images/chick.jpg';
import { Badge, BlockButton, BlockCard, PixelBorder } from './components/ui/index.js';
import {
    ENVIRONMENTS,
    applyEnvironment,
    getInitialEnvironment,
    persistEnvironment,
    startEnvironmentTransition,
} from './theme.js';

export default function Home(){
    const [theme, setTheme] = useState(getInitialEnvironment);

    function toggleTheme() {
        startEnvironmentTransition();
        setTheme((currentTheme) => (
            currentTheme === ENVIRONMENTS.END
                ? ENVIRONMENTS.NETHER
                : ENVIRONMENTS.END
        ));
    }

    useEffect(() => {
        applyEnvironment(theme);
        persistEnvironment(theme);
    }, [theme]);

    function downloadResume() {
        const a = document.createElement('a');
        a.href = './resume.pdf';
        a.download = 'Rohan_Mirjankar_Resume.pdf';
        a.click();
    }

    return (
        <div className="home-cont hero-section" id="home">
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
                        <h1 id="hero-title">Hi, I'm Rohan </h1>
                        <p className="hero-role">Software Developer</p>
                    </div>

                    <div className="home-btn-cont hero-actions hero-block-fall" role="group" aria-label="Hero actions">
                        <span className="hero-action-slot">
                            <BlockButton
                                className="resume-btn hero-action-button"
                                variant="grass"
                                icon={<i className="fa-solid fa-download" />}
                                onClick={downloadResume}
                            >
                                Resume
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
                        <span className="hero-action-slot">
                            <BlockButton
                                className="theme-btn theme-toggle hero-action-button"
                                variant="stone"
                                icon={
                                    <i
                                        className={theme === ENVIRONMENTS.END ? 'fa-solid fa-moon' : 'fa-solid fa-fire'}
                                    />
                                }
                                onClick={toggleTheme}
                                aria-pressed={theme === ENVIRONMENTS.NETHER}
                                aria-label={
                                    theme === ENVIRONMENTS.END
                                        ? 'Current environment: The End. Switch to The Nether.'
                                        : 'Current environment: The Nether. Switch to The End.'
                                }
                                title={
                                    theme === ENVIRONMENTS.END
                                        ? 'Switch to The Nether'
                                        : 'Switch to The End'
                                }
                            >
                                {theme === ENVIRONMENTS.END ? 'END' : 'NETHER'}
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
