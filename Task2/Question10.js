
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
        localStorage.setItem('userDetails', userJSON);

        
    });
