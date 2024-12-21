// Select DOM Elements
const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('header nav ul li a');
const contactForm = document.querySelector<HTMLFormElement>('form');
const galleryImages: NodeListOf<HTMLImageElement> = document.querySelectorAll('.grid img');

// Smooth Scroll for Navigation Links
if (navLinks) {
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href')?.replace('.html', '') || '';
            const targetElement = document.querySelector(`#${targetId}`);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If not found, assume it's a different page
                window.location.href = link.href;
            }
    });

    });
}

// Function to handle WhatsApp message sending
const sendWhatsAppMessage = (): void => {
    // Retrieve form inputs
    const name = (document.getElementById("name") as HTMLInputElement)?.value.trim();
    const date = (document.getElementById("date") as HTMLInputElement)?.value;
    const time = (document.getElementById("time") as HTMLInputElement)?.value;

    // Validate input
    if (!name || !date || !time) {
        alert("Please fill out all fields.");
        return;
    }

    // Create WhatsApp message
    const message = `Hello! I would like to book an appointment.\n\nName: ${name}\nDate: ${date}\nTime: ${time}`;
    const phoneNumber = "03172472329";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappURL, "_blank");
};

// Add event listener to form submission
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        sendWhatsAppMessage();
    });
}




// Dynamic Gallery Image Hover Effect
if (galleryImages) {
    galleryImages.forEach((img) => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
}
const text: string =""; // Text to type
const speed: number = 0; // Typing speed in milliseconds

let i: number = 0;

function typeWriter(): void {
  const element = document.getElementById("typewriter-text");
  if (element) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  } else {
    console.error("Element with ID 'typewriter-text' not found.");
  }
}

typeWriter();

