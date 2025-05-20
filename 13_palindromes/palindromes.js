function checkAlphanumeric(char) {
    code = char.toString().charCodeAt(0);
    return !(!(code > 47 && code < 58) &&
             !(code > 64 && code < 91) &&
             !(code > 96 && code < 123));
};

function extractAlphanumeric(string) {
    return (string.toLowerCase()
                  .split("")
                  .filter((char) => checkAlphanumeric(char))
                  .join("")
    );
};

function reverseString(string) {
    return string.split("").reverse().join("");
}

const palindromes = function (string) {
   return extractAlphanumeric(string) === reverseString(extractAlphanumeric(string));
};

// Do not edit below this line
module.exports = palindromes;
