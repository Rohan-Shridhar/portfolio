import antigravity from './assets/images/Tools/antigravity.png';

export default function Skills() {
    return (
        <div className="skills-cont" id="skills">
            <div className="skills-title">What do I know ?</div>
            <div className="skill-row-1">
                <div className="skill-js" id="skill"><img src="https://skillicons.dev/icons?i=js" alt="js" /><br /><hr />Intermediate</div>
                <div className="skill-java" id="skill"><img src="https://skillicons.dev/icons?i=java" alt="java" /><br /><hr />Intermediate</div>
                <div className="skill-py" id="skill"><img src="https://skillicons.dev/icons?i=python" alt="python" /><br /><hr />Beginner</div>
                <div className="skill-cpp" id="skill"><img src="https://skillicons.dev/icons?i=cpp" alt="cpp" /><br /><hr />Intermediate</div>
                <div></div>
                <p className="lang">Languages</p>
            </div>
            <div className="skill-row-2">
                <div className="skill-html" id="skill"><img src="https://skillicons.dev/icons?i=html" alt="html" /><br /><hr />Intermediate</div>
                <div className="skill-css" id="skill"><img src="https://skillicons.dev/icons?i=css" alt="css" /><br /><hr />Intermediate</div>
                <div className="skill-react" id="skill"><img src="https://skillicons.dev/icons?i=react" alt="react" /><br /><hr />Intermediate</div>
                <div></div>
                <p className="lang">Web Dev</p>
            </div>
            <div className="skill-row-3">
                <div className="skill-sql" id="skill"><img src="https://skillicons.dev/icons?i=mysql" alt="PostgresSql" /><br /><hr />Intermediate</div>
                <div className="skill-mongodb" id="skill"><img src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" /><br /><hr />Beginner</div>
                <div></div>
                <p className="lang">Databases</p>
            </div>
            <div className="skill-row-4">
                <div className="skill-git" id="skill"><img src="https://skillicons.dev/icons?i=git" alt="Git version control" /><br /><hr />Version Control</div>
                <div className="skills-vscode" id="skill"><img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" /><br /><hr />Editor</div>
                <div className="skills-antigravity" id="skill"><img src={antigravity} alt="Antigravity" /><br /><hr />Editor</div>
                <div className="skill-md" id="skill"><img src="https://skillicons.dev/icons?i=markdown" alt="Markdown" /><br /><hr />Writting</div>
                <div></div>
                <p className="lang">Tools</p>
            </div>
        </div>
    );
}