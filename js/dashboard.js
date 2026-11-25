let events = getData("events", []);

let societies = getData("societies", []);

let opportunities = getData("opportunities", []);

let registered = getData("registeredEvents", []);


document.getElementById("eventCount").innerText =
    events.length;

document.getElementById("societyCount").innerText =
    societies.length;

document.getElementById("registrationCount").innerText =
    registered.length;

document.getElementById("opportunityCount").innerText =
    opportunities.length;


// Display upcoming events

let dashboardEvents = document.getElementById(
    "dashboardEvents"
);

dashboardEvents.innerHTML = "";

events.slice(0, 3).forEach(function(event) {

    dashboardEvents.innerHTML += `

        <div class="card">

            <h3>${event.name}</h3>

            <p>${event.category}</p>

            <p>${event.date}</p>

        </div>

    `;

});