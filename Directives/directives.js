var myApp = angular.module('superhero', []);

myApp.directive('superman', function () {
	return {
		
		restrict: "E", 
		template: "<h2> Here I am to save the day</h2>"
	}

});

myApp.directive('batman', function () {
	return {
		restrict: "A",
		link : function () {
			alert("I'm working!");
		}
	}
});

myApp.directive('enter', function () {
	return function (scope, element) {
		element.bind("mouseenter", function () {
			console.log("i'm am inside of this");
		});
	}
});

/* 
	restrictions:
		E : element;
		A : atribute (by default);
		C : class;
		M : comment;
*/