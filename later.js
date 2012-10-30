

function laterDefinition() {
  var funcs = [];
  return {
           later: function(f){ funcs.push(f);},
           now: function() { for(var i=0; i < funcs.length; i++) { funcs[i](); } },
           procrastinate: function() { /* what is the equivalent of the C sleep function in js? */ },
           whatElse: function() { return funcs; }
  };
}

var testFunc = function(){
	console.log("there's no time like " + new Date());
};

// simple test

later.later(testFunc);
later.later(testFunc);
later.later(testFunc);

later.procrastinate();

later.now();