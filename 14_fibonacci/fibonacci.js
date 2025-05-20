const fibonacci = function(input) {
    const num = Number(input);
    let a = 0;
    let b = 1;
    if (num < 0) {
        return "OOPS";
    } else if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    for (let i = 2; i <= num; i++) {
      let temp = b;
      b = temp + a;
      a = temp;
      console.log([a, b, temp])};
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
