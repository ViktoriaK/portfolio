$(document).ready(function(){

  var waypoint = new Waypoint({
    element: document.getElementById('project1'),
    handler: function(direction) {
      $('#project1').addClass('animated slideInUp');
    },
    offset: "100%"
  })

  var waypoint2 = new Waypoint({
    element: document.getElementById('project2'),
    handler: function(direction) {
      $('#project2').addClass('animated slideInUp');
    },
    offset: "100%"
  })

  var waypoint3 = new Waypoint({
    element: document.getElementById('project3'),
    handler: function(direction) {
      $('#project3').addClass('animated slideInUp');
    },
    offset: "100%"
  })

});
