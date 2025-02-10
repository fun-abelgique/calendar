class DateFactorial {
    constructor() {
      this.gDate = new Date();
      if (((this.gDate.getFullYear % 4 === 0) && (this.gDate.getFullYear % 100 !== 0)) || (this.gDate.getFullYear % 400 === 0)) {
        this.leapYear = true;
      } else {
        this.leapYear = false;
      }
    }
    
    getYear() {
      // figures out the year
      if ((this.gDate.getMonth() >= 3) || ((this.gDate.getMonth() >= 2) && (this.gDate.getDate()) >= 20)) {
        return this.gDate.getFullYear() - 2000;
      } else {
        return this.gDate.getFullYear() - 2001;
      }
    }
    
    getWhichYear() {
      // finds out what year it is in the 4 year cycle
      switch (this.getYear() % 4) {
        case 0:
          return 3;
        case 1:
          return 0;
        case 2:
          return 1;
        case 3:
          return 2;
        default:
          console.log("ERRRRRRRRRRRRRRROR: what year it is in the 4 year cycle is taking a vacation in Ohio :/");
      }
    }
    
    getGregorianDayOfYear() {
      // finding the day of the year, 1-365 (gregorian calendar)
      if (((this.gDate.getFullYear % 4 === 0) && (this.gDate.getFullYear % 100 !== 0)) || (this.gDate.getFullYear % 400 === 0)) {
        this.leapYear = true;
        switch (this.gDate.getMonth()) {
          case 0:
            return this.gDate.getDate();
          case 1:
            return 31 + this.gDate.getDate();
          case 2:
            return 60 + this.gDate.getDate();
          case 3:
            return 91 + this.gDate.getDate();
          case 4:
            return 121 + this.gDate.getDate();
          case 5:
            return 152 + this.gDate.getDate();
          case 6:
            return 182 + this.gDate.getDate();
          case 7:
            return 213 + this.gDate.getDate();
          case 8:
            return 244 + this.gDate.getDate();
          case 9:
            return 274 + this.gDate.getDate();
          case 10:
            return 305 + this.gDate.getDate();
          case 11:
            return 335 + this.gDate.getDate();
          default:
            console.log("ERRRRRRRRRRRRRRROR: the day of the year is taking a vacation in Ohio :/");
        }
      } else {
        switch (this.gDate.getMonth()) {
          case 0:
            return this.gDate.getDate();
          case 1:
            return 31 + this.gDate.getDate();
          case 2:
            return 59 + this.gDate.getDate();
          case 3:
            return 90 + this.gDate.getDate();
          case 4:
            return 120 + this.gDate.getDate();
          case 5:
            return 151 + this.gDate.getDate();
          case 6:
            return 181 + this.gDate.getDate();
          case 7:
            return 212 + this.gDate.getDate();
          case 8:
            return 243 + this.gDate.getDate();
          case 9:
            return 273 + this.gDate.getDate();
          case 10:
            return 304 + this.gDate.getDate();
          case 11:
            return 334 + this.gDate.getDate();
          default:
            console.log("ERRRRRRRRRRRRRRROR: the day of the year is taking a vacation in Ohio :/");
        }
      }
    }
  
    getBonusDay() {
      // determines whether it's a bonus day or not
      if (((this.gDate.getMonth() === 2) && (this.gDate.getDate() === 20))) {
        return "Bonus";
      } else if ((this.getWhichYear() === "4th") && (this.gDate.getMonth() === 2) && (this.gDate.getDate() === 19)) {
        return "Bonus Bonus";
      } else {
        return "";
      }
    }
  
    getDayOfYear() {
      // finds out what day of the year it is in calendar factorial, 1-364
      if (this.getBonusDay() === "") {
        if ((this.getGregorianDayOfYear() > 79) && (this.leapYear === false)) {
          return this.getGregorianDayOfYear() - 80;
        } else if ((this.getGregorianDayOfYear() > 80) && (this.leapYear === true)) {
          return this.getGregorianDayOfYear() - 81;
        } else if (this.getGregorianDayOfYear() < 79) {
          return this.getGregorianDayOfYear() + 285;
        }
      } else {
        return this.getBonusDay();
      }
    }
  
    getDate() {
      // finds out what day of the month it is
      if (this.getDayOfYear() <= 28) {
        return this.getDayOfYear();
      } else if ((this.getDayOfYear() >= 29) && (this.getDayOfYear() <= 56)) {
        return this.getDayOfYear() - 28;
      } else if ((this.getDayOfYear() >= 57) && (this.getDayOfYear() <= 84)) {
        return this.getDayOfYear() - 56;
      } else if ((this.getDayOfYear() >= 85) && (this.getDayOfYear() <= 112)) {
        return this.getDayOfYear() - 84;
      } else if ((this.getDayOfYear() >= 113) && (this.getDayOfYear() <= 140)) {
        return this.getDayOfYear() - 112;
      } else if ((this.getDayOfYear() >= 141) && (this.getDayOfYear() <= 168)) {
        return this.getDayOfYear() - 140;
      } else if ((this.getDayOfYear() >= 169) && (this.getDayOfYear() <= 196)) {
        return this.getDayOfYear() - 168;
      } else if ((this.getDayOfYear() >= 197) && (this.getDayOfYear() <= 224)) {
        return this.getDayOfYear() - 196;
      } else if ((this.getDayOfYear() >= 225) && (this.getDayOfYear() <= 252)) {
        return this.getDayOfYear() - 224;
      } else if ((this.getDayOfYear() >= 253) && (this.getDayOfYear() <= 280)) {
        return this.getDayOfYear() - 252;
      } else if ((this.getDayOfYear() >= 281) && (this.getDayOfYear() <= 308)) {
        return this.getDayOfYear() - 280;
      } else if ((this.getDayOfYear() >= 309) && (this.getDayOfYear() <= 336)) {
        return this.getDayOfYear() - 308;
      } else if ((this.getDayOfYear() >= 337) && (this.getDayOfYear() <= 364)) {
        return this.getDayOfYear() - 336;
      }
    }
  
    getMonth() {
      // finds out what month it is
      if (this.getDayOfYear() <= 28) {
        return 0;
      } else if ((this.getDayOfYear() >= 29) && (this.getDayOfYear() <= 56)) {
        return 1;
      } else if ((this.getDayOfYear() >= 57) && (this.getDayOfYear() <= 84)) {
        return 2;
      } else if ((this.getDayOfYear() >= 85) && (this.getDayOfYear() <= 112)) {
        return 3;
      } else if ((this.getDayOfYear() >= 113) && (this.getDayOfYear() <= 140)) {
        return 4;
      } else if ((this.getDayOfYear() >= 141) && (this.getDayOfYear() <= 168)) {
        return 5;
      } else if ((this.getDayOfYear() >= 169) && (this.getDayOfYear() <= 196)) {
        return 6;
      } else if ((this.getDayOfYear() >= 197) && (this.getDayOfYear() <= 224)) {
        return 7;
      } else if ((this.getDayOfYear() >= 225) && (this.getDayOfYear() <= 252)) {
        return 8;
      } else if ((this.getDayOfYear() >= 253) && (this.getDayOfYear() <= 280)) {
        return 9;
      } else if ((this.getDayOfYear() >= 281) && (this.getDayOfYear() <= 308)) {
        return 10;
      } else if ((this.getDayOfYear() >= 309) && (this.getDayOfYear() <= 336)) {
        return 11;
      } else if ((this.getDayOfYear() >= 337) && (this.getDayOfYear() <= 364)) {
        return 12;
      }
    }
  
    getDay() {
      // finds out what day of the week it is
      switch (this.getDate() % 7) {
        case 0:
          return 6;
        case 1:
          return 0;
        case 2:
          return 1;
        case 3:
          return 2;
        case 4:
          return 3;
        case 5:
          return 4;
        case 6:
          return 5;
        default:
          console.log("ERRRRRRRRRRRRRRROR: the day of the week is taking a vacation in Ohio :/");
      }
    }
  
    toDateString() {
      // creates a date string for calendar factorial
      let day;
      let month;
      let date;
      let whichYear;
      let year;
      
      switch (this.getDay()) {
        case 0:
          day = "Sun";
          break;
        case 1:
          day = "Mec";
          break;
        case 2:
          day = "Ven";
          break;
        case 3:
          day = "Mon";
          break;
        case 4:
          day = "Mar";
          break;
        case 5:
          day = "Jup";
          break;
        case 6:
          day = "Sat";
          break;
      }
  
      switch (this.getMonth()) {
        case 0:
          month = "Nva";
          break;
        case 1:
          month = "Duo";
          break;
        case 2:
          month = "Tri";
          break;
        case 3:
          month = "Qua";
          break;
        case 4:
          month = "Qnt";
          break;
        case 5:
          month = "Hex";
          break;
        case 6:
          month = "Sep";
          break;
        case 7:
          month = "Oct";
          break;
        case 8:
          month = "Nov";
          break;
        case 9:
          month = "Dec";
          break;
        case 10:
          month = "Und";
          break;
        case 11:
          month = "Pen";
          break;
        case 12:
          month = "Ult";
          break;
      }
      
      switch (this.getWhichYear()) {
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
  
      date = this.getDate();
      year = this.getYear();
      
      if (year >= 0) {
      return day + " " + month + " " + date + " " + whichYear + " " + year + " C!";
      } else {
        return day + " " + month + " " + date + " " + whichYear + " " + year + " BC!";
      }
    }
    
  }