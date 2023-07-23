// Creating another input box
//<input type="text" class="form-control mr-2" id="item2">

// Get input value
var secondItem = document.getElementById('item2').value;

// Create new li element
var li = document.createElement('li');
// Add class
li.className = 'list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode(secondItem));

// Updated Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemText1 = item.childNodes[0].textContent.toLowerCase(); 
      var itemText2 = item.childNodes[1].textContent.toLowerCase(); 
      var combinedText = itemText1  + itemText2; 
      if(combinedText.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }