// Define an object to hold the global variables
const globals = {
    latitude: 0,
    longitude: 0
}

// Define a function to set a global variable
export function setGlobal(name, value) {
    // console.log(`Setting global variable '${name}' to '${value}'`);
    globals[name] = value;
    localStorage.setItem(name, JSON.stringify(value));
}

// Define a function to get a global variable
export function getGlobal(name) {
    // console.log(`Getting global variable '${name}': '${JSON.stringify(globals[name], null, 2)}'`);
    return globals[name];
}
