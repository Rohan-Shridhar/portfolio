const { useState, useEffect, useRef } = React;

const Home = () => {
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
        <div className="home-cont" id="home">
            <div></div>
            <div className="home">
                <h1>Hi, I'm Rohan S M</h1>
                <div className="home-btn-cont">
                    <span></span>

                    <span ref={themePlaceholderRef} style={{ display: 'inline-block', position: 'relative' }}>
                        <button onClick={toggleTheme} ref={themeBtnRef} className="theme-btn" style={themeBtnStyle}>
                            <span style={themeTextStyle}>Theme </span>
                            <i className="fa-solid fa-circle-half-stroke"></i>
                        </button>
                    </span>
                    <span>
                        <button onClick={() => { location.href = '#contact' }}>
                            Contact
                            <i className="fa-solid fa-square-envelope"></i>
                        </button>
                    </span>
                    <span ref={resumePlaceholderRef} style={{ display: 'inline-block', position: 'relative' }}>
                        <button onClick={downloadResume} ref={resumeBtnRef} className="resume-btn" style={resumeBtnStyle}>
                            <span style={resumeTextStyle}>Resume </span>
                            <i className="fa-solid fa-download"></i>
                        </button>
                    </span>
                    <span></span>
                </div>
            </div>
            <div></div>
        </div>
    );
}
