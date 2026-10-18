import { useState } from 'react';
import { projectHighlights, skillGroups } from './data/skills.js';
import CategoryAnchors from './components/skills/CategoryAnchors.jsx';
import InventoryView from './components/skills/InventoryView.jsx';
import './components/skills/skills.css';

export default function Skills() {
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const [highlightedProjectId, setHighlightedProjectId] = useState(null);

    const activeProject = projectHighlights.find((project) => project.id === highlightedProjectId) || null;
    const projectSkillIds = activeProject?.skillIds || [];

    const handleCategorySelect = (categoryId) => {
        setHighlightedProjectId(null);
        setActiveCategoryId((current) => current === categoryId ? null : categoryId);
    };

    const handleProjectSelect = (projectId) => {
        if (highlightedProjectId === projectId) {
            setHighlightedProjectId(null);
            return;
        }

        setHighlightedProjectId(projectId);
        setActiveCategoryId(null);
    };

    const resetInventory = () => {
        setHighlightedProjectId(null);
        setActiveCategoryId(null);
    };

    return (
        <section className="skills-cont" id="skills" aria-labelledby="skills-title">
            <header className="skills-heading">
                <h2 className="skills-title" id="skills-title">Skills Inventory</h2>
                <p className="skills-intro">Browse the technologies in my inventory.</p>
            </header>

            <div className="skills-controls">
                <CategoryAnchors
                    groups={skillGroups}
                    activeCategoryId={activeCategoryId}
                    onSelect={handleCategorySelect}
                />
                <div className="skills-project-controls" role="group" aria-label="Highlight technologies used in a project">
                    <span className="skills-project-label">Project</span>
                    {projectHighlights.map((project) => (
                        <button
                            className={`skills-project-button${highlightedProjectId === project.id ? ' is-active' : ''}`}
                            type="button"
                            key={project.id}
                            aria-pressed={highlightedProjectId === project.id}
                            aria-label={`Highlight ${project.skillIds.join(', ')} used in ${project.name}`}
                            onClick={() => handleProjectSelect(project.id)}
                        >
                            {project.name}
                        </button>
                    ))}
                    {activeProject && (
                        <a className="skills-project-link" href={activeProject.href}>View project</a>
                    )}
                </div>
            </div>

            <div className="skills-stage">
                <InventoryView
                    groups={skillGroups}
                    activeCategoryId={activeCategoryId}
                    projectSkillIds={projectSkillIds}
                    onReset={resetInventory}
                />
            </div>
        </section>
    );
}
