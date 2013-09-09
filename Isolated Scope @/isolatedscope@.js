var myApp = angular.module('drinkApp', []);

myApp.controller("AppCtrl", function ($scope) {
	$scope.ctrlFlavor = "blackberry";

});

myApp.directive("drink", function () {
	return {
		scope: {
			flavor:"@" //takes the flavor attr and 
					   //assigns it to the scope
		},
		template: '<div>{{flavor}}</div>',

		// link: function (scope, elem, attrs) {
		// 	scope.flavor = attrs.flavor;
		// }

	}
});
