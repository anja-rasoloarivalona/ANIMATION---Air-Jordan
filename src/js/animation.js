$(document).ready(function() {
  /*-----------------INSTA---------------*/

  var gallery1 = new TimelineMax({ repeat: -1 });
  gallery1
    .set(".insta__gallery__img--1", { scale: 1.2 })
    .to(".insta__gallery__img--1", 10, { scale: 1 })
    .to(".insta__gallery__img--1", 10, { scale: 1.2 });

  var gallery2 = new TimelineMax({ repeat: -1 });
  gallery2
    .to(".insta__gallery__img--2", 10, { scale: 1.2 })
    .to(".insta__gallery__img--2", 10, { scale: 1 });

  /*----------------EDITION-------------------*/

  var edition = new TimelineMax();
  edition
    .set(".edition__text div", { y: "-100%", autoAlpha: 0 })
    .to(".edition__text div", 1, { rotationX: "0deg", autoAlpha: 1, y: "0%" });


  /*-------------SCROLLING SHOE AND BG---------------------*/

  var a = new TimelineMax();
    a.to(".intro__bgtext", 1, { autoAlpha: 0 })
      .to(".layer", 0.5, { opacity: 0 })
      .to(".intro__shoe", 1, { x: "-45%" }, "-=.5")
      .to(".intro__shoe", 0.5, { position: "absolute" });

    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".details",
      triggerHook: 1,
      duration: "100%",
      offset: 150
    })
      .reverse(true)
      .setTween(a)
      .addTo(controller);


 






  var scrolljordan = new TimelineMax();
  scrolljordan
    .set(".jordan__text", { y: "20%", opacity: 0 })
    .set(".jordan__img", { y: "120%", opacity: 0 })
    .to(".jordan__text", 2, { y: "0%", ease: Power1.easeInOut, opacity: 1 })
    .to(
      ".jordan__img",
      2,
      { y: "0%", ease: Power1.easeInOut, opacity: 1 },
      "-=2"
    );
  var controller = new ScrollMagic.Controller();
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".jordan",
    triggerHook: 0,
    offset: -600
  })
    .reverse(false)
    .setTween(scrolljordan)
    //.addIndicators()
    .addTo(controller);


  var scrollnike = new TimelineMax();
  scrollnike
    .set(".nike__text", { y: "50%", opacity: 0 })
    .set(".nike__img", { y: "120%", opacity: 0 })
    .to(".nike__text", 2, { y: "0%", ease: Power1.easeInOut, opacity: 1 })
    .to(
      ".nike__img",
      2,
      { y: "0%", ease: Power1.easeInOut, opacity: 1 },
      "-=2"
    );
  var controller = new ScrollMagic.Controller();
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".nike",
    triggerHook: 0,
    offset: -600
  })
    .reverse(false)
    .setTween(scrollnike)
    //.addIndicators()
    .addTo(controller);







  var zero = 0;
  $(window).on("scroll", function() {
    $(".nav").toggleClass("nav__hide", $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });

  var next = new TimelineMax();
  next;
  /*.set('.next__img--origin', { scale: 4, autoAlpha: 0, y: '20%'})
  .set('.next__img--yellow', {autoAlpha: 0, x: '-20%'})
  .set('.next__img--blue', {autoAlpha: 0, x: '-60%'})
  .set('.next__img--multi', {autoAlpha: 0, x: '30%'})
  .set('.next__img--grey', {autoAlpha: 0, x: '70%'})
  .set('.next__title', {y: '-200%', autoAlpha: 0})

 
  .to('.next__img--origin', 1, {y: '-480%', scale: 3, ease:Power1.easeIn, autoAlpha: 1, opacity: .8})
  .to('.next__img--origin', 1, {y: '-0%', scale: 1, ease:Power1.easeInOut, opacity: 1},'-=.8')

  .to('.next__img--yellow', 1, {x: '-50%', ease:Power1.easeInOut, autoAlpha: 1})
  .to('.next__img--blue', 1, {x: '-150%', ease:Power1.easeInOut, autoAlpha: 1}, '-=.5')
  .to('.next__img--multi', 1, {x: '83%', ease:Power1.easeInOut, autoAlpha: 1}, '-=1.5')
  .to('.next__img--grey', 1, {x: '137%', ease:Power1.easeInOut, autoAlpha: 1}, '-=1')
  .to('.next__title', .7, {y: '5%', ease:Power1.easeInOut, autoAlpha: 1},'-=.5')
  .to('.next__title', .7, {y: '0%', ease:Power1.easeIn})

 
*/

  var controller = new ScrollMagic.Controller();
  var scene4 = new ScrollMagic.Scene({
    triggerElement: ".next",
    triggerHook: 1,
    offset: 450
  })
    .reverse(false)
    .setTween(next)
    // .addIndicators()
    .addTo(controller);

});
