function getAge(person) {
    let thisYear = new Date().getFullYear();
    if (!("yearOfDeath" in person)) {
        return thisYear - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let oldestAge = getAge(oldest);
        let currentPersonAge = getAge(person);
        if (oldestAge > currentPersonAge) {
            return oldest;
        }
        return person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
