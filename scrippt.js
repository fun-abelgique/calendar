// date object (gregorian calendar) and the return values of some of its getter methods, and some gregorian calendar related variables
let gDate = new Date();
let gMonth = gDate.getMonth();
let gDayOfYear;
let gLeapYear;
let gDayOfMonth = gDate.getDate();
let gYear = gDate.getFullYear();

// for the date string explained page
let eDayOfWeek = document.getElementById("dayofweek");
let eMonth = document.getElementById("emonth");
let eDate = document.getElementById("edate")
let eWhichYear = document.getElementById("ewhichyear");
let eYear = document.getElementById("eyear");

// the two date strings
let gDateString = document.getElementById("gregoriandatestring");
let myDateString = document.getElementById("mydatestring");

let mYear = -1; // the year
let whichYear = ""; // 1st, 2nd, 3rd, or 4th
let mDate = -1; // the day of the month
let mDayOfYear = -1; // what day of the year it is
let mMonth = ""; // the month
let mDay = ""; // the day of the week

// figures out the year
if ((gMonth >= 3) || ((gMonth >= 2) && (gDayOfMonth >= 20))) {
  mYear = gDate.getFullYear() - 2000;
} else {
  mYear = gDate.getFullYear() - 2001;
}

// gives whichYear an actual value
switch (mYear % 4) {
  case 0:
    whichYear = "4th";
    break;
  case 1:
    whichYear = "1st";
    break;
  case 2:
    whichYear = "2nd";
    break;
  case 3:
    whichYear = "3rd";
    break;
  default:
    console.log("ERRRRRRRRRRRRRRROR: what year it is in the 4 year cycle is taking a vacation in Ohio :/");
    break;
}

// finding the day of the year, 1-365 (gregorian calendar)
if (((gYear % 4 === 0) && (gYear % 100 !== 0)) || (gYear % 400 === 0)) {
  gLeapYear = true;
  switch (gMonth) {
    case 0:
      gDayOfYear = gDayOfMonth;
      break;
    case 1:
      gDayOfYear = 31 + gDayOfMonth;
      break;
    case 2:
      gDayOfYear = 60 + gDayOfMonth;
      break;
    case 3:
      gDayOfYear = 91 + gDayOfMonth;
      break;
    case 4:
      gDayOfYear = 121 + gDayOfMonth;
      break;
    case 5:
      gDayOfYear = 152 + gDayOfMonth;
      break;
    case 6:
      gDayOfYear = 182 + gDayOfMonth;
      break;
    case 7:
      gDayOfYear = 213 + gDayOfMonth;
      break;
    case 8:
      gDayOfYear = 244 + gDayOfMonth;
      break;
    case 9:
      gDayOfYear = 274 + gDayOfMonth;
      break;
    case 10:
      gDayOfYear = 305 + gDayOfMonth;
      break;
    case 11:
      gDayOfYear = 335 + gDayOfMonth;
      break;
    default:
      console.log("ERRRRRRRRRRRRRRROR: the month is taking a vacation in Ohio :/");
      break;
  }
} else {
  gLeapYear = false;
  switch (gMonth) {
    case 0:
      gDayOfYear = gDayOfMonth;
      break;
    case 1:
      gDayOfYear = 31 + gDayOfMonth;
      break;
    case 2:
      gDayOfYear = 59 + gDayOfMonth;
      break;
    case 3:
      gDayOfYear = 90 + gDayOfMonth;
      break;
    case 4:
      gDayOfYear = 120 + gDayOfMonth;
      break;
    case 5:
      gDayOfYear = 151 + gDayOfMonth;
      break;
    case 6:
      gDayOfYear = 181 + gDayOfMonth;
      break;
    case 7:
      gDayOfYear = 212 + gDayOfMonth;
      break;
    case 8:
      gDayOfYear = 243 + gDayOfMonth;
      break;
    case 9:
      gDayOfYear = 273 + gDayOfMonth;
      break;
    case 10:
      gDayOfYear = 304 + gDayOfMonth;
      break;
    case 11:
      gDayOfYear = 334 + gDayOfMonth;
      break;
    default:
      console.log("ERRRRRRRRRRRRRRROR: the month is taking a vacation in Ohio :/");
      break;
  }
}

// determines whether it's a bonus day or not
if (((gMonth === 2) && (gDayOfMonth === 20))) {
  mDay = "";
  mMonth = "";
  mDate = "Bonus";
} else if ((whichYear === "4th") && (gMonth === 2) && (gDayOfMonth === 19)) {
  mDay = "";
  mMonth = "";
  mDate = "Bonus Bonus";
} else {
  // if it isn't a bonus day, figures out what month, date, and day of the week it is
  // figures out what day of the year it is
  if ((gDayOfYear > 79) && (gLeapYear === false)) {
    mDayOfYear = gDayOfYear - 80;
  } else if ((gDayOfYear > 80) && (gLeapYear === true)) {
    mDayOfYear = gDayOfYear - 81;
  } else if (gDayOfYear < 79) {
    mDayOfYear = gDayOfYear + 285;
  }
  // figures out what month and date it is
  if (mDayOfYear <= 28) {
    mMonth = "Nva";
    mDate = mDayOfYear;
  } else if ((mDayOfYear >= 29) && (mDayOfYear <= 56)) {
    mMonth = "Duo";
    mDate = mDayOfYear - 28;
  } else if ((mDayOfYear >= 57) && (mDayOfYear <= 84)) {
    mMonth = "Tri";
    mDate = mDayOfYear - 56;
  } else if ((mDayOfYear >= 85) && (mDayOfYear <= 112)) {
    mMonth = "Qua";
    mDate = mDayOfYear - 84;
  } else if ((mDayOfYear >= 113) && (mDayOfYear <= 140)) {
    mMonth = "Qnt";
    mDate = mDayOfYear - 112;
  } else if ((mDayOfYear >= 141) && (mDayOfYear <= 168)) {
    mMonth = "Hex";
    mDate = mDayOfYear - 140;
  } else if ((mDayOfYear >= 169) && (mDayOfYear <= 196)) {
    mMonth = "Sep";
    mDate = mDayOfYear - 168;
  } else if ((mDayOfYear >= 197) && (mDayOfYear <= 224)) {
    mMonth = "Oct";
    mDate = mDayOfYear - 196;
  } else if ((mDayOfYear >= 225) && (mDayOfYear <= 252)) {
    mMonth = "Nov";
    mDate = mDayOfYear - 224;
  } else if ((mDayOfYear >= 253) && (mDayOfYear <= 280)) {
    mMonth = "Dec";
    mDate = mDayOfYear - 252;
  } else if ((mDayOfYear >= 281) && (mDayOfYear <= 308)) {
    mMonth = "Und";
    mDate = mDayOfYear - 280;
  } else if ((mDayOfYear >= 309) && (mDayOfYear <= 336)) {
    mMonth = "Pen";
    mDate = mDayOfYear - 308;
  } else if ((mDayOfYear >= 337) && (mDayOfYear <= 364)) {
    mMonth = "Ult";
    mDate = mDayOfYear - 336;
  }
  // figures out what day of the week it is
  switch (mDate % 7) {
    case 0:
      mDay = "Sat";
      break;
    case 1:
      mDay = "Sun";
      break;
    case 2:
      mDay = "Mec";
      break;
    case 3:
      mDay = "Ven";
      break;
    case 4:
      mDay = "Mon";
      break;
    case 5:
      mDay = "Mar";
      break;
    case 6:
      mDay = "Jup";
      break;
    default:
      console.log("ERRRRRRRRRRRRRRROR: the day of the week is taking a vacation in Ohio :/");
      break;
  }
}

// displays the two date strings
myDateString.innerHTML = mDay + " " + mMonth + " " + mDate + " " + whichYear + " " + mYear + " C!";
gDateString.innerHTML = gDate.toDateString() + " CE";

// breaks down the date string into its components to explain them
eDayOfWeek.innerHTML = mDay;
eMonth.innerHTML = mMonth;
eDate.innerHTML = mDate;
eWhichYear.innerHTML = whichYear;
eYear.innerHTML = mYear;