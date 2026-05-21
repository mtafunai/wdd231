document.addEventListener("DOMContentLoaded", () => {


    document.querySelector("#timestamp").value = new Date().toISOString();

});


function openModal(id) {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
    document.getElementById(id).style.display = "block";
}