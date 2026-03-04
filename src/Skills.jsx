const js = "images/languages/js.png"
const html = "images/Web/html.png"
const css = "images/Web/css.png"
const react = "images/Web/react.png"
const python = "images/languages/python.png"
const cpp = "images/languages/cpp.png"
const java = "images/languages/java.png"
const sql = "images/DBs/postgress.png"
const md = "images/Tools/markdown.png" // Corrected 'tools' to 'Tools'
const mongodb = "images/DBs/mongodb.png"
const git = "images/Tools/git.png"
const vscode = "images/Tools/vscode.png"
const figma = "images/Tools/figma.png"
const vercel = "images/Tools/vercel.png"
const antigravity = "images/Tools/antigravity.png"

const Skills = () => {
    return (
        <div className="skills-cont" id="skills">
            <div className="skills-title">What do I know ?</div>
            <div className="skill-row-1">
                <div className="skill-js" id="skill"><img src={js} alt="js" /></div>
                <div className="skill-java" id="skill"><img src={java} alt="java" /></div>
                <div className="skill-py" id="skill"><img src={python} alt="python" /></div>
                <div className="skill-cpp" id="skill"><img src={cpp} alt="cpp" /></div>
                <div></div>
                <p className="lang">Languages</p>
            </div>
            <div className="skill-row-2">
                <div className="skill-html" id="skill"><img src={html} alt="html" /></div>
                <div className="skill-css" id="skill"><img src={css} alt="css" /></div>
                <div className="skill-react" id="skill"><img src={react} alt="react" /></div>
                <div></div>
                <p className="lang">Web Dev</p>
            </div>
            <div className="skill-row-3">
                <div className="skill-sql" id="skill"><img src={sql} alt="PostgresSql" /></div>
                <div className="skill-mongodb" id="skill"><img src={mongodb} alt="mongodb" /></div>
                <div></div>
                <p className="lang">Databases</p>
            </div>
            <div className="skill-row-4">
                <div className="skill-git" id="skill"><img src={git} alt="Git version control" /></div>
                <div className="skills-vscode" id="skill"><img src={vscode} alt="VS Code" /></div>
                <div className="skills-antigravity" id="skill"><img src={antigravity} alt="Antigravity" /></div>
                <div className="skill-md" id="skill"><img src={md} alt="Markdown" /></div>
                <div className="skills-figma" id="skill"><img src={figma} alt="Figma" /></div>
                <div className="skills-vercel" id="skill"><img src={vercel} alt="Vercel" /></div>
                <div></div>
                <p className="lang">Tools</p>
            </div>
        </div>
    );
}