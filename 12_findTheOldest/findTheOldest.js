const findTheOldest = function(people) {
    console.log(people)
    const sortByAge = people.sort((a,b) => {
       
        if (!a.yearOfDeath) {
            let currentYear = new Date().getFullYear();            console.log(currentYear)
            ageOfa = currentYear - a.yearOfBirth
        }
        else {
            ageOfa = a.yearOfDeath - a.yearOfBirth
        }
        console.log(a.name + ": " + ageOfa)

        if (!b.yearOfDeath) {
            let currentYear = new Date().getFullYear();
            ageOfb = currentYear - b.yearOfBirth
        }
        else {
            ageOfb = b.yearOfDeath - b.yearOfBirth
        }
        console.log(b.name + ": " + ageOfb)
        
        return ageOfa < ageOfb ? 1 : -1
    })
    const oldest = sortByAge[0]
    console.log(oldest);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
