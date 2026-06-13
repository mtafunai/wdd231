const menuButton =
document.querySelector("#menuButton");

const navigation =
document.querySelector("#navigation");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const button =
document.querySelector("#acknowledgeButton");

const status =
document.querySelector("#statusMessage");

if (localStorage.getItem("safetyAccepted")) {

    status.innerHTML = `
        <strong>
            Safety information already acknowledged.
        </strong>
    `;

}

button.addEventListener("click", () => {

    localStorage.setItem(
        "safetyAccepted",
        "true"
    );

    status.innerHTML = `
        <strong>
            Thank you for reviewing the safety information.
        </strong>
    `;

});