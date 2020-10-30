// Save button variable
let saveBtn = $(".saveBtn");
// Clear button variable
let clearBtn = $(".clearBtn");
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

$(document).ready(function() {

    // Current date and time
    $("#currentDay").append();
    function addDate() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
    } setInterval(addDate, 1000);

    // Change the color of each row
    for (let i = 0; i <= 12; i++) {
        // Hourly row variable
        let inputHour = $("#" + i + "Row").attr("timeRow");
        // Pass int for hour
        let inputHourInt = parseInt(inputHour);
        // This will change the color for the past
        if (currentHourInt > inputHourInt) {
            $("#" + i + "Row").addClass("past");
        }
        // This will change the color for the present
        if (currentHourInt === inputHourInt) {
            $("#" + i + "Row").addClass("present");
        }
        // This will change the color for the future
        if (currentHourInt < inputHourInt) {
            $("#" + i + "Row").addClass("future");
        }
    }

    // Store input data
    renderPlans();

    // Save function so the data is stored
    saveBtn.on("click", function() {
        // Hourly row in HTML
        let rowHour = $(this).attr("data-hour");
        // Saves input
        let input = $("#" + rowHour + "Row").val();
        // Puts in local storage
        localStorage.setItem(rowHour, input);
    });
    // Retrieve stored data from input
    function renderPlans() {
        for (let i = 0; i <= 12; i++) {
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }
    // Button to clear saved and reload
    clearBtn.on("click", function(){
        localStorage.clear();
        location.reload();
    })
});