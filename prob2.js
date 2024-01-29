function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

var yearToCheck = 2001;
if (isLeapYear(yearToCheck)) {
  console.log(yearToCheck + " is a leap year.");
} else {
  console.log(yearToCheck + " is not a leap year.");
}
