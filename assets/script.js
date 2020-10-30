// Save button variable
let saveBtn = $(".saveBtn");
// Current time variable using moment.js
let currentHour = moment().format("HH");
// Pass hour as an integer
let currentHourInt = parseInt(currentHour);

// Attributes for hourly input elements
$("#9AM").attr("timeRow", moment("9:00am", "h:mm a").format("HH"));
$("#10AM").attr("timeRow", moment("10:00am", "h:mm a").format("HH"));
$("#11AM").attr("timeRow", moment("11:00am", "h:mm a").format("HH"));
$("#12PM").attr("timeRow", moment("12:00pm", "h:mm a").format("HH"));
$("#1PM").attr("timeRow", moment("1:00pm", "h:mm a").format("HH"));
$("#2PM").attr("timeRow", moment("2:00pm", "h:mm a").format("HH"));
$("#3PM").attr("timeRow", moment("3:00pm", "h:mm a").format("HH"));
$("#4PM").attr("timeRow", moment("4:00pm", "h:mm a").format("HH"));
$("#5PM").attr("timeRow", moment("5:00pm", "h:mm a").format("HH"));

// Change the color of each row
// Save function so the data is stored
// Retrieve stored data
// ????