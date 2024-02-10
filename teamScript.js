document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const meetJamsutkars = document.querySelectorAll('.MeetJamsutkar');

    boxes.forEach((box, index) => {
        box.addEventListener('mouseover', () => {
            setTimeout(() => {
                meetJamsutkars.forEach(meetJamsutkar => {
                    meetJamsutkar.style.display = 'none';
                });
                meetJamsutkars[index].style.display = 'block';
            }, 500); // Adjust the delay in milliseconds as needed
        });
    });
});