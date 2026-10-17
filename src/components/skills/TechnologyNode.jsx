import { useState } from 'react';

export default function TechnologyNode({
    skill,
    onSelect,
    onFocus,
    onBlur,
    onPointerEnter,
    onPointerLeave,
    selected = false,
    focused = false,
    dimmed = false,
    compact = false,
    x,
    y,
    idSuffix = 'main',
}) {
    const [iconFailed, setIconFailed] = useState(false);
    const titleId = `technology-${skill.id}-name-${idSuffix}`;

    const handleKeyDown = (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        onSelect(skill.id);
    };

    return (
        <g
            id={`technology-node-${skill.id}-${idSuffix}`}
            className={`skills-node${selected ? ' is-selected' : ''}${focused ? ' is-neighbor' : ''}${dimmed ? ' is-dimmed' : ''}${compact ? ' is-compact' : ''}`}
            data-category={skill.categoryColor}
            transform={`translate(${x} ${y})`}
            role="button"
            tabIndex={0}
            aria-labelledby={titleId}
            aria-label={`${skill.name}. ${skill.role}. Select to view its role in a workflow.`}
            onClick={() => onSelect(skill.id)}
            onKeyDown={handleKeyDown}
            onFocus={() => onFocus(skill.id)}
            onBlur={() => onBlur(skill.id)}
            onMouseEnter={() => onPointerEnter(skill.id)}
            onMouseLeave={() => onPointerLeave(skill.id)}
        >
            <title>{`${skill.name}: ${skill.role}`}</title>
            <circle className="skills-node-hit" r="48" />
            <circle className="skills-node-orbit" r="38" />
            <circle className="skills-node-core" r="30" />
            {iconFailed ? (
                <text className="skills-node-fallback" x="0" y="6" textAnchor="middle" aria-hidden="true">
                    {skill.name.slice(0, 2)}
                </text>
            ) : (
                <image
                    className="skills-node-logo"
                    href={skill.icon}
                    x="-20"
                    y="-20"
                    width="40"
                    height="40"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    onError={() => setIconFailed(true)}
                />
            )}
            <text className="skills-node-label" id={titleId} x="0" y="57" textAnchor="middle">
                {skill.name}
            </text>
        </g>
    );
}
