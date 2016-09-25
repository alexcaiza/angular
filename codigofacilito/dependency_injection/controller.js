// Declaracion del modula, y las dependencias que va a utilizar
var app = angular.module("AngularJS",[]);

app.controller("FirstController", ["$scope", "$http", function(scope_, http_){
    scope_.nombre = "Alex Caiza M."; 
    scope_.comentario = {};
    scope_.comentarios = [
        {
            descripcion : "Buen tutorial",
            usuario : "Alex"
        },
        {
            descripcion : "Mal tutorial",
            usuario : "Raul"
        }
    ]; 
    scope_.agregarComentario = function(){
        scope_.comentarios.push(scope_.comentario);
        scope_.comentario = {};
    };
}]);