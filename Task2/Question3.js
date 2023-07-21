//console.log(document.title);
document.title = 'ChangeByKaushal';
console.log(document.title);
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
//headerTitle.textContent = "hello";
//headerTitle.style.borderBottom = 'solid 3px #000';
header.style.borderBottom = 'solid 3px #000';

var additem = document.getElementsByClassName('title');
console.log(additem);
console.log(additem[0]);
additem[0].style.fontWeight = 'bold';
additem[0].style.color = 'green';