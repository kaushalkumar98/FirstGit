//Creating delete button
const listItem = document.createElement('li');
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', () => userList.removeChild(listItem) && localStorage.removeItem(email));

listItem.appendChild(deleteButton);