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
    animateText("roeText");
    showImagePopup();
});

function animateText(elementId) {
    // Your existing code for text animation
}

function showImagePopup() {
    const dialogContainer = document.getElementById("dialogContainer");
    const imagePaths = [
        "background2.png", // replace with your actual image file names
        "cursor.png",
        // "image3.jpg",
        // add more image paths as needed
    ];

    let currentIndex = 0;

    // Add event listener for mainSection scroll
    document.querySelector('.mainSection').addEventListener('scroll', function() {
        // Check if scrolled to the bottom
        if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
            // Create and show the dialog box with the next image
            createDialogBox(dialogContainer, imagePaths[currentIndex]);
            currentIndex = (currentIndex + 1) % imagePaths.length;
        }
    });
}

function createDialogBox(container, imagePath) {
    // Create a dialog box element
    const dialogBox = document.createElement("div");
    dialogBox.classList.add("dialogBox");
    dialogBox.style.backgroundColor = "#7F3E98"; // Purple color

    // Create an image element
    const image = document.createElement("img");
    image.src = "assets/images/" + imagePath; // Adjust the path accordingly
    image.alt = "Event Image";
    image.style.width = "100%";
    image.style.height = "100%";

    // Create maximize and close buttons
    const maximizeButton = document.createElement("div");
    maximizeButton.classList.add("maximizeButton");
    maximizeButton.addEventListener("click", function() {
        container.removeChild(dialogBox);
    });

    // Append elements to the dialog box
    dialogBox.appendChild(maximizeButton);
    dialogBox.appendChild(image);
    container.appendChild(dialogBox);

    // Set a random delay for the dialog box
    const delay = Math.random() * 3000; // Adjust as needed
    setTimeout(() => {
        dialogBox.classList.add("show");
    }, delay);
}
