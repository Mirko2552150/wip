document.getElementById('button').addEventListener("click", function(){

  var dataSku = document.querySelector('.content').getAttribute('data-sku');
  console.log(dataSku);


  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSku)
  .then(response => response.json())
  .then(data => console.log(data.title)

  )


});

document.getElementById('button-due').addEventListener("click", function(){

  var dataSkuDue = document.querySelector('.content-due').getAttribute('data-sku');
  console.log(dataSkuDue);


  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSkuDue)
  .then(response => response.json())
  .then(data => console.log(data.title)

  )


});

document.getElementById('button-tre').addEventListener("click", function(){

  var dataSkuTre = document.querySelector('.content-tre').getAttribute('data-sku');
  console.log(dataSkuTre);


  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSkuTre)
  .then(response => response.json())
  .then(data => console.log(data.title)

  )


});
