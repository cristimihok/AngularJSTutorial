var myApp = angular.module('phoneApp', []);

myApp.controller("AppCtrl", function ($scope) {
	$scope.callHome = function () {
		alert("called home..");
	}
});

myApp.directive("phone", function () {
	return {
		scope: {
			dial: "&" //dial = callHome()
		},
		//dial() = dial = callHome()
		template: '<div ng-click="dial()">Call home!</div>'
	}
});
