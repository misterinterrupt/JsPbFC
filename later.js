function laterDefinition() {
  var funcs = [];
  return {
           later: function(f){ funcs.push(f);},
           now: function() { for(var i=0; i < funcs.length; i++) { funcs[i](); } },
           procrastinating: function() { /* equivalent of sleep function */ },
           whatElse: function() { return funcs; }
  };
}

var testFunc = function(){
	console.log('no time like ' + new Date());
};

// simple test

later.later(testFunc);
later.later(testFunc);
later.later(testFunc);

later.procrastinating();

later.now();