'use strict';

/**
 * @ngdoc function
 * @name tareasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareasApp
 */
angular.module('tareasApp').controller('MainCtrl', function ($scope, localStorageService) {
    // Lee desde una array estatico
	/*
	$scope.tareas = [
      'HTML5',
      'AngularJS',
      'Karma',
	  'Bower',
	  'Yomean',
	  'Node',
	  'Npm'
    ];
	*/
	
	//$scope.tareas = [];
	
	//Lee desde el almacenamiento local	
	var tareasEnAlmacen = localStorageService.get('tareas');
	$scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
	$scope.$watch('tareas', function() {
		localStorageService.add('tareas', $scope.tareas.join('\n'));
	}, true);
		
	$scope.addTarea = function() {
		$scope.tareas.push($scope.tarea);
		$scope.tarea = '';
	};
	
	$scope.eliminarTarea = function(index) {
		$scope.tareas.splice(index, 1);
	};
	
	
  });
