
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
nav.classList.toggle("show");
});



document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent =
"Last Modified: " + document.lastModified;



const courses = [
{ code: "WDD130", name: "Web Fundamentals", credits: 2, completed: true },
{ code: "WDD231", name: "Frontend Dev", credits: 2, completed: false },
{ code: "CSE110", name: "Programming Basics", credits: 2, completed: true },
{ code: "CSE111", name: "Functions", credits: 3, completed: false }
];

const container = document.getElementById("courseContainer");
const credits = document.getElementById("credits");



function displayCourses(list) {
container.innerHTML = "";

list.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.classList.add(course.completed ? "completed" : "incomplete");

    div.innerHTML = `
    <h3>${course.code}</h3>
    <p>${course.name}</p>
    <p>${course.credits} Credits</p>
    `;

    container.appendChild(div);
});


const total = list.reduce((sum, c) => sum + c.credits, 0);
credits.textContent = total;
}



document.querySelectorAll(".filters button").forEach(btn => {
btn.addEventListener("click", () => {
    const type = btn.dataset.filter;

    let filtered = courses;

    if (type === "completed") {
    filtered = courses.filter(c => c.completed);
    }

    if (type === "incomplete") {
    filtered = courses.filter(c => !c.completed);
    }

    displayCourses(filtered);
});
});


// INIT
displayCourses(courses);