const removeFromArray = function(arr, ...entries) {
    return arr.filter(num => !entries.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
