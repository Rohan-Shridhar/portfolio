export default function CategoryAnchors({ groups, activeCategoryId, onSelect }) {
    return (
        <div className="skills-category-controls" role="group" aria-label="Emphasize a technology category">
            {groups.map((group) => (
                <button
                    className="skills-category-control"
                    type="button"
                    key={group.id}
                    data-category={group.color}
                    aria-pressed={activeCategoryId === group.id}
                    onClick={() => onSelect(activeCategoryId === group.id ? null : group.id)}
                >
                    <span className="skills-category-dot" aria-hidden="true" />
                    {group.title}
                </button>
            ))}
        </div>
    );
}
