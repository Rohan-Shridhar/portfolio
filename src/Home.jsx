const { useState, useEffect, useRef } = React;

const Home = () => {
    const [theme, setTheme] = useState("space");
    const placeholderRef = useRef(null);
    const btnRef = useRef(null);
    const [btnStyle, setBtnStyle] = useState({});
    const [textStyle, setTextStyle] = useState({});

    function toggleTheme() {
        const newTheme = theme === "light" ? "space" : "light";
        setTheme(newTheme);
        document.body.className = newTheme;
    }

    useEffect(() => {
        const handleScrollAndResize = () => {
            const placeholder = placeholderRef.current;
            const btn = btnRef.current;
            if (!placeholder || !btn) return;

            const aboutSection = document.getElementById('about-me');
            const limit = aboutSection ? aboutSection.offsetTop : window.innerHeight * 0.8;
            const y = window.scrollY;

            const rect = placeholder.getBoundingClientRect();
            const startTop = rect.top + y;
            const startLeft = rect.left + window.scrollX;
            const width = rect.width;
            const height = rect.height;

            const targetTop = 20;
            const targetRight = window.innerWidth * 0.05;
            const targetLeft = window.innerWidth - targetRight - height;

            const progress = Math.min(1, y / limit);

            const currentTop = (startTop - y) * (1 - progress) + targetTop * progress;
            const currentWidth = width * (1 - progress) + height * progress;
            const currentLeft = startLeft * (1 - progress) + targetLeft * progress;

            // Text fades out between 0% and 60% scroll progress
            const textProgress = Math.min(1, progress / 0.6);

            if (y === 0) {
                setBtnStyle({
                    position: 'static',
                    zIndex: 'auto'
                });
                setTextStyle({
                    display: 'inline',
                    opacity: 1,
                    maxWidth: '80px',
                    overflow: 'hidden'
                });
            } else {
                setBtnStyle({
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
                setTextStyle({
                    display: 'inline-block',
                    opacity: 1 - textProgress,
                    maxWidth: `${(1 - textProgress) * 80}px`,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'middle',
                    transition: 'none'
                });
            }
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
                    <span>
                        <button onClick={() => { location.href = '#contact' }}>
                            Contact
                            <i className="fa-solid fa-square-envelope"></i>
                        </button>
                    </span>
                    <span ref={placeholderRef} style={{ display: 'inline-block', position: 'relative' }}>
                        <button onClick={toggleTheme} ref={btnRef} className="theme-btn" style={btnStyle}>
                            <span style={textStyle}>Theme </span>
                            <i className="fa-solid fa-circle-half-stroke"></i>
                        </button>
                    </span>
                    <span>
                        <a href="./resume.pdf" download="Rohan_Mirjankar_Resume.pdf">
                            <button>
                                Resume
                                <i className="fa-solid fa-download"></i>
                            </button>
                        </a>
                    </span>
                    <span></span>
                </div>
            </div>
            <div></div>
        </div>
    );
}
