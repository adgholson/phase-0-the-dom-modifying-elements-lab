// Write your code here!
const ul =  document.querySelector('main#main');
ul.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Aaron is the champion";