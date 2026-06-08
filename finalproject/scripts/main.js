const menuButton =
document.querySelector("#menuButton");

const navigation =
document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const modal =
document.querySelector("#safetyModal");

const closeModal =
document.querySelector("#closeModal");

if (!localStorage.getItem("visited")) {

    modal.showModal();

    localStorage.setItem(
        "visited",
        "true"
    );
}

closeModal.addEventListener("click", () => {
    modal.close();
});

let visits =
Number(localStorage.getItem("visits")) || 0;

visits++;

localStorage.setItem(
    "visits",
    visits
);

document.querySelector("#visitCounter")
.textContent =
`You have visited this site ${visits} times.`;