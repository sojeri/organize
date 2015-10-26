// when document ready, check for event divs inside each date
$(document).ready(function() {
  var visibleDays = $('.day');
  console.log(visibleDays.length);

  // looping through the days
  for (var i = 0; i < visibleDays.length; i++) {
    var day = visibleDays[i];
    var taCount = $(day).children().length;

    // for any date after today, if < 4 TAs put an empty battery icon in
    if (taCount < 1) {
      $(day).addClass('vacancy');
      var icon = $('<div class="icon"><i class="fa fa-battery-quarter"></i></div>');
      $(day).append(icon);
    } else {
      $(day).addClass('full');
      var icon = $('<div class="icon"><i class="fa fa-battery-full"></i></div>');
      $(day).append(icon);
    }
  }
})
