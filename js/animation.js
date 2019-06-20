$( document ).ready(function() {

    $(window).on('load', function(){        
        var t1 = new TimelineMax({repeat:0});  
        t1
          .to('.loader__bar__inner', 3, {width: '100%', ease:Power1.easeInOut},'+=.5') 
          .to('.loader__bar', .5, {width: '0%', autoAlpha: 0})
          .to('.loader', 1, {scale: 0, x: '-100%', y:'100%'})

    })

    


 



    

   

});
