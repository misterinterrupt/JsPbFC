(function(exports) {
  
  var callbacks = {
        always: [],
        done: [],
        fail: []        
    },
    always = function(cb) {
      callbacks.always.push(cb);
    },
    done = function(cb) {
      callbacks.done.push(cb);
    },
    fail = function(cb) {
      callbacks.fail.push(cb);
    },
    resolve = function() {
      // run the done cbs
      // run the always cbs
      // trigger the promise resolution
    },
    reject = function() {
      // run the fail cbs
      // run the always cbs  
    };
  
  function Promise() {
    this.always = always;
    this.done = done;
    this.fail = fail;
  }
  
  function Future() {
    this._promise = new Promise();
    this.promise = function() {
      return this._promise;
    };
    this.always = this._promise.always;
    this.done = this._promise.done;
    this.fail = this._promise.fail;
    this.resolve = resolve;
    this.reject = reject;

  }
  
  Future.when = function(promises) {
   // return a promise representing multiple promises 
  }
  
  Promise.then = function(operations) {
    // hook onto the promise resolution
    // trigger operations upon promise resolution
  }
  
  module.exports = Future;
})(exports);

// var p1 = new Future(function() {
//   console.log('Now is the time.');
// });
// 
// var p2 = new Future(function() {
//   console.log('It is later than you think.');
// });
// 
// Future.when([p1, p2], function() {
//   
// });
// 
// setTimeout(1000, function() {
//   p1.resolve();
// });
// 
// setTimeout(2500, function() {
//   p2.resolve();
// });
