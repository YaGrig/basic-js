const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null){
return 'Unable to determine the time of year!'
  }
else if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]'){
  throw new Error('THROWN');
}

m = date.getMonth();
if (m > 1 && m < 5){ return "spring"}
else if (m > 4 && m < 8){return "summer"}
else if (m > 7 && m < 11){return "autumn"}
else return "winter"
}
