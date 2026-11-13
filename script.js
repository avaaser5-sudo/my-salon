
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// SELECT SERVICE FROM SERVICE CARD

document.querySelectorAll(".service-bottom a").forEach(link => {
    link.addEventListener("click", () => {
        const selectedService = link.dataset.service;
        document.getElementById("service").value = selectedService;
    });
});

// SET MINIMUM BOOKING DATE

const visitDate = document.getElementById("visitDate");

const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

visitDate.min = localDate;

// BOOKING FORM

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const phone = document.getElementById("clientPhone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("visitDate").value;

    const message = document.getElementById("formMessage");

    if (!name || !phone || !service || !date) {
        message.textContent = "Барлық мәліметті толтырыңыз!";
        return;
    }

    message.textContent =
        "Рақмет, " + name + "! 💗 " +
        service + " қызметіне " + date +
        " күніне өтініміңіз дайын.";

    bookingForm.reset();
});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".service-card, .master-card, .work-card, .contact-card, .about-content"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

}
