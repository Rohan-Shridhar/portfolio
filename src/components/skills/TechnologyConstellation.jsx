import { skillGroups, skillMapViewBox, skillConnections } from '../../data/skills.js';
import ConnectionLayer from './ConnectionLayer.jsx';
import TechnologyNode from './TechnologyNode.jsx';

const clusterCaptions = {
    desktop: [
        { id: 'languages', text: 'LANGUAGES', x: 72, y: 100 },
        { id: 'web', text: 'WEB DEVELOPMENT', x: 540, y: 100 },
        { id: 'databases', text: 'DATABASES', x: 72, y: 616 },
        { id: 'tools', text: 'TOOLS & PLATFORMS', x: 765, y: 445 },
    ],
    tablet: [
        { id: 'languages', text: 'LANGUAGES', x: 32, y: 82 },
        { id: 'web', text: 'WEB DEVELOPMENT', x: 420, y: 82 },
        { id: 'databases', text: 'DATABASES', x: 32, y: 455 },
        { id: 'tools', text: 'TOOLS & PLATFORMS', x: 420, y: 455 },
    ],
    mobile: [
        { id: 'languages', text: 'LANGUAGES', x: 18, y: 58 },
        { id: 'web', text: 'WEB DEVELOPMENT', x: 18, y: 282 },
        { id: 'databases', text: 'DATABASES', x: 18, y: 535 },
        { id: 'tools', text: 'TOOLS & PLATFORMS', x: 18, y: 710 },
    ],
};

function ConstellationCanvas({ layout, activeSkillId, activeCategoryId, projectSkillIds, onSelect, onFocus, onBlur, onPointerEnter, onPointerLeave }) {
    const compact = layout === 'mobile';

    return (
        <svg
            className={`skills-map skills-map--${layout}`}
            viewBox={skillMapViewBox[layout]}
            role="group"
            aria-label="Interactive technology constellation"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <pattern id={`skills-grid-${layout}`} width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 H 0 V 32" className="skills-grid-line" fill="none" />
                </pattern>
            </defs>
            <rect className="skills-map-bg" x="0" y="0" width="100%" height="100%" rx="8" />
            <rect className="skills-grid" x="0" y="0" width="100%" height="100%" fill={`url(#skills-grid-${layout})`} />
            {clusterCaptions[layout].map((caption) => (
                <g
                    className={`skills-cluster-label${activeCategoryId === caption.id ? ' is-active' : ''}`}
                    data-category={skillGroups.find((group) => group.id === caption.id)?.color}
                    key={caption.id}
                    aria-hidden="true"
                >
                    <text x={caption.x} y={caption.y}>{caption.text}</text>
                    <path d={`M ${caption.x} ${caption.y + 12} h 44`} />
                </g>
            ))}
            <ConnectionLayer
                connections={skillConnections}
                activeSkillId={activeSkillId}
                activeCategoryId={activeCategoryId}
                projectSkillIds={projectSkillIds}
                layout={layout}
            />
            {skillGroups.flatMap((group) => group.skills.map((skill) => {
                const connected = activeSkillId
                    ? skillConnections.some(({ sourceId, targetId }) =>
                        (sourceId === activeSkillId && targetId === skill.id)
                        || (targetId === activeSkillId && sourceId === skill.id))
                    : false;
                const inProject = projectSkillIds.includes(skill.id);
                const dimmed = activeSkillId
                    ? activeSkillId !== skill.id && !connected
                    : activeCategoryId
                        ? activeCategoryId !== group.id
                        : Boolean(projectSkillIds.length && !inProject);
                const coords = skill[layout];

                return (
                    <TechnologyNode
                        key={skill.id}
                        skill={skill}
                        x={coords.x}
                        y={coords.y}
                        compact={compact}
                        idSuffix={layout}
                        selected={activeSkillId === skill.id || inProject}
                        focused={connected}
                        dimmed={dimmed}
                        onSelect={onSelect}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                    />
                );
            }))}
        </svg>
    );
}

export default function TechnologyConstellation(props) {
    return (
        <div className={`skills-visualization skills-visualization--constellation${props.projectSkillIds.length ? ' has-project-filter' : ''}`} aria-label="Full technology map">
            <ConstellationCanvas {...props} layout="desktop" />
            <ConstellationCanvas {...props} layout="tablet" />
            <ConstellationCanvas {...props} layout="mobile" />
        </div>
    );
}
