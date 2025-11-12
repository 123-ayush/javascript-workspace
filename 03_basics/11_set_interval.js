// set interval is similar to set timeout but it work repeatedly after the given time

const id = setInterval( () => {
    console.log("Hello");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 11000);

// set interval and set timeout working together

// clearInterval(id); -> command given to stop a particular set interval