// TRAVERSTING THE DOM //

// var itemsList = document.querySelector('#items');
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
// var newDiv = document.createElement('div');

// Add class
// newDiv.className = "className_test"

// Add id
// newDiv.id = "Hallo"

// Add attr
// newDiv.setAttribute("title", "Hello Div");

// Create text node
// newDivText = document.createTextNode("Hello test");

// Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')

// console.log(newDiv);

// newDiv.style.fontSize = '40px';

// container.insertBefore(newDiv, h1);

// var button = document.getElementById("button").addEventListener
// ('click', buttonClick);

// EVENTS //

// function buttonClick(e){
    // console.log("The button is clicked");
    // document.getElementById('header-title').textContent = "Changed";
    // document.querySelector('#main').style.backgroundColor = "#f4f4f4";
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById("output");
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey); // option on Mac OS
    // console.log(e.ctrlKey); // Command button Mac OS(doesn't work wel)
    // console.log(e.shiftKey); // Shift Mac OS
// }


var button = document.getElementById("button");
var box = document.getElementById("box");
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log("EVENT TYPE: " + e.type);

    
    
    // document.getElementById("output").innerHTML = "<h3>"+ e.target.value + "</h3>";

    // output.innerHTML = '<h3> MouseX: '+e.offsetX+
    // '</h3><h3>MouseY: ' + e.offsetY + '</h3>';
    
    // box.style.backgroundColor = "rgb("+e.offsetX + "," + e.offsetY +", 200)";

}


