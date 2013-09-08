var myApp = angular.module('myApp', []);

myApp.factory('Objects', function() {
	var Objects = {};

	Objects.list = [
		{
			name: "cube",
			color: "red"
		},
		{
			name: "circle",
			color: "blue"
		},
		{
			name: "rectangle",
			color: "black"
		}
	];

	return Objects;
});

//provide the Objects model in our scope
function ObjectsCtrl($scope, Objects){
	$scope.objects = Objects;
}