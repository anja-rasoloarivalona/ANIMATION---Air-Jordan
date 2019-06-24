$( document ).ready(function(){

$(function() {
    var counters = $(".count");
    var stop = 0;

    $(".count").on("reached", function() {
      if (stop === 0) {
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
          }, 15);
        };

        for (j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);
        }

        return (stop = 1);
      }
    });

    $(document).on("scroll", function() {
      $(".count").each(function() {
        var wt = $(window).scrollTop();
        var at = $(this).position().top;
        var dt = at - wt;
        if (dt >= 0 && dt < 550) $(this).trigger("reached");
      });
    });
  });

})