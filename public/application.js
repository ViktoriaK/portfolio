//Methode 1
//alert('hallo welt');

//Methode 2
//console.debug('hallo welt');

$(document).ready(function(){
  console.debug("laeuft");
  var $actionLink = $('.js-clickable');
  var $target = $('.js-target');

  $actionLink.on('click', function(){
    // $target.toggle();
    $target.toggleClass("rot");
  });
});
