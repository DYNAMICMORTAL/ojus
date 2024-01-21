// document.addEventListener("DOMContentLoaded", function() {
//     animateText("roeText");
// });

// function animateText(elementId) {
//     const textElement = document.getElementById(elementId);
//     const textContent = textElement.textContent.trim();

//     // Clear existing content
//     textElement.innerHTML = "";

//     // Wrap each character in a span with increased delay
//     textContent.split("").forEach((character, index) => {
//         const charSpan = document.createElement("span");
//         charSpan.textContent = character;
//         charSpan.style.setProperty("--delay", `${index * 0.1}s`);
//         charSpan.style.setProperty("animation-delay", `${index * 0.1}s`);
//         textElement.appendChild(charSpan);
//     });
// }


// //
// document.addEventListener("DOMContentLoaded", function() {
//     animateRotatingNumber();
// });

// function animateRotatingNumber() {
//     const rotatingNumber = document.getElementById("rotatingNumber");
//     let currentNumber = 21;
//     const finalNumber = 24;

//     function updateNumber() {
//         rotatingNumber.textContent = currentNumber;
//     }

//     function rotateToNextNumber() {
//         currentNumber++;
//         if (currentNumber > finalNumber) {
//             currentNumber = 21;
//         }
//         rotatingNumber.style.animation = "none"; // Reset animation
//         void rotatingNumber.offsetWidth; // Trigger reflow
//         rotatingNumber.style.animation = null; // Reapply animation
//         rotatingNumber.style.animation = "rotateNumber .5s forwards ease-in-out"; // 4s for one full rotation
//         updateNumber();
//         if (currentNumber == finalNumber) {
//             exit; // Reset animation
//         }
//     }

//     // Initial setup
//     updateNumber();

//     // Rotate to the next number every few seconds
//     setInterval(rotateToNextNumber, 500);
// }















document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", function() {
        this.classList.toggle("active");
        navLinks.style.display = this.classList.contains("active") ? "flex" : "none";
    });
});
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    const menuIcon = document.querySelector('.menu');
    
    menu.classList.toggle('show');
    menuIcon.classList.toggle('open');

    window.onscroll = () =>
    {
        menu.classList.remove('show');
        menuIcon.classList.remove('open');
}
}



let hamburger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});
times.addEventListener('click', function(){
    mobileNav.classList.remove('open');    
});


function toggleMenu() {
    var menu = document.querySelector('.mobile-nav');
    menu.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function () {
    // Add a delay of 2000 milliseconds (2 seconds)
    setTimeout(function () {
        // Hide the preloader
        document.querySelector('.preloader').style.display = 'none';

        // Display the main content
        document.querySelector('.mainSection').style.display = 'flex';
    }, 2300); // You can adjust the delay duration (in milliseconds) as needed
});


