var myApp = angular.module('phoneApp', []);

myApp.controller("AppCtrl", function ($scope) {
	$scope.callHome = function (message) {
		alert('call ' + message);
	}
});

myApp.directive("phone", function () {
	return {
		scope: {
			dial: "&" //dial = callHome()
		},
		//dial() = dial = callHome()
		template: '<input type="text" ng-model="value">' +
			'<div ng-click="dial({message:value})">Call home!</div>'
	}
});
