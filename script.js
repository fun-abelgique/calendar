// the two date objects
const gDate = new Date();
const mDate = new DateFactorial();

// the different variables for the explained page
let mDay;
let mMonth;
let whichYear;

// defining mMonth
switch (mDate.getMonth()) {
  case 0:
    mMonth = "Nva";
    break;
  case 1:
    mMonth = "Duo";
    break;
  case 2:
    mMonth = "Tri";
    break;
  case 3:
    mMonth = "Qua";
    break;
  case 4:
    mMonth = "Qnt";
    break;
  case 5:
    mMonth = "Hex";
    break;
  case 6:
    mMonth = "Sep";
    break;
  case 7:
    mMonth = "Oct";
    break;
  case 8:
    mMonth = "Nov";
    break;
  case 9:
    mMonth = "Dec";
    break;
  case 10:
    mMonth = "Und";
    break;
  case 11:
    mMonth = "Pen";
    break;
  case 12:
    mMonth = "Ult";
    break;
}

switch (mDate.getWhichYear()) {
  case 0:
    whichYear = "1st";
    break;
  case 1:
    whichYear = "2nd";
    break;
  case 2:
    whichYear = "3rd";
    break;
  case 3:
    whichYear = "4th";
    break;
}

switch (mDate.getDay()) {
  case 0:
    mDay = "Sun";
    break;
  case 1:
    mDay = "Mec";
    break;
  case 2:
    mDay = "Ven";
    break;
  case 3:
    mDay = "Mon";
    break;
  case 4:
    mDay = "Mar";
    break;
  case 5:
    mDay = "Jup";
    break;
  case 6:
    mDay = "Sat";
    break;
}

// for the date string explained page
let eDayOfWeek = document.getElementById("dayofweek");
let eMonth = document.getElementById("emonth");
let eDate = document.getElementById("edate")
let eWhichYear = document.getElementById("ewhichyear");
let eYear = document.getElementById("eyear");

// the two date strings
let gDateString = document.getElementById("gregoriandatestring");
let myDateString = document.getElementById("mydatestring");

// displays the two date strings
myDateString.innerHTML = mDate.toDateString();
gDateString.innerHTML = gDate.toDateString() + " CE";

// breaks down the date string into its components to explain them
eDayOfWeek.innerHTML = mDay;
eMonth.innerHTML = mMonth;
eDate.innerHTML = mDate.getDate();
eWhichYear.innerHTML = whichYear;
eYear.innerHTML = mDate.getYear();