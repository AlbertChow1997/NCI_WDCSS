//validation
console.log("reservation form created!")

//waiting for DOM loaded
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("submitBtn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Validation start!")

        document.querySelectorAll(".error").forEach(e => e.textContent = "");

        let name = document.getElementById("name").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let email = document.getElementById("email").value.trim();
        let guests = document.getElementById("guests").value.trim();
        let date = document.getElementById("date").value.trim();

        let valid = true;

        // Name validation
        if (name === "") {
            document.getElementById("nameError").textContent = "Name is required.";
            valid = false;
        }

        // Phone validation
        if (!/^[0-9]{7,15}$/.test(phone)) {
            document.getElementById("phoneError").textContent = "Enter a valid phone number (7–15 digits).";
            valid = false;
        }

        // Email validation
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email address.";
            valid = false;
        }

        // Guests validation
        if (isNaN(guests) || guests <= 0 || guests > 50) {
            document.getElementById("guestsError").textContent = "Guests must be between 1 and 50.";
            valid = false;
        }

        // Date validation
        if(date===""){
            document.getElementById("dateError").textContent="Please select a date";
            valid = false;
        }
        else{
            let selectDate = new Date(date);
            let now = new Date();
          
            if(isNaN(selectDate.getTime()) || selectDate.getTime() < now.getTime()){
                document.getElementById("dateError").textContent = "Please select a valid date";
                valid = false;               
            }
        }
        

        if (valid) {
            alert("Reservation submitted successfully!");
            console.log({
                name, phone, email, guests, date
            });
        }
    });

    console.log(" Reservation form created with validation!");
});
