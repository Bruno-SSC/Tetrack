import { nav_items } from "./interfaces";

export const nav_elements: nav_items[] = [
    {
      title: 'features',
      options: [
        {
          name: 'Todo List',
          icon_path: 'icon-todo.svg',
        },
        {
          name: 'Calendar',
          icon_path: 'icon-calendar.svg',
        },
        {
          name: 'Reminders',
          icon_path: 'icon-reminders.svg',
        },
        {
          name: 'Planning',
          icon_path: 'icon-planning.svg',
        },
      ],
    },
    {
      title: 'company',
      options: [
        {
          name: 'History',
        },
        {
          name: 'Our Team',
        },
        {
          name: 'Blog',
        },
      ],
    },
    {
      title: 'career',
    },
    {
      title: 'about',
    },
  ];