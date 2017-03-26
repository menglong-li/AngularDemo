//index list
app.controller('index', ['$scope','$http','IndexList2', function($scope,$http,IndexList2){
	//类别
	$scope.type = ["首页","企业简介","产品中心","新闻中心","在线留言","联系我们"];
	$scope.state = ["关闭","开启"];
	$http.get('/api/manage/seo/index')
	.success(function(data){
		$scope.list = data;
	})
	.then(function(response){
		//发送和请求时间戳
		//var times = response.config.responseTimes - response.config.requestTimes;
		//console.log(times/1000+"s");
	});

	//checkbox参数临时数组
	var cbox = [];
	
	IndexList2.load($scope);

}]);

//add
//页面初始化
app.controller('seo_add', ['$scope', function($scope){
	var id = Request.QueryString('s');
	if(id)
	{
		angular.element("#add").hide();
	}else
	{
		angular.element("#edit").hide();
	}
}]);
//提交按钮
app.controller('form', ['$scope','$http', function($scope,$http){
	$scope.add = function()
	{
		$http.post('/api/manage/seo/add', $.param($scope.seo))
		.success(function(data){
			if(data>0)
			{
				window.location.href = "index.html";
			}
		});
	};
	$scope.edit = function()
	{
		alert(isValid);
	};
}]);
