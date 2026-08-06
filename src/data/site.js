import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const NAME = 'Rounak Kumar Gupta';
export const GITHUB_USER = 'literallyrounak';

export const socials = [
  { label: 'GitHub', href: 'https://github.com/literallyrounak', icon: Github, footer: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/literallyrounak', icon: Linkedin, footer: true },
  { label: 'Twitter', href: 'https://twitter.com/literallyrounak', icon: Twitter, footer: true },
  { label: 'Mail', href: 'mailto:literallyrounak.dev@gmail.com', icon: Mail, footer: true },
];

export const techStack = [
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Redux', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Svelte', category: 'Frontend' },

  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Socket.io', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'GoLang', category: 'Backend' },

  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
];

export const aboutParagraphs = [
  'Hey, I\'m a second year CS undergraduate.',
  'I spend most of my time building full-stack applications and the backend systems behind them. Right now, I\'m working on Raft, a peer-to-peer file-sharing application. Before that, I built Chatot, a real-time chat application with authentication, media sharing, and all the usual moving parts.',
  'I primarily work with Node.js and React, though lately I\'ve been spending a lot of time with Go. I enjoy writing simple, reliable software, the kind that\'s easy for other people (and my future self) to understand, maintain, and build on.',
  'Outside of coding I watch UFC, listen to music, and read. Feel free to reach out if you want to talk about projects, backend systems, or just say hi.',
];
