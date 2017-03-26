var app = angular.module('myApp',[]);
app.controller('getfooter',function($scope,$http){
	$http.get("http://localhost:8081/index.php/index/Index/index").success(function(response){$scope.content = response;}).error(function(e){});
});