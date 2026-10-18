import { useState } from 'react';

function InventoryIcon({ skill, className = '' }) {
    const [failedSkillId, setFailedSkillId] = useState(null);

    if (failedSkillId === skill.id) {
        return <span className={`${className} skills-inventory-slot__fallback`} aria-hidden="true">{skill.name.slice(0, 2)}</span>;
    }

    return (
        <img
            className={className}
            src={skill.icon}
            alt=""
            loading="lazy"
            onError={() => setFailedSkillId(skill.id)}
        />
    );
}

function InventoryItem({
    skill,
    category,
    index,
    dimmed,
    highlighted,
}) {
    return (
        <div
            className={`skills-inventory-slot${dimmed ? ' is-dimmed' : ''}${highlighted ? ' is-project-highlighted' : ''}`}
            data-category={category.color}
            role="img"
            aria-label={`${skill.name}, ${category.title}. ${skill.role}`}
            title={`${skill.name} — ${skill.role}`}
        >
            <span className="skills-inventory-slot__number" aria-hidden="true">{index + 1}</span>
            <InventoryIcon skill={skill} className="skills-inventory-slot__icon" />
            <span className="skills-inventory-slot__name">{skill.name}</span>
        </div>
    );
}

function InventoryCategory({
    group,
    activeCategoryId,
    projectSkillIds,
}) {
    const emptySlotCount = Math.max(0, 9 - group.skills.length);

    return (
        <section className="skills-inventory-category" data-category={group.color} aria-labelledby={`inventory-category-${group.id}`}>
            <h3 className="skills-inventory-category__title" id={`inventory-category-${group.id}`}>
                <span className="skills-inventory-category__marker" aria-hidden="true" />
                <span>{group.title}</span>
                <span className="skills-inventory-category__count">{group.skills.length}</span>
            </h3>
            <div className="skills-inventory-category__slots" role="group" aria-label={`${group.title} inventory slots`}>
                {group.skills.map((skill, index) => (
                    <InventoryItem
                        key={skill.id}
                        skill={skill}
                        category={group}
                        index={index}
                        dimmed={Boolean(
                            (activeCategoryId && activeCategoryId !== group.id)
                            || (projectSkillIds.length && !projectSkillIds.includes(skill.id)),
                        )}
                        highlighted={projectSkillIds.includes(skill.id)}
                    />
                ))}
                {Array.from({ length: emptySlotCount }, (_, index) => (
                    <span key={`empty-${index}`} className="skills-inventory-slot skills-inventory-slot--empty" aria-hidden="true" />
                ))}
            </div>
        </section>
    );
}

export default function InventoryView({
    groups,
    activeCategoryId,
    projectSkillIds,
    onReset,
}) {
    const totalSkills = groups.reduce((count, group) => count + group.skills.length, 0);
    const hasFilters = Boolean(activeCategoryId || projectSkillIds.length);

    return (
        <div className="skills-inventory" role="region" aria-label="Technology inventory">
            <header className="skills-inventory__header">
                <div>
                    <span className="skills-inventory__eyebrow">SKILL STORAGE</span>
                    <h3 className="skills-inventory__title">Inventory</h3>
                </div>
                <span className="skills-inventory__count">{totalSkills} ITEMS</span>
            </header>

            <div className="skills-inventory__storage">
                <div className="skills-inventory__storage-heading">
                    <h3>Storage</h3>
                    {hasFilters && (
                        <button type="button" className="skills-inventory__clear" onClick={onReset}>
                            Clear filters
                        </button>
                    )}
                </div>
                <div className="skills-inventory__categories">
                    {groups.map((group) => (
                        <InventoryCategory
                            key={group.id}
                            group={group}
                            activeCategoryId={activeCategoryId}
                            projectSkillIds={projectSkillIds}
                        />
                    ))}
                </div>
                <div className="skills-inventory__hintline">
                    <i className="fa-solid fa-boxes-stacked" aria-hidden="true" />
                    Skill slots are for display only
                </div>
            </div>
        </div>
    );
}
