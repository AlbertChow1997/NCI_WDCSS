
//waiting for DOM loaded
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("submitBtn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Validation start!")

        document.querySelectorAll(".error").forEach(e => e.textContent = "");

        let phone = document.getElementById("phone").value.trim();
        let email = document.getElementById("email").value.trim();
        let groupSize = document.getElementById("groupSize").value.trim();

        let valid = true;

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

        // Group size validation - ensure a valid option is selected
        if (groupSize === "" || groupSize < 1 || groupSize > 6) {
            document.getElementById("groupSizeError").textContent = "Please select a valid group size option (10+ people).";
            valid = false;
        }
        

        if (valid) {
            alert("Reservation submitted successfully!");
            console.log({
                phone, email, groupSize
            });
        }else{
            alert("Please ensure you fill in all required fields in right format.");
        }
    });

    console.log(" Reservation form created with validation!");
});
