'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MienbrosCtrl
 * @description
 * # MienbrosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp').controller('MienbrosCtrl', function ($scope, $http) {
    
	$http.get('http://localhost:9000/miembros.json')
	.success(function(data){
		console.log(data);
		$scope.miembros = data;
	});
	
	$scope.gridOptions = {
		data: 'miembros',
		columnDefs: [
			{field:'no', displayName: 'N°.'},
			{field:'nombre', displayName: 'Nombre'},
			{field:'fidelidad', displayName: 'Puntos Fidelidad'},
			{field:'fechaUnion', displayName: 'Fecha de Union'},
			{field:'tipoMiembro', displayName: 'Tipo de Miembro'},
		]
	};
	
	/*
	$http.get('http://localhost:9000/galeria.json')
	.then(function(response){
		console.log(response);
      $scope.miembros = response.data;
    }, function(){
		console.log("Error en el http.get request");
	});﻿
	
	$scope.gridOptions = {
		data: 'miembros'
	};
	*/
	
  });
