//booking form

class Reservation{
    static createReservationForm(){
        return`
            <form class="reservation-form" id="reservationForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required
                        placeholder="Please enter your name">
                    <span class="error" id="nameError"></span>

                    <label for="phone">Phone</label>
                    <input type="text" id="phone" name="phone" required
                        placeholder="Please enter your phone">
                    <span class="error" id="phoneError"></span>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required
                        placeholder="Please enter your email">
                    <span class="error" id="emailError"></span>

                    <label for="number of guests">Number of guests</label>
                    <input type="number" id="guests" name="guests" required
                        placeholder="Please select number of guests">
                    <span class="error" id="guestsError"></span>
                        
                
                    <label for="date">Date</label>
                    <input type="text" id="date" name="date" required
                        placeholder="Please enter your date dd/mm/yy">
                    <span class="error" id="dateError"></span>

                    <button type="button" id="submitBtn">Submit</button>

                </div>
            </form>
        `;
    }
}


// Render the form into HTML
document.getElementById('reservationContainer').innerHTML = Reservation.createReservationForm();
console.log("reservation form created!")

// Validation
document.getElementById("submitBtn").addEventListener("click", function () {
    
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

    // Date validation (YYYY-MM-DD)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        document.getElementById("dateError").textContent = "Enter date as YYYY-MM-DD.";
        valid = false;
    }

    if (valid) {
        alert("Reservation submitted successfully!");
        console.log({
            name, phone, email, guests, date
        });
    }
});


console.log(" Reservation form created with validation!");

