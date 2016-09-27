var app = angular.module("AngularJS",[]);

app.controller("FirstController", function($scope, $http){
    
    $scope.posts = [];
   
    
    $scope.getPosts = function(){
        console.log('The method getPosts()');
        
        var url = "http://jsonplaceholder.typicode.com/posts";
        $http.get(url)
            .success(function (data){
                console.log(data);
                $scope.posts = data;
            })
            .error(function(error){
                console.log(error);
            });
    }
    
    $scope.getPosts();
    
    
    
});