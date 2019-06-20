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
          }, 10);
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
            console.log(dt);
            if( dt >= 0 && dt < 550)
                $(this).trigger('reached');
        });
    });
})

    

   

});
