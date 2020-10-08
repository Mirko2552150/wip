document.getElementById('button').addEventListener("click", function(){

  // al click border 1px solid red per 1 sec
  // console.log(this);
  var border = this;
  // console.log(border);

  border.style.backgroundColor = 'rgba(227,164,48,.5)';

  setTimeout(function(){
    border.style.backgroundColor = '';

  }, 100);

  var dataSku = document.querySelector('.content').getAttribute('data-sku');
  // console.log(dataSku);
  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSku)
  .then(response => response.json())
  .then(response => {
    // console.log(response);
    var title = response.title;
    var body = response.body;
    var id = response.id;
    var faqToggle = document.getElementById('card-uno');
    var faqToggleDue = document.getElementById('card-due');
    var faqToggleTre = document.getElementById('card-tre');

    if (faqToggle.classList.contains('active')) { // se card si vede
      faqToggle.classList.remove('active'); // al click nascondilo
      faqToggle.innerHTML= ""; // cancella in contenuto stampato

    } else {

      if (faqToggleDue.classList.contains('active') || faqToggleTre.classList.contains('active')) {
        faqToggleDue.classList.remove('active');
        faqToggleTre.classList.remove('active');
        faqToggleDue.innerHTML= ""; // cancella in contenuto stampato
        faqToggleTre.innerHTML= ""; // cancella in contenuto stampato
      }

      faqToggle.classList.remove('active'); // altrimenti, se non si vede
      faqToggle.classList.add('active'); // rendilo visibile e stampa il testo
      setTimeout(function(){ faqToggle.innerHTML= '<h1>' + 'POST' + " " + id + '</h1>' + '<br>' + '<h2>' + title + '</h2>' + '<br>' + '<p>' + body + '</p>'; }, 300);
    }
   }
  )
});

document.getElementById('button-due').addEventListener("click", function(){

  // al click border 1px solid red per 1 sec
  // console.log(this);
  var border = this;
  // console.log(border);

  border.style.backgroundColor = 'rgba(227,164,48,.5)';

  setTimeout(function(){
    border.style.backgroundColor = '';

  }, 100);

  var dataSkuDue = document.querySelector('.content-due').getAttribute('data-sku');
  // console.log(dataSkuDue);

  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSkuDue)
  .then(response => response.json())
  .then(response => {
    // console.log(response);
    // console.log(this);
    var title = response.title;
    var body = response.body;
    var id = response.id;
    var faqToggle = document.getElementById('card-uno');
    var faqToggleDue = document.getElementById('card-due');
    var faqToggleTre = document.getElementById('card-tre');

    if (faqToggleDue.classList.contains('active')) {

      faqToggleDue.classList.remove('active');
      faqToggleDue.innerHTML= "";

    } else {

      if (faqToggle.classList.contains('active') || faqToggleTre.classList.contains('active')) {
        faqToggle.classList.remove('active');
        faqToggleTre.classList.remove('active');
        faqToggle.innerHTML= ""; // cancella in contenuto stampato
        faqToggleTre.innerHTML= ""; // cancella in contenuto stampato
      }

      faqToggleDue.classList.add('active');
      setTimeout(function(){ faqToggleDue.innerHTML= '<h1>' + 'POST' + " " + id + '</h1>' + '<br>' + '<h2>' + title + '</h2>' + '<br>' + '<p>' + body + '</p>'; }, 300);

    }
   }
  )
});

document.getElementById('button-tre').addEventListener("click", function(){

  // al click border 1px solid red per 1 sec
  // console.log(this);
  var border = this;
  // console.log(border);

  border.style.backgroundColor = 'rgba(227,164,48,.5)';

  setTimeout(function(){


    border.style.backgroundColor = '';


  }, 100);

  var dataSkuTre = document.querySelector('.content-tre').getAttribute('data-sku');
  // console.log(dataSkuTre);

  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSkuTre)
  .then(response => response.json())
  .then(response => {
      // console.log(response);
      var title = response.title;
      var body = response.body;
      var id = response.id;
      var faqToggle = document.getElementById('card-uno');
      var faqToggleDue = document.getElementById('card-due');
      var faqToggleTre = document.getElementById('card-tre');

      if (faqToggleTre.classList.contains('active')) {
        faqToggleTre.classList.remove('active');
        faqToggleTre.innerHTML= "";

      } else {

        if (faqToggle.classList.contains('active') || faqToggleDue.classList.contains('active')) {
          faqToggle.classList.remove('active');
          faqToggleDue.classList.remove('active');
          faqToggle.innerHTML= ""; // cancella in contenuto stampato
          faqToggleDue.innerHTML= ""; // cancella in contenuto stampato
        }

        faqToggleTre.classList.add('active');
        setTimeout(function(){ faqToggleTre.innerHTML= '<h1>' + 'POST' + " " + id + '</h1>' + '<br>' + '<h2>' + title + '</h2>' + '<br>' + '<p>' + body + '</p>'; }, 300);

      }
   }
  )
});
