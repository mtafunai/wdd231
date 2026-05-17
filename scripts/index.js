
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}


document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("modified").textContent =
document.lastModified;



const courses = [
{ code: "WDD130", name: "Web Fundamentals", credits: 2, completed: true },
{ code: "WDD231", name: "Frontend Development", credits: 2, completed: false },
{ code: "CSE110", name: "Programming Basics", credits: 2, completed: true },
{ code: "CSE111", name: "Functions & Logic", credits: 2, completed: false },
{ code: "CSE210", name: "Programming with Classes", credits: 3, completed: false }
];

const container = document.getElementById("courseContainer");
const creditsDisplay = document.getElementById("credits");



function displayCourses(list) {
container.innerHTML = "";

list.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("card");

    if (course.completed) {
    card.classList.add("completed");
    } else {
    card.classList.add("incomplete");
    }

    card.innerHTML = `
    <h3>${course.code}</h3>
    <p>${course.name}</p>
    <p>${course.credits} Credits</p>
    `;

    container.appendChild(card);
});


const totalCredits = list.reduce((sum, c) => sum + c.credits, 0);
creditsDisplay.textContent = totalCredits;
}



function filterCourses(type) {
let filtered = courses;

if (type === "completed") {
    filtered = courses.filter(c => c.completed);
}

if (type === "incomplete") {
    filtered = courses.filter(c => !c.completed);
}

displayCourses(filtered);
}


displayCourses(courses);