var myApp = angular.module('myApp', []);
myApp.factory('Data', function (){
	return {message: "I'm data from service.."}
});

function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;

  $scope.reverseMsg = function (msg) {
  	return msg.split("").reverse().join("");
  }
}