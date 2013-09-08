var myApp = angular.module('myApp', []);
myApp.factory('Data', function (){
	return {message: "I'm data from service.."}
});

myApp.filter('reverse', function (){
	return function (txt){
		return txt.split("").reverse().join("");
	}
})

function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;

  $scope.reverseMsg = function (msg) {
  	return msg.split("").reverse().join("");
  }
}