const sumAll = function(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number") {
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR";
    }
    else if (Math.floor(a) - a != 0 || Math.floor(b) - b != 0) {
        return "ERROR";
    };

    let start;
    let end;

    if (a < b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    };

    let sum = 0;
        for (let i = start; i <= end; i++) {
        sum += i};
    return sum
};


// Do not edit below this line
module.exports = sumAll;
