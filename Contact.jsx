const { useState, useEffect } = React;
const Contact = () => {
    const [hover, setHover] = useState(false);
    function handleHover() {
        setHover(true);
    }
    function handleLeave() {
        setHover(false);
    }
    useEffect(() => {
        if (hover) {
            document.querySelector(".mail-txt").style.transition = "transform 1s ease";
            document.querySelector(".mail").style.transition = "transform 1s ease";
            document.querySelector(".mail-txt").style.transform = "translateX(50px)";
            document.querySelector(".mail").style.transform = "translateX(50px)";
            document.querySelector(".line").style.width = "60%";
            document.querySelector(".line").style.transition = "width 0.8s ease";

            document.querySelector(".contact-icons").style.transition = "transform 1s ease";
            document.querySelector(".contact-icons").style.transform = "translateX(-50px)";
        } else {
            document.querySelector(".mail-txt").style.transform = "translateX(0px)";
            document.querySelector(".mail").style.transform = "translateX(0px)";
            document.querySelector(".line").style.width = "90%";
            document.querySelector(".contact-icons").style.transform = "translateX(0px)";
        }
    }
        , [hover]);
    return (
        <div className="contact" onMouseEnter={handleHover} onMouseLeave={handleLeave} id="contact">
            <div className="contact-title">Connect with me</div>
            <div></div>
            <div className="contact-icons">
                <span><a href="https://www.linkedin.com/in/rohan-mirjankar/" target="_blank" aria-label="linkedin" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></span>
                <span><a href="https://github.com/Rohan-Shridhar" target="_blank" aria-label="github" rel="noopener noreferrer"><i className="fab fa-github"></i></a></span>
                <span><a href="https://www.instagram.com/rohan.mirjankar/" target="_blank" aria-label="instagram" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></span>
                <span><a href="https://x.com/Rohan_shridhar" target="_blank" aria-label="twitter" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></span>
            </div>
            <div className="contact-email">
                <span className="mail-txt">Or you can reach me at </span>
                <span className="contact-line"><span className="line"></span></span>
                <span className="mail">rohansm668@gmail.com</span>
            </div>
        </div>
    );
}