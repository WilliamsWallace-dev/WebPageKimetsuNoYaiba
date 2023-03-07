document.addEventListener('DOMContentLoaded',() => {
    
 let tl = new TimelineMax();

 tl.fromTo('.loading', 1 ,
 {
    width: '100%',
    opacity : 1
 },
 {
    width: '0%',
    opacity : 1,
    ease : Expo.easeInOut,
 },7)

.fromTo('.bg-main',2,
{
    width : '0%',
    opacity : 0,
},
{
    width : '100%',
    opacity : 1,
    ease : Expo.easeInOut,
}, '-=1.35')

.fromTo('.nav-link',0.7,
{
    opacity : 0,
    y : -50,
},
{
    opacity : 1,
    y : 0,
    ease : Expo.easeInOut,
}, '-=.5')

.fromTo('.nav-networks',0.7,
{
    opacity : 0,
    y : -50,
},
{
    opacity : 1,
    y : 0,
    ease : Expo.easeInOut,
}, '-=.5')

.fromTo('.logo-hero',0.7,
{
    opacity : 0,
    y : -50,
},
{
    opacity : 1,
    y : 0,
    ease : Expo.easeInOut,
}, '-=.5')

.fromTo('.item-1',0.7,
{
    opacity : 0,
    y : -50,
},
{
    opacity : 1,
    y : 0,
    ease : Expo.easeInOut,
}, '-=.5')

.fromTo('.item-2',0.7,
{
    opacity : 0,
    y : -50,
},
{
    opacity : 1,
    y : 0,
    ease : Expo.easeInOut,
}, '-=.5')

.fromTo('.item-3',0.7,
{
    opacity : 0,
    y : -50,
},
{
    opacity : 1,
    y : 0,
    ease : Expo.easeInOut,
}, '-=.5')

.fromTo('.icon-netflix',0.7,
{
    opacity : 0,
},
{
    opacity : 1,
    ease : Expo.easeInOut,
}, '-=.5')

.fromTo('.character-hero',0.7,
{
    opacity : 0,
},
{
    opacity : 1,
    ease : Expo.easeInOut,
}, '-=.5')


})
