let societies = getData("societies", []);

let societyContainer =
    document.getElementById("societiesContainer");

function displaySocieties(list) {

    societyContainer.innerHTML = "";

    if (list.length === 0) {
        societyContainer.innerHTML = "<p>No societies found.</p>";
        return;
    }

    list.forEach(function(society) {

        societyContainer.innerHTML += `

            <div class="card">

                <h3>${society.name}</h3>

                <p>${society.category}</p>

                <p>${society.description}</p>

                <button onclick="joinSociety(${society.id})">
                    Express Interest
                </button>

            </div>

        `;

    });

}

function joinSociety(id) {

    let joined = getData("joinedSocieties", []);

    if (joined.includes(id)) {
        alert("You have already expressed interest!");
        return;
    }

    joined.push(id);

    saveData("joinedSocieties", joined);

    alert("Interest submitted successfully!");

}

document.getElementById("societySearch")
.addEventListener("input", function() {

    let value = this.value.toLowerCase();

    let filtered = societies.filter(function(society) {

        return society.name.toLowerCase().includes(value);

    });

    displaySocieties(filtered);

});

displaySocieties(societies);