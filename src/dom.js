const container = document.querySelector('#container');


const contentP = document.createElement('p');
const contentH3 = document.createElement('h3');
const contentDiv = document.createElement('div');
const contentH1 = document.createElement('h1');
const contentP2 = document.createElement('p');




contentP.classList.add('container');
contentH3.classList.add('container');





contentH1.classList.add('div');
contentP2.classList.add('div');
contentDiv.classList.add('container');


contentP.textContent = "Hey i'm red!";
contentH3.textContent = "I'm a blue h3!";
contentH1.textContent = "I'm in a div";
contentP2.textContent = "ME TOO!";
contentDiv.style.backgroundColor = 'pink';
contentDiv.style.border = '1px solid black';

container.appendChild(contentP);
container.appendChild(contentH3);
container.appendChild(contentDiv);

contentDiv.appendChild(contentH1);
contentDiv.appendChild(contentP2);


function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");



// METHOD 3
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});