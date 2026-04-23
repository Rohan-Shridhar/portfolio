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
                            <i class="fa-solid fa-square-envelope"></i>
                        </button>
                    </span>
                    <span>
                        <button onClick={toggleTheme}>
                            Theme
                            <i class="fa-solid fa-circle-half-stroke"></i>
                        </button>
                    </span>
                    <span>
                        <a href="./resume.pdf" download="Rohan_Mirjankar_Resume.pdf">
                            <button>
                                Resume
                                <i class="fa-solid fa-download"></i>
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