$(document).ready(function() {

    
    //Moment JS date function used in alternative to the Javascript native date function (Date())
    //The date is displayed in jumbotron, the HH hour portion is used in the determining the color of the time block by setting the appropriate class
    var MomentDate = moment().toString();
    console.log("momentDate : " + MomentDate);
    var CurrDateTime = MomentDate.split(" ");
    var CurrWeekDay = CurrDateTime[0];
    var CurrMonth = CurrDateTime[1];
    var CurrDay = CurrDateTime[2];
    var CurrYear = CurrDateTime[3];
    var CurrTime = CurrDateTime[4].split(":");
    var CurrHr = CurrTime[0];
    var CurrMin = CurrTime[1];

    var CurrDate = CurrWeekDay + " " + CurrMonth + " " + CurrDay + " " + CurrYear;
    var dlyScheduleHr;
    var dlyScheduleDesc;

  
    //Dynamically build TimeBlock HTML elements
    // Loop represents from 7AM to 8PM - Changing i to approproate hour block will dynamically build that many blocks
    // Time here is represented in Military time for easy comparison
  
    for (var i = 7; i < 20; i++) {

        //dynamically display proper time value for the Label text
        valueString = "" + i + "";
        if (i == 12){
            timeString = i + " PM";
        } else if (i < 12){
            timeString = i + " AM";
        }
        else if(i > 12){
            timeString = (i - 12) + " PM";
        };
        
        //define jQuery html elements and properties
        var rowDiv = $("<div>");
        rowDiv.addClass("row align-items-center");
        var colEmptyDiv = $("<div>");
        colEmptyDiv.addClass("col-lg-1");
        var colLblDiv = $("<div>");
        colLblDiv.addClass("col-lg-1");
        var labelEl = $("<label>");
        labelEl.addClass("time-block");
        labelEl.attr("value",valueString);
        labelEl.text(timeString);
        var colTADiv = $("<div>");
        colTADiv.addClass("col-lg-8");
        var textAreaEl = $("<textarea>");
        textAreaEl.addClass("hour description");
        textAreaEl.attr("value",valueString);
        var colSaveBtn = $("<div>");
        colSaveBtn.addClass("col-lg-2");
        var saveBtnEl = $("<button>");
        saveBtnEl.addClass("saveBtn btn btn-default");
        saveBtnEl.attr("value",valueString);
        saveBtnEl.text("save");

        //dynamically add the created buttons to the appropriate parent element
        $(".container").append(rowDiv);
        rowDiv.append(colEmptyDiv, colLblDiv, colTADiv, colSaveBtn);
        colLblDiv.append(labelEl);
        colTADiv.append(textAreaEl);
        colSaveBtn.append(saveBtnEl);

    }

    /*** Calendar Functionality ****/

    $("#currentDay").text(CurrDate);
    
    //Go through the textarea and color the past/future/present hour with respective colors as specific in the CSS style settings
    $(".hour").each(function(){
        
        //Useing the Value each timeblock as the hour value
        var hourValue = parseInt($(this).attr("value"));
        
        //dynamically create variable for getting back data from local storage
        dlyScheduleHr = "dlySchedule" + hourValue;
        dlyScheduleDesc = localStorage.getItem(dlyScheduleHr);
        CurrHr = 9;
        //color coding of time blocks
        if (hourValue < CurrHr) {
            $(this).addClass("past");
        } else if(hourValue > CurrHr){
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
        $(this).val(dlyScheduleDesc);
    })

    //Save Btn click - save the description into localstorage for future retrieval
    //dynamically create variable name to store the textarea content in the localstorage area, based on the hour of the entry
    $(".saveBtn").on("click",function(){
        var btnValue = parseInt($(this).attr("value"));

        $(".hour").each(function(){
            var hourValue = parseInt($(this).attr("value"));
            if (hourValue == btnValue) {
                dlyScheduleDesc = $(this).val();
                dlyScheduleHr = "dlySchedule" + btnValue;
                console.log("variable dynamically created: " + dlyScheduleHr);
                localStorage.setItem(dlyScheduleHr, dlyScheduleDesc);
            }
        })

    })

})