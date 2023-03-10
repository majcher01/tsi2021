// Function to check Whether both passwords
            // is same or not.
            function checkPassword(form) {
                password1 = form.pass.value;
                password2 = form.pass1.value;
  
                if (password1 != password2) {
                    alert ("\nWprowadzone hasła nie są zgodne");
                    return false;
                }
  
                
            }