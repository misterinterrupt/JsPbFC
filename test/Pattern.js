var Routine = require('../Routine.js'),
    Pattern = require('../Pattern.js');


var happyDaze = new Routine(
  new Pattern([
    function() {
      return 'hey 1 time';
    },
    function() {
      return 'hey for the 2nd time';
    },
    function() {
      return 'hey, this is the 3rd time';
    }]
  )
);

console.log(happyDaze());
// hey 1 time
console.log(happyDaze());
// hey for the 2nd time
console.log(happyDaze());
// hey 3rd time
console.log(happyDaze());
// null
console.log(happyDaze());
happyDaze.reset();
//
console.log(happyDaze());
// hey 1 time
console.log(happyDaze());
// hey for the 2nd time
console.log(happyDaze());
// hey 3rd time
console.log(happyDaze());
// null