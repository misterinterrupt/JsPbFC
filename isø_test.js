// usage

var isø = require('./isø');

var taskList = [
		{
			priority: 25,
			task: function task1() {
				console.log('executing ' + task1.name);
				return "task 1 result";
			},
			done: function task1Done(result) {
				console.log("task 1 produced a result");
				console.dir(result);
			},
		},
		{
			priority: 100,
			task: function task2() {
				console.log('executing ' + task2.name);
				return "task 2 result";
			},
			done: function task2Done(result) {
				console.log("task 2 produced a result");
				console.dir(result);
			},
		},
		{
			priority: 0,
			task: function task3() {
				console.log('executing ' + task3.name);
				return "task 3 result";
			},
			done: function task3Done(result) {
				console.log("task 3 produced a result");
				console.dir(result);
			},
		},
		{
			priority: 100,
			task: function task4() {
				console.log('executing ' + task4.name);
				return "task 4 result";
			},
			done: function task4Done(result) {
				console.log("task 4 produced a result");
				console.dir(result);
			},
		},
]; // taskList

isø(taskList).run()(taskList)()()()();

