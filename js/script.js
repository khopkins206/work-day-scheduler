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
      "class": "col-md-2 hour"
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
  if (thisHour.time < moment().format("HH")) {
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

// on save click, local storage will save text
$("#lock-btn").on("click", function (e) {
  e.preventDefault();
  // set item needs to be "time" + each hour connected to the click
  localStorage.setItem("time9", "this works")
  localStorage.setItem("time10", "this works")
  localStorage.setItem("time11", "this works")
  localStorage.setItem("time12", "this works")
  localStorage.setItem("time13", "this works")
  localStorage.setItem("time14", "this works")
  localStorage.setItem("time15", "this works")
  localStorage.setItem("time16", "this works")
  localStorage.setItem("time17", "this works")

  console.log(localStorage.getItem("time9"))

  // console.log("click")
});


// when page is refreshed, tasks will remain on screen from local storage
// function populatePlan() {
  // console.log(localStorage.getItem("time9"))
// 
$("text-area").val(localStorage.getItem("time9"))

//when you clear the text, it deletes from local storage