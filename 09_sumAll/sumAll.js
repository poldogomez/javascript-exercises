const sumAll = function(low, high) {
    let total = 0;
    if (low < 0 || high < 0) {
        return 'ERROR';
    };
    for (let index = low; index <= high; index++) {
    total += index;
    };
    return total;
};

// Do not edit below this line
module.exports = sumAll;
