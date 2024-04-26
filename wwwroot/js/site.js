
function addWorkoutToTable(workout) {
    const tableBody = document.getElementById('workout-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${workout.date}</td>
        <td>${workout.exerciseType}</td>
        <td>${workout.duration}</td>
        <td>${workout.distance}</td>
    `;
    tableBody.appendChild(row);
}

// Function to handle form submission
document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const exerciseType = document.getElementById('exercise-type').value;
    const duration = document.getElementById('duration').value;
    const distance = document.getElementById('distance').value;
    const date = document.getElementById('date').value;

    const workout = {
        exerciseType: exerciseType,
        duration: duration,
        distance: distance,
        date: date
    };

    addWorkoutToTable(workout);

    document.getElementById('workout-form').reset();
});
// Get references to the menu items
const pastWorkoutsMenu = document.querySelector('a[href="#past-workouts"]');
const startWorkoutMenu = document.querySelector('a[href="#start-workout"]');
const routinesMenu = document.querySelector('a[href="#routines"]');
const menuMenu = document.querySelector('a[href="#menu"]');

// Get references to the content sections
const pastWorkoutsSection = document.getElementById('past-workouts');
const startWorkoutSection = document.getElementById('start-workout');
const menuSection = document.getElementById('menu');
const routinesSection = document.getElementById('routines');

// Hide all content sections initially
const contentSections = document.querySelectorAll('.content-section');
contentSections.forEach(section => {
    section.style.display = 'none';
});

// Add click event listeners to the menu items
pastWorkoutsMenu.addEventListener('click', () => {
    hideAllSections();
    pastWorkoutsSection.style.display = 'block';
});

routinesMenu.addEventListener('click', () => {
    hideAllSections();
    routinesSection.style.display = 'block';
});

startWorkoutMenu.addEventListener('click', () => {
    hideAllSections();
    startWorkoutSection.style.display = 'block';
});

menuMenu.addEventListener('click', () => {
    hideAllSections();
    menuSection.style.display = 'block';
});

// Function to hide all content sections
function hideAllSections() {
    contentSections.forEach(section => {
        section.style.display = 'none';
    });
}
// const sidebar = document.getElementById('sidebar');

// sidebar.addEventListener('mouseenter', () => {
//     sidebar.style.width = '250px';
// });

// sidebar.addEventListener('mouseleave', () => {
//     sidebar.style.width = '100px'; // Adjust the width as needed
// });