const removeFromArray = function(arr, item) {
    const removed = arr.filter((element) => element !== item);
    return removed;
};
//console.table(removeFromArray([1, 2, 3, 4, 5], 3));
// Do not edit below this line
module.exports = removeFromArray;
