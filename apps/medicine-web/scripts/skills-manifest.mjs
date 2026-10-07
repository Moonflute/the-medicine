/** Group source-authored category metadata independently of legacy folders. */
export function createSkillsManifest(records) {
  const categories = new Map();
  const ids = new Set();
  const ordered = records.slice().sort((a, b) =>
    a.categoryOrder - b.categoryOrder
    || a.subcategoryOrder - b.subcategoryOrder
    || a.order - b.order
    || a.skill.name.localeCompare(b.skill.name, "ko"));

  for (const record of ordered) {
    const { skill, iconName, categoryOrder, legacyCategoryIds } = record;
    if (ids.has(skill.id)) throw new Error(`Duplicate skill ID: ${skill.id}`);
    ids.add(skill.id);
    let category = categories.get(skill.categoryId);
    if (!category) {
      category = {
        id: skill.categoryId, name: skill.categoryName, iconName,
        order: categoryOrder, legacyIds: [], items: [], groups: [],
      };
      categories.set(category.id, category);
    }
    if (category.name !== skill.categoryName || category.iconName !== iconName || category.order !== categoryOrder) {
      throw new Error(`Inconsistent skill category metadata: ${skill.categoryId}`);
    }
    category.legacyIds = [...new Set([...category.legacyIds, ...legacyCategoryIds])];
    const item = { id: skill.id, name: skill.name };
    category.items.push(item);
    const groupName = skill.subcategory || "";
    let group = category.groups.find(entry => entry.name === groupName);
    if (!group) {
      group = { name: groupName, items: [] };
      category.groups.push(group);
    }
    group.items.push(item);
  }

  const owners = new Map([...categories.keys()].map(id => [id, id]));
  for (const category of categories.values()) {
    for (const alias of category.legacyIds) {
      const owner = owners.get(alias);
      if (owner && owner !== category.id) throw new Error(`Ambiguous skill category alias: ${alias}`);
      owners.set(alias, category.id);
    }
  }
  return {
    source: "07 Skills",
    categories: [...categories.values()].map(category => ({
      id: category.id, name: category.name, iconName: category.iconName,
      legacyIds: category.legacyIds, items: category.items, groups: category.groups,
    })),
    items: ordered.map(record => record.skill),
  };
}
