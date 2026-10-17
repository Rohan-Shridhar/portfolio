import { useEffect, useRef, useState } from 'react';
import { projectHighlights, skillById, skillGroups } from './data/skills.js';
import BlueprintView from './components/skills/BlueprintView.jsx';
import CategoryAnchors from './components/skills/CategoryAnchors.jsx';
import TechnologyConstellation from './components/skills/TechnologyConstellation.jsx';
import './components/skills/skills.css';

export default function Skills() {
    const [view, setView] = useState('constellation');
    const [selectedSkillId, setSelectedSkillId] = useState(null);
    const [hoveredSkillId, setHoveredSkillId] = useState(null);
    const [focusedSkillId, setFocusedSkillId] = useState(null);
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const [highlightedProjectId, setHighlightedProjectId] = useState(null);
    const returnFocusSkillIdRef = useRef(null);
    const previousViewRef = useRef(view);

    useEffect(() => {
        const layout = window.matchMedia('(max-width: 600px)').matches
            ? 'mobile'
            : window.matchMedia('(max-width: 900px)').matches
                ? 'tablet'
                : 'desktop';
        const blueprintLayout = layout === 'mobile' ? 'mobile' : 'desktop';

        if (view === 'blueprint' && previousViewRef.current !== 'blueprint' && selectedSkillId) {
            document.getElementById(`blueprint-tech-${selectedSkillId}-${blueprintLayout}`)?.focus();
        }

        if (view === 'constellation' && previousViewRef.current === 'blueprint' && !selectedSkillId && returnFocusSkillIdRef.current) {
            document.getElementById(`technology-node-${returnFocusSkillIdRef.current}-${layout}`)?.focus();
        }

        previousViewRef.current = view;
    }, [view, selectedSkillId]);

    const activeProject = projectHighlights.find((project) => project.id === highlightedProjectId) || null;
    const projectSkillIds = activeProject?.skillIds || [];
    const highlightedSkillId = focusedSkillId || hoveredSkillId;
    const activeSkillId = view === 'blueprint' ? selectedSkillId : highlightedSkillId;
    const liveMessage = view === 'blueprint' && selectedSkillId
        ? `Blueprint view. ${skillById[selectedSkillId]?.name || selectedSkillId} selected. Select Full map to return to the constellation.`
        : highlightedSkillId
            ? `${skillById[highlightedSkillId]?.name || highlightedSkillId} focused; directly connected technologies highlighted.`
            : activeProject
                ? `${activeProject.name} highlighted in the constellation.`
            : activeCategoryId
                ? `${skillGroups.find((group) => group.id === activeCategoryId)?.title} emphasized.`
                : 'Constellation view. Select a technology to see its role in a workflow.';

    const handleTechnologySelect = (skillId) => {
        returnFocusSkillIdRef.current = skillId;
        setSelectedSkillId(skillId);
        setHighlightedProjectId(null);
        setActiveCategoryId(null);
        setView('blueprint');
    };

    const handleCategorySelect = (categoryId) => {
        setSelectedSkillId(null);
        setView('constellation');
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
        setSelectedSkillId(null);
        setView('constellation');
    };

    const resetConstellation = () => {
        setView('constellation');
        setSelectedSkillId(null);
        setHighlightedProjectId(null);
        setActiveCategoryId(null);
        setHoveredSkillId(null);
        setFocusedSkillId(null);
    };

    return (
        <section className="skills-cont" id="skills" aria-labelledby="skills-title">
            <header className="skills-heading">
                <h2 className="skills-title" id="skills-title">Equipped Skills</h2>
                <p className="skills-intro">Select a technology to see its role.</p>
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

            <div className={`skills-stage${view === 'blueprint' ? ' is-blueprint' : ''}`}>
                {view === 'blueprint' && selectedSkillId ? (
                    <BlueprintView
                        skillId={selectedSkillId}
                        onSelect={handleTechnologySelect}
                        onReset={resetConstellation}
                    />
                ) : (
                    <TechnologyConstellation
                        activeSkillId={activeSkillId}
                        activeCategoryId={activeCategoryId}
                        projectSkillIds={projectSkillIds}
                        onSelect={handleTechnologySelect}
                        onFocus={setFocusedSkillId}
                        onBlur={(skillId) => setFocusedSkillId((current) => current === skillId ? null : current)}
                        onPointerEnter={setHoveredSkillId}
                        onPointerLeave={(skillId) => setHoveredSkillId((current) => current === skillId ? null : current)}
                    />
                )}
            </div>
            <p className="skills-announcement" aria-live="polite" role="status">{liveMessage}</p>
        </section>
    );
}
