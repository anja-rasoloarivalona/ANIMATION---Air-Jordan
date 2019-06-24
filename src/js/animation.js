$( document ).ready(function() {

 $(window).on('load', function(){        
    var loader = new TimelineMax({repeat:0});  
     loader
 .set('.nav', {opacity: 0}) 
        .set('.intro__shoe', {scale: 0, autoAlpha: 0}) 
        .to('.loader__bar__inner', 3, {width: '100.5%', ease:Power1.easeInOut},'+=.5')
         .to('.loader__bar__indicator', 3, {x: '28vw', ease:Power1.easeInOut},'-=3') 
         .to('.loader__bar__indicator', .5, {scale: 0}, '-=.5')
         .to('.loader__bar', .5, {width: '0%', autoAlpha: 0})
         .to('.loader', 2, {ease:Power1.easeInOut, scale: '100'}) 
         .to('.loader', 1, {autoAlpha: 0}, '-=1') 
         .to('.intro__bgtext', 1, {zIndex: 99, color:'rgba(51, 1, 11, 0.153)'}, '-=1') 
         .to('.intro__shoe', 2, {ease:Power1.easeInOut, scale: 1, autoAlpha: 1}, '-=1')
         .to('body', .4, {overflowY: 'scroll'})
         .to('.nav', .5, { opacity: 1, ease:Power1.easeInOut},'-=1.5')
         .to('.intro__brand', .5, {opacity: 1, ease:Power1.easeInOut},'-=1')
    
         
     

    })

   var gallery1 = new TimelineMax({repeat:-1});
    //set d
    gallery1
    .set('.insta__gallery__img--1', {scale: 1.2})
    .to('.insta__gallery__img--1', 10, {scale: 1})
    .to('.insta__gallery__img--1', 10, {scale: 1.2})

    
    var gallery2 = new TimelineMax({repeat:-1});
    gallery2
    .to('.insta__gallery__img--2', 10, {scale: 1.2})
    .to('.insta__gallery__img--2', 10, {scale: 1})

    var edition = new TimelineMax();
    edition
    .set('.edition__text div', {y: '-100%', autoAlpha: 0})
    .to('.edition__text div', 1, {rotationX: '0deg',autoAlpha: 1, y:'0%'})

    



      var a = new TimelineMax();
      //set d
      a
      .to('.intro__bgtext', 1, {autoAlpha: 0})
      .to('.layer', .5, {opacity: 0})
      .to('.intro__shoe', 1, {x: '-45%'}, '-=.5')
      .to('.intro__shoe', .5, {position: 'absolute'})
  
      var controller = new ScrollMagic.Controller();      
      var scene1 = new ScrollMagic.Scene({
          triggerElement: '.details',
          triggerHook: 1,
          duration: "100%",
          offset: 150
          
      })
      .reverse(true)
      .setTween(a)
   //   .addIndicators()
      .addTo(controller);

   
    
/*

    //$(".count").position().top)
      var scroll = $(window).scrollTop(); 
      let stop = 0;

      $(window).on('scroll', function() { 
    
        console.log(scroll);
        var counters = $(".count");

        if(scroll >= 2900  && stop == 0) {
         
          var countersQuantity = counters.length;
          var counter = [];
        
          for (i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
          }
        
          var count = function(start, value, id) {
            var localStart = start;
            setInterval(function() {
              if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
              }
            }, 70);
          }
        
          for (j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
          
          }

          stop = 1;

         
        } 
      })
 */
      
     

$(function() {
  var counters = $(".count");
  var stop = 0;

    $('.count').on('reached', function() {

      if(stop === 0) {
        var countersQuantity = counters.length;
        var counter = [];
      
        for(i = 0; i < countersQuantity; i++) {
          counter[i] = parseInt(counters[i].innerHTML);
        }
      
        var count = function(start, value, id) {
          var localStart = start;
          setInterval(function() {
            if (localStart < value) {
              localStart++;
              counters[id].innerHTML = localStart;
            }
          }, 15);
        }
      
        for (j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);     
        }

        return stop = 1;
      }
      
  });

    $(document).on('scroll', function() {
        $('.count').each(function() {
            var wt = $(window).scrollTop();
            var at = $(this).position().top;
            var dt = at - wt;
            if( dt >= 0 && dt < 550)
                $(this).trigger('reached');
        });
    });
})

    
var scrolljordan = new TimelineMax();
//set d
scrolljordan 
.set('.jordan__text', {y: '20%', opacity: 0})
.set('.jordan__img', {y: '120%' , opacity: 0})
.to('.jordan__text', 2, {y: '0%',ease:Power1.easeInOut , opacity: 1})
.to('.jordan__img', 2, {y: '0%', ease:Power1.easeInOut, opacity: 1}, '-=2')

var controller = new ScrollMagic.Controller();      
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.jordan',
    triggerHook: 0,
    offset: -600
    
})
.reverse(false)
.setTween(scrolljordan )
//.addIndicators()
.addTo(controller);


var scrollnike= new TimelineMax();
//set d
scrollnike
.set('.nike__text', {y: '50%', opacity: 0})
.set('.nike__img', {y: '120%' , opacity: 0})
.to('.nike__text', 2, {y: '0%',ease:Power1.easeInOut , opacity: 1})
.to('.nike__img', 2, {y: '0%', ease:Power1.easeInOut, opacity: 1}, '-=2')

var controller = new ScrollMagic.Controller();      
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.nike',
    triggerHook: 0,
    offset: -600
    
})
.reverse(false)
.setTween(scrollnike)
//.addIndicators()
.addTo(controller);





   
  var zero = 0;
  $(window).on('scroll', function() {
    $('.nav').toggleClass('nav__hide', $(window).scrollTop() > zero);
    zero = $(window).scrollTop();


  })


  var next = new TimelineMax();
  //set d
  next
  .set('.next__img--origin', { scale: 4, autoAlpha: 0, y: '20%'})
  .set('.next__img--yellow', {autoAlpha: 0, x: '-20%'})
  .set('.next__img--blue', {autoAlpha: 0, x: '-60%'})
  .set('.next__img--multi', {autoAlpha: 0, x: '30%'})
  .set('.next__img--grey', {autoAlpha: 0, x: '70%'})
  .set('.next__text div', {y: '-200%', autoAlpha: 0})

  
  .to('.next__img--origin', 1, {y: '-480%', scale: 3, ease:Power1.easeIn, autoAlpha: 1, opacity: .8})
  .to('.next__img--origin', 1, {y: '-0%', scale: 1, ease:Power1.easeInOut, opacity: 1},'-=.8')

  .to('.next__img--yellow', 1, {x: '-50%', ease:Power1.easeInOut, autoAlpha: 1})
  .to('.next__img--blue', 1, {x: '-150%', ease:Power1.easeInOut, autoAlpha: 1}, '-=.5')
  .to('.next__img--multi', 1, {x: '83%', ease:Power1.easeInOut, autoAlpha: 1}, '-=1.5')
  .to('.next__img--grey', 1, {x: '137%', ease:Power1.easeInOut, autoAlpha: 1}, '-=1')
  .to('.next__text div', .7, {y: '5%', ease:Power1.easeInOut, autoAlpha: 1},'-=.5')
  .to('.next__text div', .7, {y: '0%', ease:Power1.easeIn})

 





  var controller = new ScrollMagic.Controller();      
  var scene4 = new ScrollMagic.Scene({
      triggerElement: '.next',
      triggerHook: 1,
      offset: 450
      
  })
  .reverse(false)
  .setTween(next)
 // .addIndicators()
  .addTo(controller);
/*
  var current = 'yellow';

    $('.nextGallery__control__item--blue').on('click', function() {
      var next = new TimelineMax();

      if(current !== 'blue') {
        next
        .to('.nextGallery__img--blue', .5, { autoAlpha: 1, y: '0%'})
        .to('.nextGallery__img--' + current , .5, {y: '100%'}, '-=.5')
        .to('.nextGallery__img--' + current , .1, {y: '-100%', opacity: '0'});
  
        return current = 'blue';  
      }
    

    })

    $('.nextGallery__control__item--yellow').on('click', function() {
      var next = new TimelineMax();

      if(current !== 'yellow') {

        next
        .to('.nextGallery__img--yellow', .5, { autoAlpha: 1, y: '0%'})
        .to('.nextGallery__img--' + current , .5, {y: '100%'}, '-=.5')
        .to('.nextGallery__img--' + current , .1, {y: '-100%', opacity: '0'});

        return current = 'yellow';   
      }
     
      

      
    })*/

});
