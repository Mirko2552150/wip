document.getElementById('bars').addEventListener("click", function(){

  var iconBars = document.getElementById('bars');
  var nav = document.getElementById('card-trigger');

  if (iconBars.classList.contains('rotate')) {
    iconBars.classList.remove('rotate');
    nav.classList.remove('visible');

  } else {
    iconBars.classList.add('rotate');
    nav.classList.add('visible');

  }

});
