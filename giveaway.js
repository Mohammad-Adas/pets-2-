
let time = document.getElementById("current-time");
        setInterval(() => {
            let d = new Date();
            time.innerHTML = d.toLocaleTimeString();
        }, 1000);
        
        function validateForm(event) {
            event.preventDefault(); // Prevent form submission
            
            const type = document.querySelector('input[name="Type"]:checked');
            const breed = document.querySelector('input[name="breed"]');
            const age = document.querySelector('select[name="age"]');
            const gender = document.querySelector('input[name="Gender"]:checked');
            const ownerFirstName = document.querySelector('input[name="first name"]');
            const ownerLastName = document.querySelector('input[name="last name"]');
            const email = document.querySelector('input[name="email"]');
            const errorElement = document.getElementById('error-message');
            let errorMessage = '';

            if (!type) {
                errorMessage += 'Please select a type.\n';
            }
            if (!breed.value) {
                errorMessage += 'Please enter the breed.\n';
            }
            if (!age.value) {
                errorMessage += 'Please select an age category.\n';
            }
            if (!gender) {
                errorMessage += 'Please select a gender.\n';
            }
            if (!ownerFirstName.value) {
                errorMessage += 'Please enter the owner\'s first name.\n';
            }
            if (!ownerLastName.value) {
                errorMessage += 'Please enter the owner\'s last name.\n';
            }
            if (!validateEmail(email.value)) {
                errorMessage += 'Please enter a valid email address.\n';
            }

            if (errorMessage) {
                errorElement.textContent = errorMessage;
                errorElement.style.display = 'block';
            } else {
                errorElement.style.display = 'none';
                document.getElementById('pet-form').submit();
            }
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('pet-form').addEventListener('submit', validateForm);
        });

