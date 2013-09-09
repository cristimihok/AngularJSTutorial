var myApp = angular.module('drinkApp', []);

myApp.controller("AppCtrl", function ($scope) {
	$scope.ctrlFlavor = "blackberry";

});

myApp.directive("drink", function () {
	return {
		scope: {
			flavor:"=" //It's expecting an object to combine to.
		},
		template: '<input type="text" ng-model="flavor">',


	}
});
