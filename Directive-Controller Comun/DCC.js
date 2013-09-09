var myApp = angular.module('twitterApp', []);

myApp.controller('twitterCtrl', function ($scope) {
	$scope.loadMoreTweets = function () {
		alert("Loading Tweets!");
	}
});

myApp.directive('enter', function () {
	return function (scope, elem, attrs) {
		elem.bind("mouseenter", function () {
			//scope.loadMoreTweets(); <=>
			scope.$apply(attrs.enter);
		});
	}
});
