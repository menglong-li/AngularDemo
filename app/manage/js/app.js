//Angular-config
var app = angular.module('myApp',[]);
app.config(['$httpProvider','$locationProvider',function($httpProvider,$locationProvider){
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.interceptors.push('Interceptor');

	/*
		*$location.search().name 原url格式为 url.com?#name=123
		*改写为url去掉#符号 url.com?name=123
	*/
	//使用后href不跳转
	// $locationProvider.html5Mode({
	// 	enabled:true,
	// 	requireBase:false
	// });
}]);


//拦截器，用于拦截http
app.factory('Interceptor', ['$q', function($q){
	return {
		//拦截成功:发送HTTP请求到后台之前执行，可验证身份或启动进度条
		request:function(config){
			//增加请求时间戳
			config.requestTimes = new Date().getTime();
			return config;
		},
		//拦截失败:请求中断或被拦截拒绝或异常，可定义撤销，恢复或关闭进度条等；
		requestError:function(err)
		{
			return $q.reject(err);
		},
		//接收到后台反馈后执行
		response:function(res)
		{
			//反回数据时间戳
			res.config.responseTimes = new Date().getTime();
			return res;
		},
		//接收后台反馈失败：包含404，500，-1等；
		responseError:function(err)
		{
			if(-1 == err.status)
			{
				alert("远程服务器无响应");
			}else if(500 == err.status)
			{
				alert("Internal Server Error 500");
			}else if(501 == err.status)
			{
				alert("Error 501");
			}else
			{
				//alert("Error Interceptor："+err.status);
			}
			return $q.reject(err);
		}
	};
}]);

//头部文件include
app.controller('Header', ['$scope', function($scope){
	$scope.side = function()
	{
		HeaderSide();
	}
}]);

//删除数组指定元素
Array.prototype.delete = function(val)
{
	for(var i=0;i<this.length;i++)
	{
		if(this[i]==val)
		{
			this.splice(i,1);
			break;
		}
	}
}

//sideList
//获取url参数
var Request = { QueryString : function( key ){ 
		var svalue = window.location.search.match( new RegExp( "[\?\&]" + key + "=([^\&]*)(\&?)", "i" ) ); 
		return svalue ? svalue[1] : svalue; 
	} 
};