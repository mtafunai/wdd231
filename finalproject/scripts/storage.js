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

const button =
document.querySelector("#acknowledgeBtn");

const message =
document.querySelector("#safetyMessage");

const acknowledged =
localStorage.getItem("safetyAcknowledged");

if (acknowledged === "yes") {

    message.textContent =
    "Thank you. Your safety acknowledgement has been saved.";
}

button.addEventListener("click", () => {

    localStorage.setItem(
        "safetyAcknowledged",
        "yes"
    );

    message.textContent =
    "Thank you. Your safety acknowledgement has been saved.";
});