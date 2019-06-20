$( document ).ready(function() {

 $(window).on('load', function(){        
        var loader = new TimelineMax({repeat:0});  
        loader
          .to('.loader__bar__inner', 3, {width: '100%', ease:Power1.easeInOut},'+=.5') 
          .to('.loader__bar', .5, {width: '0%', autoAlpha: 0})
          .to('.loader', 1, {scale: 0, x: '-100%', y:'100%', autoAlpha: 0})
         

    })


    



      var a = new TimelineMax();
      //set d
      a
      .to('.main__bgtext', 1, {autoAlpha: 0})
      .to('.layer', .5, {opacity: 0})
      .to('.main__shoe', 1, {x: '-45%'}, '-=.5')
      .to('.main__shoe', .5, {position: 'absolute'})
      

      
      // The animation above is triggered automatically
      //But if you add this then no
      
  
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


    
      $('.logo').on('click',function() {

        var u = new TimelineMax({repeat:0});  
        u
          .to('.main__shoe', 1.2, {scale: 1.4})
      })



     

      $('.details__control__item--2').on('click',function() {

        var u = new TimelineMax({repeat:0});  
        u
          .to('.main__shoe', 1, {y: '10%', x: '-10%'}) 
      })
   
  


      var counters = $(".count");
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
        }, 4);
      }
    
      for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
      }
    

   

});
