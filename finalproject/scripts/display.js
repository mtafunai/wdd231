export function displayRepairs(repairs, cards) {

    repairs.forEach((repair) => {

        const card = document.createElement("section");

        card.classList.add("repair-card");

        card.innerHTML = `
            <h3>${repair.appliance}</h3>

            <p>
                <strong>Problem:</strong>
                ${repair.problem}
            </p>

            <p>
                <strong>Cause:</strong>
                ${repair.cause}
            </p>

            <p>
                <strong>Solution:</strong>
                ${repair.solution}
            </p>
        `;

        cards.appendChild(card);

    });

}