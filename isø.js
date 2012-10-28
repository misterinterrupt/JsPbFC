/**
 * ISØ	isochronous, prioritized task execution mechanism
 */
(function isøDefinition(exports){
	
	var workUnits = {},
		resolutions = {};
	
	// main isø interface is adding a list of prioritized 
	// like this: 
	// [
	//	{
	// 		priority: 0,
	// 		task: function() {"execute me!";},
	//		done: function() {"done.";}
	// 	}, ...
	// ]
	// 
	var isø = function(unitsOfWork) {

		// if not array -> puke
		if(!unitsOfWork || !unitsOfWork.length) return isø;
		// if array, add to workUnits
		for (var i = unitsOfWork.length - 1; i >= 0; i--) {
		
			var unit = unitsOfWork[i];
			if(!workUnits[unit.priority]) {
				workUnits[unit.priority] = [];
			}
			workUnits[unit.priority].push(unit);

			console.log(unitsOfWork[i]['priority']);
		};

		return isø;
	};

	isø.run = function() {
							console.log('running');
							console.dir(workUnits);
							return isø;
						};

	module.exports = isø;

})(exports);