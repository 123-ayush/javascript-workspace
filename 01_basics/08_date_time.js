//Read date and time from MDN

let myDate = new Date()

console.log(typeof myDate); // object

console.log(myDate.toString()); // Tue Oct 28 2025 13:31:04 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // Tue Oct 28 2025

console.log(myDate.toLocaleString()); // 10/28/2025, 1:31:04 PM

console.log(myDate.toISOString()) // 2025-10-28T13:32:33.684Z

console.log(myDate.toJSON()); // 2025-10-28T13:34:21.790Z

console.log(myDate.toLocaleDateString()); // 10/28/2025

console.log(myDate.toTimeString()); // 13:34:21 GMT+0000 (Coordinated Universal Time

// const myNewDate = new Date(2024, 0, 31, 22, 56)
//                         (year, month(0-indexed), date, hour(std-24), min, sec)

const myNewDate = new Date("01-23-2025 05:35:00 AM")
//                        ("MM-DD-YYYY HH-MM-SS AM/PM")

console.log(myNewDate.toLocaleString());