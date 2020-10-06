
var content = document.getElementById('content');

var content = document.getElementById('show-more');

var button = document.getElementById('button');

button.onclick = function() {

  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))

}
