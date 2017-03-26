app.controller('index', ['$scope','indexlist', function($scope,indexlist){
	//类别
	$scope.type = ["首页","企业简介","产品中心","新闻中心","在线留言","联系我们"];
	$scope.states = ["关闭","开启"];
	indexlist.load('seo',$scope);
}]);