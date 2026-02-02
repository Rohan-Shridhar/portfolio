const { useState, useEffect } = React;
const About = () => {
    const [hover, setHover] = useState(false);
    function handleHover() {
        setHover(true);
    }
    function handleLeave() {
        setHover(false);
    }
    useEffect(() => {
        if (hover) {
            document.querySelector(".about-cont-img").style.transition = "transform 0.5s ease, box-shadow 1s ease";
            document.querySelector(".about-cont-img").style.transform = "rotateZ(5deg) scale(1.25) translateX(-100px)";
            document.querySelector(".about-cont-img").style.boxShadow = "0 0 50px var(--text-color)";
        } else {
            document.querySelector(".about-cont-img").style.transform = "rotateZ(0deg) scale(1) translateX(0px)";
            document.querySelector(".about-cont-img").style.boxShadow = "none";
        }
    }, [hover]);

    return (
        <div className="about-cont" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <div className="about-txt">
                <span className="about-title">Who am I ?</span>
                <span className="about-desc">I am a 19 year old undergraduate student from Bangalore, India. I am a very curious person and love to learn new things. I am currently learning web development. I am good at problem solving and passinate about creating interactive and user-friendly interfaces. </span>
            </div>
            <div></div>
            <span className="about-img-box"><img className="about-cont-img" src="images\fpf.jpeg" alt="Profile" />
                <span>Profile</span></span>
        </div>
    );
}