var myApp = angular.module('choreApp', []);

myApp.controller("ChoreCtrl", function ($scope) {
	$scope.logChore = function (chore) {
		alert(chore + "is done");
	}
});

myApp.directive("kid", function () {
	return {
		restrict: "E",
		scope: {
			done:"&"
		},
		template: '<input type="text" ng-model="chore"> {{chore}} <br/>' + 
			'<div ng-click="done({chore:chore})">Im done! </div>'			
	}

});