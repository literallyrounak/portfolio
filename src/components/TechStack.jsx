import Section from './Section';
import Badge from './Badge';
import { techStack } from '../data/site';

const groupByCategory = (items) => {
  const order = [];
  const groups = {};
  items.forEach((item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
      order.push(item.category);
    }
    groups[item.category].push(item);
  });
  return order.map((category) => ({ category, items: groups[category] }));
};

const TechStack = () => {
  const grouped = groupByCategory(techStack);

  return (
    <Section id="tech" title="Tech">
      <div className="divide-y divide-[color:var(--border)]">
        {grouped.map((group, i) => (
          <div key={group.category} className="flex items-start gap-4 px-4 py-4 transition-colors hover:bg-[color:var(--hover-bg)]">
            <span className="font-mono-ui shrink-0 text-[12px] font-bold text-[color:var(--text-muted)]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1">
              <h3 className="mb-3 text-[13px] font-bold">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <Badge key={tech.name} text={tech.name} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
