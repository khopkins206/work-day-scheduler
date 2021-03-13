// add a moment to header
var todayTime = moment().format("MMMM Do, YYYY");
console.log(todayTime)
$("#currentDay").text(todayTime);

// create myDay variable/array with each hour to display
var myDay = [{
    id: "0",
    hour: "9",
    time: "9",
    meridiem: "AM",
  },
  {
    id: "1",
    hour: "10",
    time: "10",
    meridiem: "AM",
  },
  {
    id: "2",
    hour: "11",
    time: "11",
    meridiem: "AM",
  },
  {
    id: "3",
    hour: "12",
    time: "12",
    meridiem: "PM",
  },
  {
    id: "4",
    hour: "1",
    time: "13",
    meridiem: "PM",
  },
  {
    id: "5",
    hour: "2",
    time: "14",
    meridiem: "PM",
  },
  {
    id: "6",
    hour: "3",
    time: "15",
    meridiem: "PM",
  },
  {
    id: "7",
    hour: "4",
    time: "16",
    meridiem: "PM",
  },
  {
    id: "8",
    hour: "5",
    time: "17",
    meridiem: "PM",
  },
];
console.log(myDay[0].time)

// create form to display hours on page
myDay.forEach(function (thisHour) {
  //creates rows
  var hourRow = $("<form>").attr({
    "class": "row"
  });
  $(".container").append(hourRow);

  // console.log(hourRow)

  //create time stamp
  var hourField = $("<div>")
    .text(`${thisHour.hour}${thisHour.meridiem}`)
    .attr({
      "class": "col-md-1 hour"
    });

  // console.log(hourField)

  // creates schdeduler data
  var hourPlan = $("<div>")
    .addClass("col-md-9 text-area");
  var planInfo = $("<textarea>");
  hourPlan.append(planInfo);
  planInfo.attr("id", thisHour.id);


  // determines the time of day to add or remove class
  // NEED TO add .removeClass for all 
  if (parseInt(thisHour.time) < moment().hour()) {
    hourPlan.addClass("past");
    hourPlan.removeClass("present");
    hourPlan.removeClass("future")
  } else if (thisHour.time === moment().format("HH")) {
    hourPlan.addClass("present");
    hourPlan.removeClass("past");
    hourPlan.removeClass("future")
  } else if (thisHour.time > moment().format("HH")) {
    hourPlan.addClass("future");
    hourPlan.removeClass("present");
    hourPlan.removeClass("past")
  }


  // creates save button
  var saveButton = $("<i class='far fa-save fa-lg' id='lock-btn'></i>")
  var savePlan = $("<button>")
    .attr({
      "class": "col-md-1 saveBtn"
    });
  savePlan.append(saveButton);
  hourRow.append(hourField, hourPlan, savePlan);
});


// variables to link localStorage to forms
// var time = "time" + getHour
// var text = $()

// set local storage
//     localStorage.setItem("time", "text");

// console.log(id)
 
// on save click, local storage will save text
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // set item needs to be "time" + each hour connected to the click
  var id = $(this).parent().children('.text-area').children("textarea").attr("id")
  var note = $(this).siblings('.text-area').children('textarea').val()
  
  localStorage.setItem(id, note)
  
});

// when page is refreshed, tasks will remain on screen from local storage

$("textarea#0").val(localStorage.getItem("0"))
$("textarea#1").val(localStorage.getItem("1"))
$("textarea#2").val(localStorage.getItem("2"))
$("textarea#3").val(localStorage.getItem("3"))
$("textarea#4").val(localStorage.getItem("4"))
$("textarea#5").val(localStorage.getItem("5"))
$("textarea#6").val(localStorage.getItem("6"))
$("textarea#7").val(localStorage.getItem("7"))
$("textarea#8").val(localStorage.getItem("8"))



//when you clear the text, it deletes from local storage
// var deleteButton = document.querySelector("#delete-button")
//   console.log(deleteButton)
  
// var deletePlan = $("#delete-button")
//   .attr({
//   "class": "col-md-1 delBtn"
//   });


// $(".saveBtn").on("click", function (event) {
//   event.preventDefault();
//   localStorage.removeItem("0")
// })