const leapYears = function(year) {
    if((year % 4 === 0 && year % 100 !== 0) //year divides by 4 but not by 100
        || year % 400 === 0) { //or year divides by 400
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;
