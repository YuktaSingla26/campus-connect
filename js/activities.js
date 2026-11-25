let events = getData("events", []);

let registered = getData("registeredEvents", []);

let saved = getData("savedEvents", []);

let registeredContainer =
    document.getElementById("registeredEvents");

let savedContainer =
    document.getElementById("savedEvents");


function showActivity() {

    registeredContainer.innerHTML = "";

    savedContainer.innerHTML = "";

    let myRegisteredEvents = events.filter(function(event) {
        return registered.includes(event.id);
    });

    let mySavedEvents = events.filter(function(event) {
        return saved.includes(event.id);
    });


    if (myRegisteredEvents.length === 0) {
        registeredContainer.innerHTML =
            "<p>No registrations yet.</p>";
    }

    myRegisteredEvents.forEach(function(event) {

        registeredContainer.innerHTML += `
            <div class="card">
                <h3>${event.name}</h3>
                <p>${event.date}</p>
                <span>Registered</span>
            </div>
        `;

    });


    if (mySavedEvents.length === 0) {
        savedContainer.innerHTML =
            "<p>No saved events yet.</p>";
    }

    mySavedEvents.forEach(function(event) {

        savedContainer.innerHTML += `
            <div class="card">
                <h3>${event.name}</h3>
                <p>${event.date}</p>
                <span>Bookmarked</span>
            </div>
        `;

    });

}

showActivity();