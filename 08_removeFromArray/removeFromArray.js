const removeFromArray = function(arr, ...items) {
    const removed = arr.filter((element) => !items.includes(element));
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
