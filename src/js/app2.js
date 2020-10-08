document.getElementById('bars').addEventListener("click", function(){

  var iconBars = document.getElementById('bars');
  var nav = document.getElementById('card-trigger');
  var faqToggle = document.getElementById('card-uno');
  var faqToggleDue = document.getElementById('card-due');
  var faqToggleTre = document.getElementById('card-tre');


  if (iconBars.classList.contains('rotate')) {
    iconBars.classList.remove('rotate');
    nav.classList.remove('visible');

    faqToggle.classList.remove('active');
    faqToggleDue.classList.remove('active');
    faqToggleTre.classList.remove('active');
    faqToggle.innerHTML= ""; // cancella in contenuto stampato
    faqToggleDue.innerHTML= ""; // cancella in contenuto stampato
    faqToggleTre.innerHTML= ""; // cancella in contenuto stampato

  } else {
    iconBars.classList.add('rotate');
    nav.classList.add('visible');

  }

});
