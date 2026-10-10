import { useState } from 'react';
import { skillById, skillConnections } from '../../data/skills.js';

const zones = {
    desktop: [
        { id: 'interface', title: 'INTERFACE', x: 36, y: 78, width: 350, height: 270 },
        { id: 'server', title: 'SERVER', x: 455, y: 78, width: 350, height: 270 },
        { id: 'data', title: 'DATA', x: 874, y: 78, width: 370, height: 270 },
        { id: 'development', title: 'DEVELOPMENT & DEPLOYMENT', x: 36, y: 420, width: 1208, height: 300 },
    ],
    mobile: [
        { id: 'interface', title: 'INTERFACE', x: 14, y: 54, width: 332, height: 208 },
        { id: 'server', title: 'SERVER', x: 14, y: 294, width: 332, height: 208 },
        { id: 'data', title: 'DATA', x: 14, y: 534, width: 332, height: 208 },
        { id: 'development', title: 'DEVELOPMENT & DEPLOYMENT', x: 14, y: 774, width: 332, height: 208 },
    ],
};

function getBlueprintKind(skill) {
    if (skill.categoryId === 'databases') return 'database';
    if (skill.categoryId === 'tools') return 'tools';
    if (skill.id === 'javascript' || skill.id === 'react' || skill.id === 'nodejs') return 'full-stack';
    if (skill.categoryId === 'web') return 'interface';
    return 'language';
}

function RoleMarker({ title, subtitle, x, y }) {
    return (
        <g className="skills-role-marker" transform={`translate(${x} ${y})`} aria-label={`${title}: ${subtitle}`}>
            <circle className="skills-role-dot" r="7" />
            <text className="skills-role-title" x="0" y="28" textAnchor="middle">{title}</text>
            <text className="skills-role-subtitle" x="0" y="44" textAnchor="middle">{subtitle}</text>
        </g>
    );
}

function RoleZone({ zone, muted = false, title = zone.title }) {
    return (
        <g className={`skills-blueprint-zone skills-blueprint-zone--${zone.id}${muted ? ' is-muted' : ''}`} aria-hidden="true">
            <rect x={zone.x} y={zone.y} width={zone.width} height={zone.height} rx="4" />
            <text x={zone.x + 18} y={zone.y + 27}>{title}</text>
        </g>
    );
}

function FocusedTechnology({ skill, x, y, onSelect, idSuffix = 'blueprint' }) {
    const [iconFailed, setIconFailed] = useState(false);
    const titleId = `blueprint-${skill.id}-name-${idSuffix}`;

    return (
        <g
            id={`blueprint-tech-${skill.id}-${idSuffix}`}
            className="skills-blueprint-tech is-selected"
            data-category={skill.categoryColor}
            transform={`translate(${x} ${y})`}
            role="button"
            tabIndex={0}
            aria-labelledby={titleId}
            aria-label={`${skill.name}. ${skill.role}. Select this technology.`}
            onClick={() => onSelect(skill.id)}
            onKeyDown={(event) => {
                if (event.key !== 'Enter' && event.key !== ' ') return;
                event.preventDefault();
                onSelect(skill.id);
            }}
        >
            <circle className="skills-node-hit" r="37" />
            <circle className="skills-node-core" r="22" />
            {iconFailed ? (
                <text className="skills-node-fallback" x="0" y="5" textAnchor="middle" aria-hidden="true">{skill.name.slice(0, 2)}</text>
            ) : (
                <image
                    href={skill.icon}
                    x="-15"
                    y="-15"
                    width="30"
                    height="30"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    onError={() => setIconFailed(true)}
                />
            )}
            <text className="skills-node-label" id={titleId} x="0" y="50" textAnchor="middle">{skill.name}</text>
        </g>
    );
}

function Flow({ kind, selectedId, mobile }) {
    const horizontal = mobile
        ? {
            'full-stack': [
                'M 82 152 H 158',
                'M 180 174 C 250 245 60 290 72 382',
                'M 82 390 H 158',
                'M 180 412 V 622',
                'M 180 638 C 210 520 180 474 180 414',
                'M 158 390 H 82',
                'M 72 382 C 50 280 115 210 164 168',
                'M 158 152 H 82',
            ],
            interface: ['M 82 152 H 158', 'M 202 152 H 278'],
            language: ['M 82 870 H 158', 'M 202 870 H 278'],
            database: ['M 82 630 H 158', 'M 202 630 H 278'],
            tools: ['M 82 870 H 158', 'M 202 870 H 278'],
        }[kind]
        : {
            'full-stack': [
                'M 122 220 H 293',
                'M 337 220 C 390 166 500 166 588 220',
                'M 602 220 H 713',
                'M 757 236 C 835 320 955 320 1048 236',
                'M 1048 204 C 950 115 835 115 757 204',
                'M 713 198 C 680 168 630 168 602 198',
                'M 588 198 C 500 132 390 132 337 198',
                'M 293 198 C 210 152 160 164 122 198',
            ],
            interface: ['M 126 220 H 293', 'M 337 220 H 713'],
            language: ['M 126 560 H 593', 'M 637 560 H 1048'],
            database: ['M 126 220 H 593', 'M 637 220 H 1033'],
            tools: ['M 126 560 H 593', 'M 637 560 H 1033'],
        }[kind];

    const mobileLabelY = kind === 'full-stack' ? 300 : kind === 'database' ? 607 : kind === 'tools' || kind === 'language' ? 847 : 152;
    const desktopLabelY = kind === 'full-stack' ? 174 : kind === 'database' ? 190 : 528;

    return (
        <g className={`skills-flow skills-flow--${kind}`} aria-label="Illustrative workflow connections">
            {horizontal.map((path, index) => (
                <path
                    className={`skills-flow-path${index === 0 ? ' is-traced' : ''}`}
                    d={path}
                    markerEnd={`url(#blueprint-arrow-${mobile ? 'mobile' : 'desktop'})`}
                    key={path}
                />
            ))}
            {kind === 'full-stack' && (
                <>
                    <text className="skills-flow-caption" x={mobile ? 120 : 655} y={mobile ? 286 : desktopLabelY}>request</text>
                    <text className="skills-flow-caption" x={mobile ? 220 : 655} y={mobile ? 330 : 305}>response</text>
                </>
            )}
            {kind === 'database' && <text className="skills-flow-caption" x={mobile ? 180 : 490} y={mobile ? mobileLabelY : desktopLabelY}>data operation</text>}
            {kind === 'tools' && <text className="skills-flow-caption" x={mobile ? 180 : 640} y={mobile ? mobileLabelY : desktopLabelY}>work sequence</text>}
            {kind === 'language' && <text className="skills-flow-caption" x={mobile ? 180 : 640} y={mobile ? mobileLabelY : desktopLabelY}>application logic</text>}
            {kind === 'interface' && <text className="skills-flow-caption" x={mobile ? 236 : 506} y={mobile ? 140 : 190}>{selectedId === 'javascript' ? 'application code' : 'rendered interface'}</text>}
        </g>
    );
}

function BlueprintDiagram({ skill, kind, onSelect, mobile }) {
    const nodes = mobile
        ? {
            'full-stack': {
                roles: [
                    { title: 'User', subtitle: 'interaction', x: 72, y: 152 },
                    { title: 'API', subtitle: 'request boundary', x: 72, y: 390 },
                    { title: 'Data store', subtitle: 'generic role', x: 180, y: 630 },
                ],
                selected: skill.id === 'nodejs' ? { x: 180, y: 390 } : { x: 180, y: 152 },
                companion: skill.id === 'nodejs' ? { id: 'react', x: 180, y: 152 } : { id: 'nodejs', x: 180, y: 390 },
                label: skill.id === 'nodejs' ? 'Server runtime' : skill.id === 'javascript' ? 'JavaScript · frontend and server language' : 'Frontend interface',
            },
            interface: {
                roles: [
                    { title: 'User', subtitle: 'interaction', x: 72, y: 152 },
                    { title: 'Page', subtitle: 'browser output', x: 288, y: 152 },
                ],
                selected: { x: 180, y: 152 },
                label: skill.id === 'javascript' ? 'Application language' : 'Interface technology',
            },
            language: {
                roles: [
                    { title: 'Input', subtitle: 'program data', x: 72, y: 870 },
                    { title: 'Result', subtitle: 'program output', x: 288, y: 870 },
                ],
                selected: { x: 180, y: 870 },
                label: `${skill.name} · application logic`,
            },
            database: {
                roles: [
                    { title: 'Application', subtitle: 'generic role', x: 72, y: 630 },
                    { title: 'Data access', subtitle: 'system role', x: 288, y: 630 },
                ],
                selected: { x: 180, y: 630 },
                label: 'Selected database',
            },
            tools: {
                roles: [
                    { title: 'Project work', subtitle: 'planning / editing', x: 72, y: 870 },
                    { title: 'Workflow', subtitle: 'generic role', x: 288, y: 870 },
                ],
                selected: { x: 180, y: 870 },
                label: skill.id === 'vercel' ? 'Frontend deployment' : skill.id === 'git' ? 'Version history' : skill.id === 'excalidraw' ? 'Interface planning' : 'Development environment',
            },
        }[kind]
        : {
            'full-stack': {
                roles: [
                    { title: 'User', subtitle: 'interaction', x: 115, y: 220 },
                    { title: 'API', subtitle: 'request boundary', x: 595, y: 220 },
                    { title: 'Data store', subtitle: 'generic role', x: 1055, y: 220 },
                ],
                selected: skill.id === 'nodejs' ? { x: 735, y: 220 } : { x: 315, y: 220 },
                companion: skill.id === 'nodejs' ? { id: 'react', x: 315, y: 220 } : { id: 'nodejs', x: 735, y: 220 },
                label: skill.id === 'nodejs' ? 'Server runtime' : skill.id === 'javascript' ? 'JavaScript · frontend and server language' : 'Frontend interface',
            },
            interface: {
                roles: [
                    { title: 'User', subtitle: 'interaction', x: 115, y: 220 },
                    { title: 'Page', subtitle: 'browser output', x: 735, y: 220 },
                ],
                selected: { x: 315, y: 220 },
                label: skill.id === 'javascript' ? 'Application language' : 'Interface technology',
            },
            language: {
                roles: [
                    { title: 'Input', subtitle: 'program data', x: 115, y: 560 },
                    { title: 'Result', subtitle: 'program output', x: 1055, y: 560 },
                ],
                selected: { x: 615, y: 560 },
                label: `${skill.name} · application logic`,
            },
            database: {
                roles: [
                    { title: 'Application', subtitle: 'generic role', x: 115, y: 220 },
                    { title: 'Data access', subtitle: 'system role', x: 615, y: 220 },
                ],
                selected: { x: 1055, y: 220 },
                label: 'Selected database',
            },
            tools: {
                roles: [
                    { title: 'Project work', subtitle: 'planning / editing', x: 115, y: 560 },
                    { title: 'Workflow', subtitle: 'generic role', x: 1055, y: 560 },
                ],
                selected: { x: 615, y: 560 },
                label: skill.id === 'vercel' ? 'Frontend deployment' : skill.id === 'git' ? 'Version history' : skill.id === 'excalidraw' ? 'Interface planning' : 'Development environment',
            },
        }[kind];

    const svgId = mobile ? 'mobile' : 'desktop';
    const zoneList = zones[svgId];
    const activeZoneIds = kind === 'full-stack'
        ? ['interface', 'server', 'data']
        : kind === 'database'
            ? ['server', 'data']
            : kind === 'tools'
                ? ['development']
                : kind === 'language'
                    ? ['development']
                    : ['interface'];
    const viewBox = mobile ? '0 0 360 1000' : '0 0 1280 760';
    const companion = nodes.companion ? skillById[nodes.companion.id] : null;
    const selected = skillById[skill.id];

    return (
        <svg
            className={`skills-blueprint-map skills-blueprint-map--${svgId}`}
            viewBox={viewBox}
            role="group"
            aria-label={`${selected.name} role in an illustrative system workflow`}
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <marker id={`blueprint-arrow-${svgId}`} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto" markerUnits="userSpaceOnUse">
                    <path d="M 0 0 L 9 4.5 L 0 9 z" className="skills-arrowhead" />
                </marker>
            </defs>
            <rect className="skills-map-bg" x="0" y="0" width="100%" height="100%" rx="8" />
            {zoneList.map((zone) => (
                <RoleZone
                    zone={zone}
                    key={zone.id}
                    muted={!activeZoneIds.includes(zone.id)}
                    title={kind === 'language' && zone.id === 'development' ? 'APPLICATION LOGIC' : zone.title}
                />
            ))}
            <Flow kind={kind} selectedId={skill.id} mobile={mobile} />
            {nodes.roles.map((role) => <RoleMarker {...role} key={role.title} />)}
            {companion && <FocusedTechnology skill={companion} x={nodes.companion.x} y={nodes.companion.y} onSelect={onSelect} idSuffix={`${svgId}-companion`} />}
            <FocusedTechnology skill={selected} x={nodes.selected.x} y={nodes.selected.y} onSelect={onSelect} idSuffix={svgId} />
            <text className="skills-blueprint-role" x={mobile ? 180 : 640} y={mobile ? 970 : 735} textAnchor="middle">{nodes.label}</text>
        </svg>
    );
}

export default function BlueprintView({ skillId, onSelect, onReset }) {
    const selected = skillById[skillId];
    if (!selected) return null;

    const kind = getBlueprintKind(selected);
    const directConnections = skillConnections.filter((connection) => connection.sourceId === skillId || connection.targetId === skillId);
    const connectionSummary = directConnections.length ? `Connected technologies: ${directConnections.map(({ sourceId, targetId }) => skillById[sourceId === skillId ? targetId : sourceId].name).join(', ')}.` : '';

    return (
        <div className="skills-visualization skills-visualization--blueprint">
            <div className="skills-blueprint-toolbar">
                <p className="skills-blueprint-title"><span>{selected.name}</span><span aria-hidden="true">/</span><span>{selected.role}</span></p>
                <button className="skills-reset" type="button" onClick={onReset}>
                    <i className="fa-solid fa-arrow-left-long" aria-hidden="true" />
                    Full map
                </button>
            </div>
            <div className="skills-blueprint-canvas">
                <BlueprintDiagram skill={selected} kind={kind} onSelect={onSelect} />
                <BlueprintDiagram skill={selected} kind={kind} onSelect={onSelect} mobile />
            </div>
            {connectionSummary && <p className="skills-screenreader-list" aria-live="polite">{connectionSummary}</p>}
            <p className="skills-blueprint-note">Reference workflow · illustrative roles, not a claim about a named project.</p>
        </div>
    );
}
