/*
 * Routines are called to continuously
 * execute ordered operations. These 
 * operations must be passed in as a 
 * Pattern of Function objects.
 */
var Pattern = require('./Pattern.js');

(function(exports) {
  
  var ConstructError = 
        Error('Construct Routine with a Pattern of Function objects.'),
      Routine = function(operations) {
        
        if((typeof operations.next !== 'function') ||
           (typeof operations.length !== 'function')) {
             throw ConstructError;
           }
        for(var i=0;i<operations.length;i++) {
          if(typeof operations.data[i] !== 'function') {
            throw ConstructError;
          }
        }
        
        var ops = operations,
            numOps = ops.length(),
            timesCalled = 0,
            instance = function () {
              timesCalled += 1;
              if(timesCalled > numOps) {
                timesCalled = numOps + 1;
                return null;
              }

              return ops.next()();
            };
            instance.reset = function(){
              timesCalled = 0;
              ops.reset();
            };
        return instance;
      };
  
  module.exports = Routine;
})(exports);
