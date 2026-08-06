import { useEffect, useState } from 'react';
import Section from './Section';
import { GITHUB_USER } from '../data/site';

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const buildWeeks = (days) => {
  if (!days.length) return [];
  const first = new Date(days[0].date);
  const lead = first.getDay();
  const padded = [...Array(lead).fill(null), ...days];
  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
};

const getMonthLabels = (weeks) => {
  const labels = [];
  let lastMonth = null;
  weeks.forEach((week, i) => {
    const firstDay = week.find(Boolean);
    if (!firstDay) return;
    const month = new Date(firstDay.date).getMonth();
    if (month !== lastMonth) {
      labels.push({ weekIndex: i, label: MONTH_LABELS[month] });
      lastMonth = month;
    }
  });
  return labels;
};

const GithubActivity = () => {
  const [days, setDays] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (cancelled) return;
        setDays(data.contributions ?? []);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = days ? buildWeeks(days) : [];
  const monthLabels = weeks.length ? getMonthLabels(weeks) : [];
  const total = days ? days.reduce((sum, d) => sum + (d?.count ?? 0), 0) : 0;
  const cell = 11;
  const gap = 3;

  return (
    <Section id="activity" title="Activity">
      <div className="px-4 py-5">
        {error && (
          <p className="text-[13px] text-[color:var(--text-muted)]">
            Couldn&apos;t load contribution data right now.
          </p>
        )}

        {!error && !days && (
          <div className="flex h-[140px] items-center justify-center text-[13px] text-[color:var(--text-muted)]">
            Loading activity...
          </div>
        )}

        {!error && days && weeks.length > 0 && (
          <div className="no-scrollbar overflow-x-auto">
            <div style={{ width: weeks.length * (cell + gap), minWidth: '100%' }}>
              <div className="relative mb-1 h-4" style={{ marginLeft: 28 }}>
                {monthLabels.map(({ weekIndex, label }) => (
                  <span
                    key={weekIndex}
                    className="absolute text-[11px] text-[color:var(--text-muted)]"
                    style={{ left: weekIndex * (cell + gap) }}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex gap-[3px]">
                <div className="mr-1 flex flex-col justify-between py-[1px] text-[10px] text-[color:var(--text-muted)]" style={{ width: 24 }}>
                  <span>{DAY_LABELS[1]}</span>
                  <span>{DAY_LABELS[3]}</span>
                  <span>{DAY_LABELS[5]}</span>
                </div>
                <div className="flex gap-[3px]">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day, di) => (
                        <div
                          key={di}
                          title={day ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}` : undefined}
                          style={{
                            width: cell,
                            height: cell,
                            borderRadius: 2,
                            backgroundColor: day ? `var(--activity-${day.level})` : 'transparent',
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[12px] text-[color:var(--text-muted)]">
            {!error && days ? `${total.toLocaleString()} contributions in the last year` : ''}
          </span>

          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
          >
            <span className="underline-grow">Contributions on GitHub</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default GithubActivity;