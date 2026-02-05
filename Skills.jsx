const js = "images/js.png"
const html = "images/html.png"
const css = "images/css.png"
const react = "images/react.png"
const python = "images/python.png"
const cpp = "images/cpp.png"
const java = "images/java.png"
const sql = "images/postgress.png"
const mongodb = "images/mongodb.png"
const Skills = () => {
    return (
        <div className="skills-cont" id="skills">
            <div className="skills-title">What do I know ?</div>
            <div className="skill-row-1">
                <div className="skill"><img src={js} alt="js" /></div>
                <div className="skill"><img src={python} alt="python" /></div>
                <div className="skill"><img src={cpp} alt="cpp" /></div>
                <div className="skill"><img src={java} alt="java" /></div>
                <div className="skill"><img src={sql} alt="PostgresSql" /></div>
            </div>
            <div className="skill-row-2">
                <div className="skill"><img src={html} alt="html" /></div>
                <div className="skill"><img src={css} alt="css" /></div>
                <div className="skill"><img src={react} alt="react" /></div>
                <div className="skill"><img src={mongodb} alt="mongodb" /></div>
            </div>
        </div>
    );
}