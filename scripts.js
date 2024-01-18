document.addEventListener("DOMContentLoaded", function() {
    animateText("roeText");
});

function animateText(elementId) {
    const textElement = document.getElementById(elementId);
    const textContent = textElement.textContent.trim();

    // Clear existing content
    textElement.innerHTML = "";

    // Wrap each character in a span with increased delay
    textContent.split("").forEach((character, index) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = character;
        charSpan.style.setProperty("--delay", `${index * 0.1}s`);
        charSpan.style.setProperty("animation-delay", `${index * 0.1}s`);
        textElement.appendChild(charSpan);
    });
}


//
document.addEventListener("DOMContentLoaded", function() {
    animateRotatingNumber();
});

function animateRotatingNumber() {
    const rotatingNumber = document.getElementById("rotatingNumber");
    let currentNumber = 21;
    const finalNumber = 24;

    function updateNumber() {
        rotatingNumber.textContent = currentNumber;
    }

    function rotateToNextNumber() {
        currentNumber++;
        if (currentNumber > finalNumber) {
            currentNumber = 21;
        }
        rotatingNumber.style.animation = "none"; // Reset animation
        void rotatingNumber.offsetWidth; // Trigger reflow
        rotatingNumber.style.animation = null; // Reapply animation
        rotatingNumber.style.animation = "rotateNumber .5s forwards ease-in-out"; // 4s for one full rotation
        updateNumber();
        if (currentNumber == finalNumber) {
            exit; // Reset animation
        }
    }

    // Initial setup
    updateNumber();

    // Rotate to the next number every few seconds
    setInterval(rotateToNextNumber, 500);
}
