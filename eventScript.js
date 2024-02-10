// const paintBall = document.querySelector('.paintBall');
//         let lastScrollY = window.scrollY || window.pageYOffset;
//         window.addEventListener('scroll', function() {
//             const scrollY = window.scrollY || window.pageYOffset;
//             if (scrollY > lastScrollY) {
//                 console.log('scrolling down');
//                 paintBall.style.top = `${parseInt(paintBall.style.top || 0) - 1}px`;
//             } else {
//                 console.log('scrolling up');
//                 paintBall.style.top = `${parseInt(paintBall.style.top || 0) + 1}px`;
//             }
//             console.log('scrollY: ', scrollY);
//             lastScrollY = scrollY;
//         });
const paintBall = document.querySelector('.paintBall');
let lastScrollY = window.scrollY || window.pageYOffset;

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY || window.pageYOffset;
    const deltaY = scrollY - lastScrollY;
    const movementAmount = deltaY / 6;
    console.log('movementAmount: ', movementAmount);
    paintBall.style.top = `${parseInt(paintBall.style.top || 0) - movementAmount}px`;
    lastScrollY = scrollY;
});
