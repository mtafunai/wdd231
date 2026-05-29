document.getElementById("timestamp").value = new Date().toISOString();

const modalLinks = document.querySelectorAll(".open-modal");

modalLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const modalId = link.dataset.modal;

        document.getElementById(modalId).showModal();

    });

});

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });


const lastModified = document.lastModified;

console.log("Last Modified:", lastModified);

});

