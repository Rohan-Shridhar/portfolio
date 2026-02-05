const { useState } = React
const Home = () => {
    const [theme, setTheme] = useState("blue");
    function toggleTheme() {
        const newTheme = theme === "red" ? "blue" : "red";
        setTheme(newTheme);
        document.body.className = newTheme;
    }
    return (
        <div className="home-cont" id="home">
            <div></div>
            <div className="home">
                <h1>Hi, I'm Rohan S M</h1>
                <div className="home-btn-cont">
                    <span></span>
                    <span>
                        <button onClick={() => { location.href = '#contact' }}>
                            Contact Me
                        </button>
                    </span>
                    <span>
                        <button onClick={toggleTheme}>
                            Theme
                        </button>
                    </span>
                    <span>
                        <button>
                            Resume
                        </button>
                    </span>
                    <span></span>
                </div>
            </div>
            <div></div>
        </div>
    );
}