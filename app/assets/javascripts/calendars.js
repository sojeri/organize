// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  // page is now ready, initialize the calendar...
  // console.log("page is ready. initializing the calendar...");

  $('#calendar').fullCalendar({
    // put your options and callbacks here
    header: { center: 'month,agendaWeek,agendaDay' }, // buttons for switching between views

    views: {
        month: { // name of view
            titleFormat: 'YYYY, MM, DD'
            // other view-specific options here
        }
    },

    dayClick: function() {
      alert('a day has been clicked!');
    },

    height: "auto"

  })
});
