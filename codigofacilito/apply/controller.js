var app = angular.module("mainModule",[]);

app.controller("ApplyController", function($scope){
    
    $scope.nombre = "Alex";
    
    document.querySelector("#botonID").addEventListener("click", function(){
        $scope.$apply(function(){
            $scope.nombre = "Alex Raul Caiza Morillo";
        });
    });
    
});