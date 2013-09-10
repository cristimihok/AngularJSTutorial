var myApp = angular.module('myApp', []);

var myAppStuff = {};

myAppStuff.controllers = {};

myAppStuff.controllers.AppCtrl = function ($scope) {
	this.sayHi = function () {
		alert("Hi!");
	}
}

myAppStuff.directives = {};

myAppStuff.directives.panel = function () {
	return {
		restrict: "E"
	}
}

myApp.directive(myAppStuff.directives);
myApp.controller(myAppStuff.controllers);