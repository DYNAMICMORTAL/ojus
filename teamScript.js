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
            }, 500);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const meetJamsutkars = document.querySelectorAll('.MeetJamsutkar');
    const container = document.querySelector('.container');

    meetJamsutkars.forEach(meetJamsutkar => {
        meetJamsutkar.style.display = 'none';
    });
    
    document.getElementById('0').style.display = 'block'; // Set the default display to 'block' for element with id='0'

    container.addEventListener('mouseover', (event) => {
        const target = event.target;
        if (target.classList.contains('box')) {
            const id = target.dataset.id;
            meetJamsutkars.forEach(meetJamsutkar => {
                meetJamsutkar.style.display = 'none';
            });
            document.getElementById(id).style.display = 'none';
        }
    });

    container.addEventListener('mouseleave', () => {
        meetJamsutkars.forEach(meetJamsutkar => {
            meetJamsutkar.style.display = 'none';
        });
        document.getElementById('0').style.display = 'block'; // Set the default display to 'block' on mouse leave
    });
});
