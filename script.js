// Select DOM Elements
var navLinks = document.querySelectorAll('header nav ul li a');
var contactForm = document.querySelector('form');
var galleryImages = document.querySelectorAll('.grid img');
// Smooth Scroll for Navigation Links
if (navLinks) {
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var _a;
            event.preventDefault();
            var targetId = ((_a = link.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.replace('.html', '')) || '';
            var targetElement = document.querySelector("#".concat(targetId));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            else {
                // If not found, assume it's a different page
                window.location.href = link.href;
            }
        });
    });
}
// Contact Form Submission Handler
var sendWhatsAppMessage = function () {
    var _a, _b, _c;
    var name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
    var date = (_b = document.getElementById("date")) === null || _b === void 0 ? void 0 : _b.value;
    var time = (_c = document.getElementById("time")) === null || _c === void 0 ? void 0 : _c.value;
    if (!name || !date || !time) {
        alert("Please fill out all fields.");
        return;
    }
    var message = "Hello! I would like to book an appointment.\n\nName: ".concat(name, "\nDate: ").concat(date, "\nTime: ").concat(time);
    var phoneNumber = "03172472329";
    var whatsappURL = "https://wa.me/".concat(phoneNumber, "?text=").concat(encodeURIComponent(message));
    window.open(whatsappURL, "_blank");
};
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        sendWhatsAppMessage();
    });
}
// Dynamic Gallery Image Hover Effect
if (galleryImages) {
    galleryImages.forEach(function (img) {
        img.addEventListener('mouseover', function () {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseout', function () {
            img.style.transform = 'scale(1)';
        });
    });
}
var text = ""; // Text to type
var speed = 0; // Typing speed in milliseconds
var i = 0;
function typeWriter() {
    var element = document.getElementById("typewriter-text");
    if (element) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    else {
        console.error("Element with ID 'typewriter-text' not found.");
    }
}
typeWriter();
