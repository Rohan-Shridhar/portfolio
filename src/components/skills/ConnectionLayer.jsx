import { skillById } from '../../data/skills.js';

export default function ConnectionLayer({ connections, activeSkillId, activeCategoryId, projectSkillIds = [], layout = 'desktop' }) {

    return (
        <g className="skills-connections" aria-label="Technology relationships">
            {connections.map((connection) => {
                const source = skillById[connection.sourceId];
                const target = skillById[connection.targetId];
                if (!source || !target) return null;

                const isRelated = source.id === activeSkillId || target.id === activeSkillId;
                const isProjectRelated = projectSkillIds.includes(source.id) && projectSkillIds.includes(target.id);
                const isFocused = isRelated || isProjectRelated;
                const isCategoryRelated = !activeCategoryId || source.categoryId === activeCategoryId || target.categoryId === activeCategoryId;
                const path = connection[`${layout}Path`] || (layout === 'desktop' ? connection.path : null);
                if (!path) return null;

                return (
                    <g
                        className={`skills-connection${isFocused ? ' is-highlighted' : ''}${!isCategoryRelated ? ' is-dimmed' : ''}${connection.evidence.startsWith('reference-') ? ' is-reference' : ''}`}
                        key={connection.id}
                    >
                        <title>{`${source.name} and ${target.name}: ${connection.evidence.replaceAll('-', ' ')}`}</title>
                        <path className="skills-connection-path" d={path} />
                        {connection.evidence === 'reference-request-flow' && (
                            <>
                                <circle className="skills-connection-particle" r="2.5">
                                    <animateMotion dur="7.5s" repeatCount="indefinite" path={path} />
                                </circle>
                                <circle className="skills-connection-particle skills-connection-particle--return" r="2">
                                    <animateMotion dur="9s" repeatCount="indefinite" path={path} keyPoints="1;0" keyTimes="0;1" calcMode="linear" />
                                </circle>
                            </>
                        )}
                    </g>
                );
            })}
        </g>
    );
}
