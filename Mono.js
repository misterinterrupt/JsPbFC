var deferred = require('defferred');

/**
 * mono is an isochronous, prioritized task execution mechanism
 */
(function monoDefinition(exports){
	
	var workUnits = {},
		resolutions = {};
	
	// mono api adding prioritized functions and callbacks to a hash
	// objects should have these properties:
	// priority: <Number>, task: <Deferred>
	// the queue will always execute the highest priority next
	// it prioritizes responses over the initial requests for execution
	// this way, if there is a response to an execution, it will deliver its
	// payload before more requests are made.
	
	var mono = function mono(unitsOfWork) {

		var unit, unitPromise, i;
		// if not array -> puke
		if(!unitsOfWork || !unitsOfWork.length) return mono;
		
		// process the array passed as an argument
		for (i = unitsOfWork.length - 1; i >= 0; i--) {
		
			unit = unitsOfWork[i];
			// ignore non deferreds at least for now
			if(!unit.promise && unit.resolve) continue;
			// when the dfd is resolved, moved on
			unitPromise = unit.always(onUnitExecuted);

			// make the key for the requested priority if !exists
			if(!workUnits[unit.priority]) workUnits[unit.priority] = [];

			

			workUnits[unit.priority].push(unit);

			console.log("Function with priority " + unit['priority'] + " added.");
		}

		return mono;
	};

	mono.onUnitResolved = function(unit) {
							console.log('just ran ');
							console.dir(workUnits);
							return mono;
						};

	module.exports = mono;

})(exports);
