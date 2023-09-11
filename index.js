let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // stricky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon and navbar when click navbarmenu
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 
};

// scrollReveal initialization
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.content-portfolio', { origin: 'top' });
ScrollReveal().reveal('.home-image', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.project-1', { origin: 'bottom' });
ScrollReveal().reveal('h3,p,btn-readme ', { origin: 'bottom' });
ScrollReveal().reveal('.footer-heading', { origin: 'top' });
ScrollReveal().reveal('.user-login-wrap', { origin: 'right' });
ScrollReveal().reveal('.footer-icons', { origin: 'bottom' });
ScrollReveal().reveal('.about-content', { origin: 'bottom' });
ScrollReveal().reveal('.main-title h1,p', { origin: 'top' });
ScrollReveal().reveal('.col2,.box-container', { origin: 'right' });
ScrollReveal().reveal('.skills-container,#main-title', { origin: 'left' });

// multiple text
const typed = new Typed('.text-multiply', {
    strings: ['Frontend-Developer', 'backend-Developer'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 50,
    loop: true
});

// download my resume button

document.getElementById('pdf-download').addEventListener('click', function() {
    startDownloadPDF();
});

function startDownloadPDF() {
    // PATH TO MY RESUME
    var pdfUrl = "./assets/resume.pdf";
    var fileName = "resume.pdf"; // The name of the downloaded file

    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.target = '_blank'; // Open the pdf in a new window 

    // Update the link text to indicate that the download is starting
    link.innerHTML = "Downloading...";

    document.body.appendChild(link);
    link.click();

    // After the download starts, reset the link text after a short delay 
    setTimeout(function() {
        link.innerHTML = "Download PDF";
        document.body.removeChild(link);
    }, 2000); 
}
