import {
  trigger, transition, style, animate, query, group
} from '@angular/animations';

export const cubeTransition = trigger('routeAnim', [
  transition('* => *', [
    query(':enter, :leave', [
      style({ position: 'absolute', inset: 0, backfaceVisibility: 'hidden' })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('600ms cubic-bezier(0.86,0,0.07,1)', style({
          opacity: 0,
          transform: 'perspective(1200px) rotateY(-8deg) translateX(-6%) scale(0.97)'
        }))
      ], { optional: true }),
      query(':enter', [
        style({
          opacity: 0,
          transform: 'perspective(1200px) rotateY(8deg) translateX(6%) scale(0.97)'
        }),
        animate('650ms 100ms cubic-bezier(0.86,0,0.07,1)', style({
          opacity: 1,
          transform: 'perspective(1200px) rotateY(0) translateX(0) scale(1)'
        }))
      ], { optional: true })
    ])
  ])
]);
