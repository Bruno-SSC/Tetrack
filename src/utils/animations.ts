import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

// ? Effects

const shrink = [animate('300ms ease-in'), style({ height: 0 })];

const grow = [
  style({ height: '0px' }),
  animate('300ms ease-in'),
  style({ height: '*' }),
];

const move_in = [
  style({ transform: 'translateX(100vw)' }),
  animate('600ms ease-in'),
  style({ transform: 'translateX(0vh)' }),
];

const move_out = [
  animate('600ms ease-in'),
  style({ transform: 'translateX(100vw)' }),
];

const fade_in = [
  style({ opacity: 0 }),
  animate('600ms ease'),
  style({ opacity: 1 }),
];

const fade_out = [animate('600ms ease'), style({ opacity: 0 })];

const ladder_effect = [
  style({ opacity: 0, transform: 'translateY(-100px)' }),
  stagger(30, [
    animate(
      '1000ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({ opacity: 1, transform: 'none' })
    ),
  ]),
];

// ? Animations

export const main_anim = trigger('main_anim', [
  transition(':enter', [query('.main > *', ladder_effect)]),
]);

export const header_anim = trigger('header_anim', [
  transition(':enter', [query('.header > *', ladder_effect)]),
]);

export const item_fade = trigger('item_fade', [
  transition(':enter', fade_in),
  transition(':leave', fade_out),
]);

export const resize = trigger('resize', [
  transition(':enter', [
    query('.navigation__item--hidden', style({ opacity: 0 })),
    query(':self', grow),
    query('.navigation__item', [
      stagger('100ms', [animate('600ms ease'), style({ opacity: 1 })]),
    ]),
  ]),
  transition(':leave', [
    query('.navigation__item', [stagger('-100ms', fade_out)]),
    query(':self', shrink),
  ]),
]);

export const menu_slide = trigger('menu_slide', [
  transition(':enter', move_in),
  transition(':leave', move_out),
]);

export const btn_fade = trigger('btn_fade', [
  transition(':enter', fade_in),
  transition(':leave', fade_out),
]);
