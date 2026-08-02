import { useEffect, useState } from 'react';

const cache = new Map();

export function useRepoStars(org, repo) {
  const key = `${org}/${repo}`;
  const [stars, setStars] = useState(cache.get(key) ?? null);

  useEffect(() => {
    if (cache.has(key)) return;
    let cancelled = false;

    fetch(`https://api.github.com/repos/${org}/${repo}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        cache.set(key, data.stargazers_count ?? 0);
        setStars(data.stargazers_count ?? 0);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [key, org, repo]);

  return stars;
}
