$(document).ready(function() {


    var CurrDateTime = Date().split(" ");
    var CurrWeekDay = CurrDateTime[0];
    var CurrMonth = CurrDateTime[1];
    var CurrDay = CurrDateTime[2];
    var CurrYear = CurrDateTime[3];
    var CurrTime = CurrDateTime[4].split(":");
    var CurrHr = CurrTime[0];
    var CurrMin = CurrTime[1];

    var CurrDate = CurrWeekDay + " " + CurrMonth + " " + CurrDay + " " + CurrYear;

    var dailyCalData;
    /* format in which the local storage data of the daily schedule will be kept 
        var dailyCalData = 
        [
        {hrBlock: 9, desc: ""},
        {hrBlock: 10, desc: ""},
        {hrBlock: 11, desc: ""},
        {hrBlock: 12, desc: ""},
        {hrBlock: 13, desc: ""},
        {hrBlock: 14, desc: ""},
        {hrBlock: 15, desc: ""},
        {hrBlock: 16, desc: ""},
        {hrBlock: 17, desc: ""}       
        ] 
    */

    //Display the Current Date in the Jumbotron
    $("#currentDay").text(CurrDate);

    //Go through the textarea and add specific class to reflect the CSS settings
    $(".hour").each(function(){
        console.log(this);
        console.log(parseInt($(this).attr("value")));

        if (parseInt($(this).attr("value")) < CurrTime) {
            $(this).addClass("past");
        } else if(parseInt($(this).attr("value")) > CurrTime){
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })

    //Save Btn click - save the description into localstorage for future 
    $(".saveBtn").on("click",function(){

    })

})