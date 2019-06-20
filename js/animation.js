$( document ).ready(function() {

  /*  $(window).on('load', function(){        
        var t1 = new TimelineMax({repeat:0});  
        t1
          .to('.loader__bar__inner', 3, {width: '100%', ease:Power1.easeInOut},'+=.5') 
          .to('.loader__bar', .5, {width: '0%', autoAlpha: 0})
          .to('.loader', 1, {scale: 0, x: '-100%', y:'100%', autoAlpha: 0})

    })*/


    var t1 = new TimelineMax({repeat:0});  
    t1
      .to('.bg', 20, {scale: 2, ease:Power1.easeInOut}) 
      .to('.bg', 20, {scale: 1, ease:Power1.easeInOut}) 


     var t2 = new TimelineMax({repeat:0});  
    t2
      .to('.main__add--1', 2, { autoAlpha: 0 , ease:Power1.easeInOut}, '+=2') 
      .to('.main__add--2', 2,  { autoAlpha: 0, ease:Power1.easeInOut}, '-=2') 
    


 



    

   

});
