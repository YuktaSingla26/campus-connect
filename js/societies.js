let societiesContainer = document.getElementById("societiesContainer");
let societySearch = document.getElementById("societySearch");

function displaySocieties(societyList) {
    societiesContainer.innerHTML = "";

    societyList.forEach(function(society) {
        let card = document.createElement("div");
        card.className = "society-card";

        card.innerHTML = `
            <h3>${society.name}</h3>
            <p class="society-category">${society.category}</p>
            <p>${society.description}</p>

            <h4>What you can gain:</h4>
            <ul>
                ${society.benefits.map(function(point) {
                    return `<li>${point}</li>`;
                }).join("")}
            </ul>

            <button onclick="joinSociety(${society.id})">
                Show Interest
            </button>
        `;

        societiesContainer.appendChild(card);
    });
}

function joinSociety(id) {
    let joinedSocieties = getData("joinedSocieties", []);

    if (joinedSocieties.includes(id)) {
        showMessage("You have already shown interest in this society!");
    } else {
        joinedSocieties.push(id);
        saveData("joinedSocieties", joinedSocieties);
        showMessage("Interest submitted successfully!");
    }
}

societySearch.addEventListener("input", function() {
    let searchText = societySearch.value.toLowerCase();

    let filteredSocieties = societies.filter(function(society) {
        return society.name.toLowerCase().includes(searchText) ||
               society.category.toLowerCase().includes(searchText);
    });

    displaySocieties(filteredSocieties);
});

displaySocieties(societies);