// TRAVERSTING THE DOM //

var itemsList = document.querySelector('#items');
// parentNode
// console.log(itemsList.parentNode);
// itemsList.parentNode.style.backgroundColor = 'grey';
// console.log(itemsList.parentNode.parentNode.parentNode);

// PARENTELEMENT
// console.log(itemsList.parentElement);
// itemsList.parentElement.style.backgroundColor = 'grey';
// console.log(itemsList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemsList.childNodes);

// console.log(itemsList.children);
// console.log(itemsList.children[1]);
// itemsList.children[1].style.backgroundColor = "red";

// FirstChild
// console.log(itemsList.firstChild);
// FirstElementChild
// console.log(itemsList.firstElementChild);
// itemsList.firstElementChild.textContent = "You read it!";

// LastChild
// console.log(itemsList.lastChild);
// LastElementChild
// console.log(itemsList.lastElementChild);
// itemsList.children[3].style.backgroundColor = "purple";
// itemsList.lastElementChild.textContent = "I SEE YOU READING!";

// NextSibling
// console.log(itemsList.nextSibling);
// NextElementSibling
// console.log(itemsList.nextElementSibling);
// test = itemsList.nextElementSibling
// test.style.backgroundColor = "yellow";

// PreviousSibling
// console.log(itemsList.previousSibling);
// PreviousElementSibling
// console.log(itemsList.previousElementSibling);
// itemsList.previousElementSibling.style.backgroundColor = "gold";

// createElement

// create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = "className_test"

// Add id
newDiv.id = "Hallo"

// Add attr
newDiv.setAttribute("title", "Hello Div");

// Create text node
newDivText = document.createTextNode("Hello test");

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')

console.log(newDiv);

newDiv.style.fontSize = '40px';

container.insertBefore(newDiv, h1);
