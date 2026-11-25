let opportunities = getData("opportunities", []);

let savedOpportunities =
    getData("savedOpportunities", []);

let opportunityContainer =
    document.getElementById("opportunitiesContainer");


function displayOpportunities(list) {

    opportunityContainer.innerHTML = "";

    if (list.length === 0) {
        opportunityContainer.innerHTML =
            "<p>No opportunities found.</p>";
        return;
    }

    list.forEach(function(item) {

        let isSaved = savedOpportunities.includes(item.id);

        opportunityContainer.innerHTML += `

            <div class="card">

                <h3>${item.name}</h3>

                <p>${item.category}</p>

                <p>${item.description}</p>

                <p>Deadline: ${item.deadline}</p>

                <button onclick="saveOpportunity(${item.id})">
                    ${isSaved ? "Saved" : "Bookmark"}
                </button>

            </div>

        `;

    });

}


function saveOpportunity(id) {

    let saved = getData("savedOpportunities", []);

    if (saved.includes(id)) {

        saved = saved.filter(function(item) {
            return item !== id;
        });

    } else {

        saved.push(id);

    }

    saveData("savedOpportunities", saved);

    savedOpportunities = saved;

    displayOpportunities(opportunities);

}


document.getElementById("opportunitySearch")
.addEventListener("input", function() {

    let value = this.value.toLowerCase();

    let filtered = opportunities.filter(function(item) {

        return item.name.toLowerCase().includes(value);

    });

    displayOpportunities(filtered);

});


displayOpportunities(opportunities);