
    // Get the form and submit button elements
    const form = document.getElementById('my-form');
    const submitBtn = form.querySelector('.btn');

    // Add event listener to the form on submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission and page reload

        // Get the input values
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        // Get the values entered by the user
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Check if the name and email are not empty
        if (name !== '' && email !== '') {
            // Create a user object with the input data
            const user = {
                name: name,
                email: email
            };

            // Convert the user object to a JSON string
            const userJSON = JSON.stringify(user);

            // Store the JSON string in the local storage
            localStorage.setItem('userDetails', userJSON);

            // Clear the form fields
            nameInput.value = '';
            emailInput.value = '';

            // Display a success message
            const msgDiv = document.querySelector('.msg');
            msgDiv.innerHTML = 'User details have been successfully stored.';
        } else {
            // Display an error message if any field is empty
            const msgDiv = document.querySelector('.msg');
            msgDiv.innerHTML = 'Please enter both name and email.';
        }
    });
