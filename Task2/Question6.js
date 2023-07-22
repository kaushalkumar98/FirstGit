var SecondItem = document.querySelector('.list-group-item:nth-child(2)');
SecondItem.style.backgroundColor = 'green';
var SecondItem = document.querySelector('.list-group-item:nth-child(3)');
SecondItem.style.display = 'none';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
  odd[i].style.backgroundColor = 'green';
}

var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<1;i++){
  even[i].style.color = 'green';
}