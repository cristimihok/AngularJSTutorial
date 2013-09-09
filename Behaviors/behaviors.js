var myApp = angular.module('behavior', []);

myApp.directive('enter', function () {
	return function (scope, element, attrs) {
		element.bind("mouseenter", function () {
			element.addClass(attrs.enter);
		});
	}
});

myApp.directive('enter', function () {
	return function (scope, element, attrs) {
		//jquery function
		element.bind("mouseleave", function () {
			element.removeClass(attrs.enter);
		});
	}
});
