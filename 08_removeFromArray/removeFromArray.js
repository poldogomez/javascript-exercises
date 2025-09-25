const removeFromArray = function(arr, ...items) {
    const removed = arr.filter((element) => element != items);
    return removed;
};
//console.table(removeFromArray([1, 2, 3, 4, 5], 3));
// Do not edit below this line
module.exports = removeFromArray;
