import { activity_style } from './interfaces';

const activities_colors = {
  blue: 'hsl(246, 80%, 60%)',
  light_red: 'hsl(15, 100%, 70%)',
  soft_blue: 'hsl(195, 74%, 62%)',
  lime_green: 'hsl(145, 58%, 55%)',
  pink: 'hsl(348, 100%, 68%)',
  violet: 'hsl(264, 64%, 52%)',
  soft_orange: 'hsl(43, 84%, 65%)',
};

export const style_data: activity_style[] = [
  { ID: 'work', icon: 'icon-work.svg', color: activities_colors.light_red },
  { ID: 'play', icon: 'icon-play.svg', color: activities_colors.soft_blue },
  { ID: 'study', icon: 'icon-study.svg', color: activities_colors.pink },
  {
    ID: 'exercise',
    icon: 'icon-exercise.svg',
    color: activities_colors.lime_green,
  },
  {
    ID: 'self_care',
    icon: 'icon-self-care.svg',
    color: activities_colors.soft_orange,
  },
  { ID: 'social', icon: 'icon-social.svg', color: activities_colors.violet },
];

export const activities_data = [
  {
    ID: 'work',
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    ID: 'play',
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    ID: 'study',
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    ID: 'exercise',
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    ID: 'social',
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    ID: 'self_care',
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
