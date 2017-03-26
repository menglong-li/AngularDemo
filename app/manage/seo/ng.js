//index list
app.controller('index', ['$scope','indexlist', function($scope,indexlist){
	//类别
	$scope.type = ["首页","企业简介","产品中心","新闻中心","在线留言","联系我们"];
	$scope.states = ["关闭","开启"];
	//checkbox参数临时数组
	indexlist.load("seo",$scope);

	//查询按钮，因查询条件及字段名不同，按钮不做通用处理
	$scope.serach = function()
	{
		$scope.pageconf.current = 1;//复位第一页
		$scope.where = {}
		if($scope.tid != "00")
		{
			$scope.where.tid = $scope.tid;
		}else
		{
			delete $scope.where.tid;
		}
		if($scope.t != "" && $scope.t != undefined)
		{
			$scope.where.t = $scope.t;
		}else
		{
			delete $scope.where.t;
		}
	}
}]);

//add
//页面初始化
app.controller('seo_add', ['$scope','$http', function($scope,$http){
	var id = Request.QueryString('s');
	if(id)
	{//修改
		angular.element("#add").hide();
		$scope.seo = {};
		$http.get('/api/manage/seo/sel',{params:{"id":id}}).success(function(data){
			if(data != null)
			{
				$scope.seo = data;
				$scope.seo.tid = $scope.seo.tid+"";//因数据库tid字段是int类型，ng-init不能设置选中，故转为字符串类型
				$scope.seo.state = $scope.seo.state+"";
				console.log($scope.seo);
			}
		});

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
		$http.post('/api/manage/seo/edit', $.param($scope.seo))
		.success(function(data){
			if(data>0)
			{
				window.location.href = "index.html";
			}
		});
	};
}]);
