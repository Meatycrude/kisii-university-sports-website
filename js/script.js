// Image Slider for Home Page
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Form Validation and Submission
const form = document.getElementById("registerForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sport = document.getElementById("sport").value;
    const experience = document.getElementById("experience").value;

    if (name && email && sport && experience) {
      alert(
        `Thank you, ${name}! We've received your registration for ${sport} (${experience} level). We'll email you at ${email} soon.`
      );
      form.reset();
    } else {
      alert("Please fill all fields.");
    }
  });
}
// Contact Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const subject = document.getElementById("csubject").value.trim();
    const message = document.getElementById("cmessage").value.trim();

    if (name && email && subject && message) {
      alert(
        `Thank you, ${name}! Your message about "${subject}" has been sent. We'll reply to ${email} soon.`
      );
      contactForm.reset();
    } else {
      alert("Please fill in all fields before sending.");
    }
  });
}
