$(document).ready(function(){new TimelineMax({repeat:-1}).set(".insta__gallery__img--1",{scale:1.2}).to(".insta__gallery__img--1",10,{scale:1}).to(".insta__gallery__img--1",10,{scale:1.2}),new TimelineMax({repeat:-1}).to(".insta__gallery__img--2",10,{scale:1.2}).to(".insta__gallery__img--2",10,{scale:1}),(new TimelineMax).set(".edition__text div",{y:"-100%",autoAlpha:0}).to(".edition__text div",1,{rotationX:"0deg",autoAlpha:1,y:"0%"});var e,t=$(window).width();e=t<=980?"0%":"-45%";var o=new TimelineMax;o.to(".intro__bgtext",1,{autoAlpha:0}).to(".layer",.5,{opacity:0}).to(".intro__shoe",1,{x:e},"-=.5").to(".intro__shoe",.5,{position:"absolute"});var a=new ScrollMagic.Controller,n=(new ScrollMagic.Scene({triggerElement:".details",triggerHook:1,duration:"100%",offset:150}).reverse(!0).setTween(o).addTo(a),new TimelineMax);n.set(".jordan__text",{y:"20%",opacity:0}).set(".jordan__img",{y:"120%",opacity:0}).to(".jordan__text",2,{y:"0%",ease:Power1.easeInOut,opacity:1}).to(".jordan__img",2,{y:"0%",ease:Power1.easeInOut,opacity:1},"-=2");a=new ScrollMagic.Controller,new ScrollMagic.Scene({triggerElement:".jordan",triggerHook:0,offset:-600}).reverse(!1).setTween(n).addTo(a);var i=new TimelineMax;i.set(".nike__text",{y:"50%",opacity:0}).set(".nike__img",{y:"120%",opacity:0}).to(".nike__text",2,{y:"0%",ease:Power1.easeInOut,opacity:1}).to(".nike__img",2,{y:"0%",ease:Power1.easeInOut,opacity:1},"-=2");a=new ScrollMagic.Controller,new ScrollMagic.Scene({triggerElement:".nike",triggerHook:0,offset:-600}).reverse(!1).setTween(i).addTo(a);var l=0,r=0;670<=t&&$(window).on("scroll",function(){$(".nav").toggleClass("nav__hide",$(window).scrollTop()>l),l=$(window).scrollTop(),$(".logo").toggleClass("nav__hide",$(window).scrollTop()>r),r=$(window).scrollTop()});var s=new TimelineMax;s.set(".next__img--origin",{scale:4,autoAlpha:0,y:"20%"}).set(".next__img--yellow",{autoAlpha:0,x:"-20%"}).set(".next__img--blue",{autoAlpha:0,x:"-60%"}).set(".next__img--multi",{autoAlpha:0,x:"30%"}).set(".next__img--grey",{autoAlpha:0,x:"70%"}).set(".next__title",{y:"-200%",autoAlpha:0}).to(".next__img--origin",1,{y:"-480%",scale:3,ease:Power1.easeIn,autoAlpha:1,opacity:.8}).to(".next__img--origin",1,{y:"-0%",scale:1,ease:Power1.easeInOut,opacity:1},"-=.8").to(".next__img--yellow",1,{x:"-50%",ease:Power1.easeInOut,autoAlpha:1}).to(".next__img--blue",1,{x:"-150%",ease:Power1.easeInOut,autoAlpha:1},"-=.5").to(".next__img--multi",1,{x:"83%",ease:Power1.easeInOut,autoAlpha:1},"-=1.5").to(".next__img--grey",1,{x:"137%",ease:Power1.easeInOut,autoAlpha:1},"-=1").to(".next__title",.7,{y:"5%",ease:Power1.easeInOut,autoAlpha:1},"-=.5").to(".next__title",.7,{y:"0%",ease:Power1.easeIn});a=new ScrollMagic.Controller,new ScrollMagic.Scene({triggerElement:".next",triggerHook:1,offset:450}).reverse(!1).setTween(s).addTo(a);var _=!1,g=new TimelineMax;g.to(".nav--small__toggle__1",.4,{rotation:135,position:"absolute",top:"1rem",ease:Power2.easeOut}).to(".nav--small__toggle__3",.4,{rotation:-135,position:"absolute",top:"1rem",ease:Power2.easeOut},"-=.4").to(".nav",.4,{x:0,ease:Power2.easeIn},"-=.6").stop();var c=new TimelineMax;c.to(".nav--small__toggle__2",.4,{opacity:0,scale:0}).stop(),$(".nav--small__toggle").on("click",function(){return _=_?(g.reverse(),c.reverse(),!1):(g.play(),c.play(),!0)})}),$(document).ready(function(){$(function(){var n=$(".count"),a=0;$(".count").on("reached",function(){if(0===a){var e=n.length,t=[];for(i=0;i<e;i++)t[i]=parseInt(n[i].innerHTML);function o(e,t,o){var a=e;setInterval(function(){a<t&&(a++,n[o].innerHTML=a)},15)}for(j=0;j<e;j++)o(0,t[j],j);return a=1}}),$(document).on("scroll",function(){$(".count").each(function(){var e=$(window).scrollTop(),t=$(this).position().top-e;0<=t&&t<550&&$(this).trigger("reached")})})})}),$(document).ready(function(){});