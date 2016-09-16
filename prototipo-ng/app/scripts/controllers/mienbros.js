'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MienbrosCtrl
 * @description
 * # MienbrosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
.controller('MienbrosCtrl', function ($scope, $http, $modal) {
    
	$http.get('http://localhost:9000/miembros.json')
	.success(function(data){
		console.log(data);
		$scope.miembros = data;
	});
	
	$scope.gridOptions = {
		data: 'miembros',
		enableSorting: true,
		enableCellSelection: true,
		enableRowSelection: true,
		enableCellEdit: true,
		columnDefs: [
			{field:'no', displayName: 'N°.'},
			{field:'nombre', displayName: 'Nombre'},
			{field:'fidelidad', displayName: 'Puntos Fidelidad'},
			{field:'fechaUnion', displayName: 'Fecha de Union'},
			{field:'tipoMiembro', displayName: 'Tipo de Miembro'},
		]
	};
	
	$scope.showModal = function() {
		$scope.nuevoMiembro={};
		var modalInstance = $modal.open({
			templateUrl: 'views/add-miembros.html',
			controller: 'AddNuevoMiembroCTrl',
			resolve: {
				nuevoMiembro : function () {
					return $scope.nuevoMiembro;
				}
			}
		});
		
		modalInstance.result.then(function(selectedItem){
			$scope.miembros.push({
				no:$scope.miembros.length + 1,
				nombre:$scope.nuevoMiembro.nombre,
				tipoMiembro:$scope.nuevoMiembro.tipoMiembro,
				fidelidad:$scope.nuevoMiembro.fidelidad,
				fechaUnion:$scope.nuevoMiembro.fechaUnion
			});
		});
	};
	//$scope.salvarNuevoMiembro = function(){}
  }) 
.controller('AddNuevoMiembroCTrl', function ($scope, $modalInstance, nuevoMiembro) {
	$scope.nuevoMiembro = nuevoMiembro;
	
	$scope.salvarNuevoMiembro = function() {
		$modalInstance.close(nuevoMiembro);
	}
	
	$scope.cancelAdd=function(){
		$modalInstance.dismiss('cancel');
	};
	
	
});
