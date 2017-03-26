//注册分页组件
app.requires.push('ml.page');
app.factory('indexlist', ['$http',function($http){
	return {
		load:function(tname,$scope)
		{
			$scope.pageconf = {
				size : 15,//显示行数
				current : 1,//当前页
				pagelength : 9//页码长度,需奇数
			};
			//列表数据查询,wheres搜索条件
			function getList()
			{
				var wheres = {
					'pagesize' : $scope.pageconf.size,
					'pagecurrent' : $scope.pageconf.current
				};
				wheres = $.extend({},wheres,$scope.where);
				$http.get('/api/manage/'+tname+'/index',{
					params:wheres
				})
				.success(function(data){
					$scope.pageconf.count = data.total;
					$scope.list = data.data;
				})
				.then(function(response){
					//发送和请求时间戳
					//var times = response.pageconfig.responseTimes - response.pageconfig.requestTimes;
					//console.log(times/1000+"s");
				});
			}
			$scope.$watch(function(){
				var newValue = $scope.pageconf.current;
				for(key in $scope.where)
				{
					newValue += $scope.where[key];
				}
				return newValue;
			},getList);

			//全选/取消
			var params = [];//参数数组
			var arrindex = [];//list下标数组
			$scope.checkall = function(che)
			{
				params = [],arrindex = [];
				if(che === true)
				{
					for(var i=0;i<$scope.list.length;i++)
					{
						params.push($scope.list[i].id);
						arrindex.push(i);
						//全选以后，在取消任一一个单项的时候，model-z的状态是undefined,所以补上z=true
						//不=true也行，undefined也会走else。
						$scope.z = true;
					}
				}
			}
			//单选
			$scope.checlick = function(z,index)
			{
				if(z)
				{
					params.push($scope.list[index].id);
					arrindex.push(index);
				}else
				{
					params.delete($scope.list[index].id);
					arrindex.delete(index);
				}
			},
			//单删
			$scope.delete = function(i)
			{
				if(confirm("确定要删除吗？"))
				{
					$http({
						method:'post',
						url:'/api/manage/indexlist/delete',
						params:{
							"tname":tname,
							"id":$scope.list[i].id
						}
					})
					.success(function(data){
						if(data>0)
						{
							$scope.list.splice(i,1);
						}
					});
				}
			},
			//全删
			$scope.delall = function()
			{
				if(params.length > 0)
				{
					if(confirm("确定要删除吗？"))
					{
						$http({
							method:'post',
							url:'/api/manage/indexlist/delall',
							params:{
								'tname' : tname,
								id:params.join(",")
							}
						})
						.success(function(data){
							if(data>0)
							{
								for(var i=0;i<arrindex.length;i++)
								{
									$scope.list.splice(arrindex[i],1);
								}
							}
						});
					}
				}
			},
			//全启动
			$scope.onall = function()
			{
				if(params.length > 0)
				{
					if(confirm("确定要开启吗？"))
					{
						$http({
							method:'post',
							url:'/api/manage/indexlist/onall',
							params : {
								'tname' : tname,
								'id':params.join(",")
							}
						})
						.success(function(data){
							if(data>0)
							{
								//无刷新显示改变后状态值
								for(var i=0;i<arrindex.length;i++)
								{
									$scope.list[arrindex[i]]["state"] = 1;
								}
							}
						});
					}
				}
			},
			//全关闭
			$scope.offall = function()
			{
				if(params.length > 0)
				{
					if(confirm("确定要关闭吗？"))
					{
						$http({
							method:'post',
							url:'/api/manage/indexlist/offall',
							params : {
								'tname' : tname,
								id:params.join(",")
							}
						})
						.success(function(data){
							if(data>0)
							{
								//无刷新显示改变后状态值
								for(var i=0;i<arrindex.length;i++)
								{
									$scope.list[arrindex[i]]["state"] = 0;
								}
							}
						});
					}
				}
			}
		}
	};
}]);