const sumAll = function(low, high) {
    let total = 0;
    // check if arguments are integers
    if (!Number.isInteger(low) || !Number.isInteger(high)) {
        return'ERROR';
    };
    // check if arguments are negative numbers
    if (low < 0 || high < 0) {
        return 'ERROR';
    };
    // check if high value comes first
    if (low > high) {
        let newHigh = low;
        low = high;
        high = newHigh;
    };
    // iterate through range and sum total
    for (let index = low; index <= high; index++) {
        total += index;
    };
    return total;
};

// Do not edit below this line
module.exports = sumAll;
