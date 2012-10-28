function laterDefinition() {
  var funcs = [];
  return {
           later: function(f){ funcs.push(f);},
           now: function() { for(var i=0; i < funcs.length; i++) { funcs[i](); } },
           procrastinating: function() { return funcs; }
  };
}

later.later(function(){console.log('no time like '+ new Date() )});
later.later(function(){console.log('no time like '+ new Date() )});
later.later(function(){console.log('no time like '+ new Date() )});
later.procrastinating();
later.now();