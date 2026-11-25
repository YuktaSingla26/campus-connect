let events = getData("events", []);

let registeredEvents = getData(
    "registeredEvents", []
);

let savedEvents = getData("savedEvents", []);

let container = document.getElementById(
    "eventsContainer"
);


function displayEvents(eventList) {

    container.innerHTML = "";

    if (eventList.length === 0) {
        container.innerHTML = "<p>No events found.</p>";
        return;
    }

    eventList.forEach(function(event) {

        let isRegistered = registeredEvents.includes(event.id);

        let isSaved = savedEvents.includes(event.id);

        container.innerHTML += `

            <div class="card">

                <h3>${event.name}</h3>

                <p>${event.category}</p>

                <p>${event.description}</p>

                <p>Date: ${event.date}</p>

                <p>Venue: ${event.venue}</p>

                <button onclick="registerEvent(${event.id})">
                    ${isRegistered ? "Registered" : "Register"}
                </button>

                <button onclick="bookmarkEvent(${event.id})">
                    ${isSaved ? "Saved" : "Bookmark"}
                </button>

            </div>

        `;

    });

}


function registerEvent(id) {

    let registered = getData("registeredEvents", []);

    if (registered.includes(id)) {
        alert("You are already registered!");
        return;
    }

    registered.push(id);

    saveData("registeredEvents", registered);

    registeredEvents = registered;

    displayEvents(events);

}


function bookmarkEvent(id) {

    let saved = getData("savedEvents", []);

    if (saved.includes(id)) {

        saved = saved.filter(function(item) {
            return item !== id;
        });

    } else {

        saved.push(id);

    }

    saveData("savedEvents", saved);

    savedEvents = saved;

    displayEvents(events);

}


document.getElementById("eventSearch")
.addEventListener("input", function() {

    let searchValue = this.value.toLowerCase();

    let filtered = events.filter(function(event) {

        return event.name.toLowerCase()
        .includes(searchValue);

    });

    displayEvents(filtered);

});

document.getElementById("eventCategory")
.addEventListener("change", function() {

    let category = this.value;

    let filtered = events;

    if (category !== "All") {

        filtered = events.filter(function(event) {
            return event.category === category;
        });

    }

    displayEvents(filtered);

});


displayEvents(events);