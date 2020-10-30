// Save button variable
let saveBtn = $(".saveBtn");
// Current time variable using moment.js
let currentHour = moment().format("HH");
// Pass hour as an integer
let currentHourInt = parseInt(currentHour);

// Attributes for hourly input elements
$("#9Row").attr("timeRow", moment("9:00am", "h:mm a").format("HH"));
$("#10Row").attr("timeRow", moment("10:00am", "h:mm a").format("HH"));
$("#11Row").attr("timeRow", moment("11:00am", "h:mm a").format("HH"));
$("#12Row").attr("timeRow", moment("12:00pm", "h:mm a").format("HH"));
$("#1Row").attr("timeRow", moment("1:00pm", "h:mm a").format("HH"));
$("#2Row").attr("timeRow", moment("2:00pm", "h:mm a").format("HH"));
$("#3Row").attr("timeRow", moment("3:00pm", "h:mm a").format("HH"));
$("#4Row").attr("timeRow", moment("4:00pm", "h:mm a").format("HH"));
$("#5Row").attr("timeRow", moment("5:00pm", "h:mm a").format("HH"));

// Change the color of each row
$(document).ready(function() {
    for (let i = 0; i <= 12; i++) {
        // Hourly row variable
        let inputHour = $("#" + i + "Row").attr("timeRow");
        // Pass int for hour
        let inputHourInt = parseInt(inputHour);
        // This will change the color for the past
        if (currentHourInt > inputHourInt) {
            $("#" + i + "Row").addClass("past");
        // This will change the color for the present
        if (currentHourInt === inputHourInt) {
            $("#" + i + "Row").addClass("present");
        // This will change the color for the future
        if (currentHourInt < inputHourInt) {
            $("#" + i + "Row").addClass("future");
        }
        
    }
}

// Save function so the data is stored
// Retrieve stored data