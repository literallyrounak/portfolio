export const GITHUB_USER = 'literallyrounak';

export const projects = [
  {
    slug: 'raft',
    org: GITHUB_USER,
    repo: 'raft',
    title: 'Raft',
    date: '2026-07-24',
    description: '',
    tech: ['go', 'tcp', 'cli'],
    github: 'https://github.com/literallyrounak/raft',
    live: 'https://github.com/literallyrounak/raft',
    status: 'in-progress',
    content: [
      'Raft is a small CLI that moves files straight from one machine to another over TCP.',
      'One sender, one receiver, one connection. No cloud upload, no accounts, no arbitrary size limits. If the connection drops, you can resume without retransferring what\’s already been verified.'
    ],
  },
  {
    slug: 'chatot',
    org: GITHUB_USER,
    repo: 'chatot',
    title: 'Chatot',
    date: '2025-06-26',
    description: '',
    tech: ['react', 'node', 'express', 'mongodb', 'socket.io'],
    github: 'https://github.com/literallyrounak/chatot',
    live: 'https://chatot-4u65.onrender.com/',
    status: 'live',
    content: [
      'Chatot is a real-time chat application built to explore WebSocket-based communication end to end.',
      'It handles authenticated sessions, persistent message history in MongoDB, and live delivery through Socket.io, with a React frontend that updates instantly as messages arrive.',
    ],
  },
  {
    slug: 'hoopa',
    org: GITHUB_USER,
    repo: 'hoopa',
    title: 'Hoopa',
    date: '2026-07-22',
    description: '',
    tech: ['react', 'node', 'express', 'mongodb'],
    github: 'https://github.com/literallyrounak/hoopa',
    live: 'https://hoopa-3542.onrender.com/',
    status: 'live',
    content: [
      'Hoopa shortens long URLs into memorable links, with support for custom aliases chosen by the user.',
      'Every redirect is logged, powering a simple analytics dashboard that shows click counts over time for each link.',
    ],
  },
  {
    slug: 'slowpoke',
    org: GITHUB_USER,
    repo: 'slowpoke',
    title: 'Slowpoke',
    date: '2025-10-29',
    description: '',
    tech: ['react', 'javascript'],
    github: 'https://github.com/literallyrounak/slowpoke',
    live: 'https://literallyrounak.github.io/slowpoke',
    status: 'live',
    content: [
      'Slowpoke is a small, deliberately quiet news reader that pulls headlines from NewsAPI and gets out of the way.',
      'No infinite scroll, no notifications — just a clean list of what is happening, organized by category.',
    ],
  },
  {
    slug: 'espeon',
    org: GITHUB_USER,
    repo: 'espeon',
    title: 'Espeon',
    date: '2026-01-29',
    description: '',
    tech: ['react', 'javascript', 'python'],
    github: 'https://github.com/literallyrounak/espeon',
    live: 'https://literallyrounak.github.io/espeon',
    status: 'live',
    content: [
      'Espeon organizes LeetCode premium question sets by company, making interview prep easier to structure.',
      'A Python script processes the raw question data, and the React frontend renders it as a searchable, filterable table.',
    ],
  },
  {
    slug: 'filmbase',
    org: GITHUB_USER,
    repo: 'filmbase',
    title: 'Filmbase',
    date: '2025-10-09',
    description: '',
    tech: ['react', 'javascript', 'css'],
    github: 'https://github.com/literallyrounak/filmbase',
    live: 'https://literallyrounak.github.io/filmbase',
    status: 'live',
    content: [
      'Filmbase is a search-first movie lookup tool built on the Open Movie Database API.',
      'It was one of the first projects used to practice consuming a third-party API cleanly from React components.',
    ],
  },
];

export const featuredSlugs = ['raft', 'chatot'];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
