import { skillGroups } from './data/skills.js';
import InventoryView from './components/skills/InventoryView.jsx';
import './components/skills/skills.css';

export default function Skills() {
    return (
        <section className="skills-cont" id="skills" aria-labelledby="skills-title">
            <header className="skills-heading">
                <h2 className="skills-title" id="skills-title">Skills Inventory</h2>
                <p className="skills-intro">Browse the technologies in my inventory.</p>
            </header>

            <div className="skills-stage">
                <InventoryView
                    groups={skillGroups}
                />
            </div>
        </section>
    );
}
