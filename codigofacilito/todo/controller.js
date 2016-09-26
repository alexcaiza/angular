var app = angular.module("ToDoList",["LocalStorageModule"]);

app.controller("ToDoController", function($scope, localStorageService){
    if (localStorageService.get('angular-todolist')) {
        $scope.todo = localStorageService.get('angular-todolist');
    } else {
        $scope.todo = [];    
    }
    
    $scope.newActividad = {};
    
    /*
        actividad: 'Terminar curso angular codigofacilito',
        fecha: '2016-09-31 14:00'
    */
    
    $scope.addActividad = function(){
        console.log('The method addActividad()');
       
        $scope.todo.push($scope.newActividad);
        $scope.newActividad = {};
    }
    
    $scope.$watchCollection('todo', function(newValue, oldValue){
        localStorageService.set('angular-todolist', $scope.todo);
    }
    );
    
    $scope.cleanActividades = function(){
        console.log('The method cleanActividades()');
       
        $scope.todo = [];
        
        
    }
    
});

