export type NavData = {
  id: string;
  name: string;
  href: string;
};

export const NAV_DATA: Array<NavData> = [
  {
    id: 'home',
    name: 'about',
    href: '/',
  },
  {
    id: 'blog',
    name: 'blog',
    href: '/blog',
  },
  {
    id: 'projects',
    name: 'projects',
    href: '/projects',
  },
  {
    id: 'resume',
    name: 'resume',
    href: '/resume',
  },
];
