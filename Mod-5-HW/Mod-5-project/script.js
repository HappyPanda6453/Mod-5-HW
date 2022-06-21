$(document).ready(function() {

    // jubotron with current date
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
    
    let description = $(".description");
    let saveButton = $(".saveBtn");
    let currentTime = moment().hour();
    
    console.log(currentTime);
    console.log(typeof currentTime);
    
    
    // color coding the time blocks 
    description.each(function () {
        let timeBlock = parseInt($(this).attr("id"));
    
        if (timeBlock === currentTime) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (timeBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
    

    // using .each to save in local storage
    description.each(function() {
    
        for (let i = 0; i < localStorage.length; i++) {
            let objectKey = localStorage.key(i);
            let taskValue = localStorage.getItem(objectKey);
            let rowHour = $(this).siblings(".hour").text();
            
            console.log(rowHour);
            console.log(typeof rowHour);
            console.log(objectKey);
            console.log(typeof objectKey);
            console.log(taskValue);
            console.log(typeof taskValue);
           
            if (objectKey === rowHour) {
                $(this).val(taskValue);
            }
           
        }
    });
    
    
    // function to save task when the save button is clicked. 
    function saveTasks () {
        let currentTime = $(this).data("hour");
        let rowHour = $(this).siblings(".hour").text();
        let task = $(this).siblings(".description").val();
    
        console.log(currentTime);
        console.log(rowHour);
        console.log(task);
    
        if (task === "") {
            localStorage.setItem(rowHour, "");
        }
        else {
            localStorage.setItem(rowHour, task);
        }
    }
    
    saveButton.on("click", saveTasks);
    
    });