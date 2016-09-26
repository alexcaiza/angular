var app = angular.module("AngularJS",[]);

app.controller("FirstController", function($scope, $http){
    
    $scope.posts = [];
    $scope.newPost = {};
    
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
    
    $scope.addPost = function(){
        console.log('The method addPost()');
        var url = "http://jsonplaceholder.typicode.com/posts";
        $http.post(url, 
            {
                title: $scope.newPost.title, 
                body: $scope.newPost.body, 
                userId: 1 
            }
            )
            .success(function (data, status, headers, config){
                console.log(data);
                $scope.posts.push($scope.newPost);
                $scope.newPost = {};
            })
            .error(function(error, status, headers, config){
                console.log(error);
            }); 
    }
    
});