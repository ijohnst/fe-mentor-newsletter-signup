document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup--form');
    const emailInput = document.querySelector('.email');
    const submitButton = document.querySelector('.btn--submit');
    const errorMessage = document.querySelector('.signup--error-message');
    const confirmationMessage = document.querySelector('.confirmation--instructions');

    const signupCard = document.querySelector('.signup');
    const confirmationCard = document.querySelector('.signup--confirmation');
    const dismissButton = document.querySelector('.btn--dismiss');

    //  Email Validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Form submit event listener
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const formData = new FormData(form);
        const emailValue = formData.get('email');
    
        if(!validateEmail(emailValue)) {
            emailInput.classList.add('error');
            errorMessage.textContent = "Valid Email Required";
        } else {
            emailInput.classList.remove('error');
            errorMessage.textContent="";
        
            // Hide sign up and show confirmation
            signupCard.classList.add('hidden');
            confirmationCard.classList.remove('hidden');

            // Add Confirmation Message
            confirmationMessage.innerHTML = `A confirmation email has been sent to <strong>${emailValue}</strong>. Please open it and click the button inside to confirm your subscription.`;
        }
    });

    // Dismiss Button
    dismissButton.addEventListener('click', () => {
        confirmationCard.classList.add('hidden');
        signupCard.classList.remove('hidden');

        // Reset Form
        form.reset();
    });
});
