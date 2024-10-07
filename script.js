

$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); 
        
      
        $('#emailError').text('');
        $('#passwordError').text('');

       
        const userEmail = $('#floatingInput').val().trim();
        const userPassword = $('#floatingPassword').val().trim();
        let isFormValid = true;

       
        if (userEmail === '') {
            $('#emailError').text('You must enter an email address.');
            isFormValid = false;
        } else if (!isEmailValid(userEmail)) {
            $('#emailError').text('That doesn’t look like a valid email.');
            isFormValid = false;
        }
        
        
        if (userPassword === '') {
            $('#passwordError').text('Please enter your password.');
            isFormValid = false;
        }

        if (isFormValid) {
            alert('Your details are valid. Logging you in...');
         
        }
    });

    function isEmailValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

