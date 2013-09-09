var myApp = angular.module('superApp', []);

myApp.directive("superhero", function () {
	return {
		restrict: "E",
		
		scope: {}, //isolated scope (don't share/inherit from other scopes)
		
		controller: function ($scope) {
			$scope.abilities = [];

			this.addStrength = function () {
				$scope.abilities.push("strength");
			}

			this.addSpeed = function () {
				$scope.abilities.push("speed");
			}

			this.addFlight = function () {
				$scope.abilities.push("flight");
			}
		},

		link: function(scope, elem) {
			elem.bind('mouseenter', function () {
				console.log(scope.abilities);
			});
		}
	}
});

myApp.directive("strength", function () {
	return {
		require: "superhero",
		link: function (scope, elem, attrs, superheroCtrl){
			superheroCtrl.addStrength();
		}
	}
});


myApp.directive("speed", function () {
	return {
		require: "superhero",
		link: function (scope, elem, attrs, superheroCtrl){
			superheroCtrl.addSpeed();
		}
	}
});


myApp.directive("flight", function () {
	return {
		require: "superhero",
		link: function (scope, elem, attrs, superheroCtrl){
			superheroCtrl.addFlight();
		}
	}
});