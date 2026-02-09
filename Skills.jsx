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
                <div className="skill-js"><img src={js} alt="js" /></div>
                <div className="skill-java"><img src={java} alt="java" /></div>
                <div className="skill-py"><img src={python} alt="python" /></div>
                <div className="skill-cpp"><img src={cpp} alt="cpp" /></div>
            </div>
            <div className="skill-row-2">
                <div className="skill-html"><img src={html} alt="html" /></div>
                <div className="skill-css"><img src={css} alt="css" /></div>
                <div className="skill-react"><img src={react} alt="react" /></div>
            </div>
            <div className="skill-row-3">
                <div className="skill-sql"><img src={sql} alt="PostgresSql" /></div>
                <div className="skill-mongodb"><img src={mongodb} alt="mongodb" /></div>
            </div>
        </div>
    );
}