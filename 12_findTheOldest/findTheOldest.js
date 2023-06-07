const get_age = function (birth, death) {
    if (!death) {
          death = new Date().getFullYear();
        }
        return death - birth;
};
const findTheOldest = function (array) {
    return array.reduce((oldest, curr) => {
      const oldest_age = get_age(oldest.yearOfBirth, oldest.yearOfDeath);
      const current_age = get_age(
        curr.yearOfBirth,
        curr.yearOfDeath
      );
      return oldest_age < current_age ? curr : oldest;
    });
};
  

  

// Do not edit below this line
module.exports = findTheOldest;
