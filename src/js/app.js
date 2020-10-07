document.getElementById('button').addEventListener("click", function(){

  var dataSku = document.querySelector('.content').getAttribute('data-sku');
  console.log(dataSku);

  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSku)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    var title = response.title;
    var body = response.body;
    // function myFunction() {
    //   var element = document.querySelector("card-tre");
    //   element.classList.add("active");
    // }

    var faqToggle = document.getElementById('card-uno');
    if (faqToggle.classList.contains('active')) {
      faqToggle.classList.remove('active');
      // alert("remove faq display!");
    } else {
      faqToggle.classList.add('active');
      // alert("add faq display!");
    }
   }
  )
});

document.getElementById('button-due').addEventListener("click", function(){

  var dataSkuDue = document.querySelector('.content-due').getAttribute('data-sku');
  console.log(dataSkuDue);


  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSkuDue)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    var title = response.title;
    var body = response.body;
    // function myFunction() {
    //   var element = document.querySelector("card-tre");
    //   element.classList.add("active");
    // }

    var faqToggle = document.getElementById('card-due');
    if (faqToggle.classList.contains('active')) {
      faqToggle.classList.remove('active');
      // alert("remove faq display!");
    } else {
      faqToggle.classList.add('active');
      // alert("add faq display!");
    }
   }
  )
});

document.getElementById('button-tre').addEventListener("click", function(){

  var dataSkuTre = document.querySelector('.content-tre').getAttribute('data-sku');
  console.log(dataSkuTre);


  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSkuTre)
  .then(response => response.json())
  .then(response => {
      console.log(response);
      var title = response.title;
      var body = response.body;
      // function myFunction() {
      //   var element = document.querySelector("card-tre");
      //   element.classList.add("active");
      // }

      var faqToggle = document.getElementById('card-tre');
      if (faqToggle.classList.contains('active')) {
        faqToggle.classList.remove('active');
        // alert("remove faq display!");
      } else {
        faqToggle.classList.add('active');
        // alert("add faq display!");
      }
   }
  )
});
