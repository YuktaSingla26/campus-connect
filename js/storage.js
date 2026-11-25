function getData(key, defaultValue) {

    let data = localStorage.getItem(key);

    if (data === null) {
        return defaultValue;
    }

    return JSON.parse(data);
}


function saveData(key, value) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}


if (localStorage.getItem("events") === null) {
    saveData("events", initialEvents);
}

if (localStorage.getItem("societies") === null) {
    saveData("societies", initialSocieties);
}

if (localStorage.getItem("opportunities") === null) {
    saveData("opportunities", initialOpportunities);
}

if (localStorage.getItem("registeredEvents") === null) {
    saveData("registeredEvents", []);
}

if (localStorage.getItem("savedEvents") === null) {
    saveData("savedEvents", []);
}

if (localStorage.getItem("savedOpportunities") === null) {
    saveData("savedOpportunities", []);
}