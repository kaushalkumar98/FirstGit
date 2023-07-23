// Traversing the DOM//
var itemList = document.querySelector('#items'); 
parentnode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
 console.log(itemsList.childNodes);

 console.log(itemList.children);
 console.log(itemList.children[1]);
 itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild;
 console.log(itemList.firstChild);

//firstElementChild
 console.log(itemList.firstElementChild);
 itemList.firstElementChild.textContent = 'Hello 1';

//lastChild;
 console.log(itemList.lastChild);

//firstElementChild
 console.log(itemList.lastElementChild);
 itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
 console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
 console.log(itemList.previousElementSibling);
 itemList.previousElementSibling.style.color = 'green'; 

//createElement

// //Create a div
var newDiv = document.createElement('div');
//Add class
newDiv.className = 'hello';
//Add id
newDiv.id = 'hello1';
//Add attr
newDiv.setAttribute('title', 'Hello Div');
//create text node
var newDivText = document.createTextNode('Hello world');
//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

// Adding Hello World before Item1
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
var parentElement = document.querySelector('#items');
var referenceNode = parentElement.querySelector('li');
parentElement.insertBefore(newDiv, referenceNode);