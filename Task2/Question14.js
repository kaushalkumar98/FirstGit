//Creating edit button
const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.addEventListener('click', () => userList.removeChild(listItem) && localStorage.removeItem(email) );
editButton.addEventListener('click', () => handleEditButtonClick(email, user.name));
listItem.appendChild(editButton);

function handleEditButtonClick(email, name) {
    // Populate the input fields with the user's name and email
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    nameInput.value = name;
    emailInput.value = email;
}