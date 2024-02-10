var countDownDate = new Date("Feb 26, 2024 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);
    const observerOptions = {
    threshold: 0.5, 
  };

  document.addEventListener("DOMContentLoaded", function () {
    fadeOutAndHide('.preloader', 3500); // 5000 milliseconds (5 seconds) duration
    showElement('#home-section');
  });
  
  function fadeOutAndHide(selector, duration) {
    const element = document.querySelector(selector);
    let opacity = 1;
    const interval = 50; // Interval for the opacity change (milliseconds)
    const steps = duration / interval;
    const deltaOpacity = opacity / steps;
  
    const fadeEffect = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(fadeEffect);
        hideElement(selector);
      } else {
        element.style.opacity = opacity;
        opacity -= deltaOpacity;
      }
    }, interval);
  }
  
  function hideElement(selector) {
    document.querySelector(selector).style.display = 'none';
  }
  
  function showElement(selector) {
    document.querySelector(selector).style.display = 'block';
  }
  