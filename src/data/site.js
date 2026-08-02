import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const NAME = 'Rounak Kumar Gupta';
export const GITHUB_USER = 'literallyrounak';

export const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Pics', href: '/pics' },
];


export const socials = [
  { label: 'GitHub', href: 'https://github.com/literallyrounak', icon: Github, footer: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/literallyrounak', icon: Linkedin, footer: true },
  { label: 'Twitter', href: 'https://twitter.com/literallyrounak', icon: Twitter, footer: true },
  { label: 'Mail', href: 'mailto:rounak.contact@example.com', icon: Mail, footer: true },
];

export const techStack = [
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Redux', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Socket.io', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Linux', category: 'Tools' },
];

export const aboutParagraphs = [
  'Hey, I\'m a Computer Science student who spends most of my time building full-stack apps and digging into backend systems.',
  'Right now I\'m working on Raft, a peer-to-peer file sharing app, and previously built Chatot, a full-stack chat application with authentication, media support, and the usual real-time bits. I mostly write Node.js backends and React frontends, but these days I\'m spending a lot of time with Go.',
  'I like keeping things simple and reliable - code that other people (including future me) can actually understand and work with.',
  'Outside of coding I enjoy watching UFC, listening to music and reading books. Feel free to reach out if you want to talk about projects, backend stuff, or just say hi.'
];
