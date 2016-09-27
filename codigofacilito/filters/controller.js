var app = angular.module("mainModule",[]);

app.filter("removeHtml", function(){
    return function(texto){
        return String(texto).replace(/<[^>]+>/gm,'');        
    }
});

app.controller("FiltersController", function($scope){
    
    $scope.mi_html = "<p>Hola mundo angularjs</p>";
    
    $scope.mi_json = {};
    $scope.mi_json.nombre = "Alex";
    $scope.mi_json.apellido = "Caiza";
    
    $scope.costo = 2;
});