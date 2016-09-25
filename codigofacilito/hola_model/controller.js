var app = angular.module("AngularJS",[]);

app.controller("FirstController", function($scope){
    $scope.nombre = "Alex Caiza M."; 
    $scope.comentario = {};
    $scope.comentarios = [
        {
            descripcion : "Buen tutorial",
            usuario : "Alex"
        },
        {
            descripcion : "Mal tutorial",
            usuario : "Raul"
        }
    ]; 
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.comentario);
        $scope.comentario = {};
    };
});