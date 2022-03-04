
import { trigger, state, style, transition, animate, keyframes, animation } from '@angular/animations';
import { translate } from '@angular/localize/src/utils';


export let fade1 = trigger('fade1', [
  state('void', style({transform : "translateX(-100px)"})),
  transition(':enter, :leave', [
    animate(1000, style({transform: "scale(1.1)"}))
  ])
])
export let fade = trigger('fade', [
  state('void', style({transform: "translateX(-100px)"})),
  transition(':enter, :leave', [
    animate(2000, style({transform: "scale(1.1)"}))
  ])
])


export let fade2 = trigger('fade2', [
    state('void', style({transform: "translateX(-100px)"})),
    transition(':enter, :leave', [
      animate(3000, style({transform: "scale(1.1)"}))
    ])
])



export let imageright = trigger('imageright',[
  state('void', style({transform:"translateX(400px)"})),
  transition(':enter, :leave', [
    animate(4000)
  ])
])
