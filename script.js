document.addEventListener("DOMContentLoaded", () => {
  const enquiryForm = document.getElementById("enquiryForm");
  const feedbackDiv = document.getElementById("formFeedback");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const vehicle = document.getElementById("vehicle").value.trim();
      const service = document.getElementById("service").value;
      const details = document.getElementById("details").value.trim();

      if (fullName.length < 3) {
        feedbackDiv.style.color = "red";
        feedbackDiv.textContent = "Error: Full name must be at least 3 characters long.";
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        feedbackDiv.style.color = "red";
        feedbackDiv.textContent = "Error: Please enter a valid email address.";
        return;
      }

      if (phone.length < 10) {
        feedbackDiv.style.color = "red";
        feedbackDiv.textContent = "Error: Please enter a valid phone number.";
        return;
      }

      if (vehicle === "") {
        feedbackDiv.style.color = "red";
        feedbackDiv.textContent = "Error: Please specify your vehicle make and model.";
        return;
      }

      if (service === "") {
        feedbackDiv.style.color = "red";
        feedbackDiv.textContent = "Error: Please select a required service.";
        return;
      }

      if (details.length < 10) {
        feedbackDiv.style.color = "red";
        feedbackDiv.textContent = "Error: Please provide at least 10 characters of detail for your request.";
        return;
      }

      // Success Submission Handling
      feedbackDiv.style.color = "green";
      feedbackDiv.textContent = "Success! Your enquiry has been validated and submitted. We will contact you soon regarding pricing and availability.";
      enquiryForm.reset();
    });
  }
});