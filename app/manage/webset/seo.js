var app = angular.module('myApp',[]);
//url request.querystring('name');
var Request = { QueryString : function( key ){ 
		var svalue = window.location.search.match( new RegExp( "[\?\&]" + key + "=([^\&]*)(\&?)", "i" ) ); 
		return svalue ? svalue[1] : svalue; 
	} 
};

app.controller('seo_view', ['$scope', function($scope){
	var id = Request.QueryString('id');
	if(id)
	{
		//angular.element("#edit").hide();
	}else
	{
		//angular.element("#add").hide();
	}
}]);

app.controller('form', ['$scope','$http', function($scope,$http){
	$scope.edit = function(isValid)
	{
		alert(isValid);
	};
	$scope.add = function(isValid)
	{
		alert(2);
	};
}]);

app.controller('repeat', ['$scope', function($scope){
	$scope.list = ['1110','1119','1118','1117','1116','1115','1114','1113','1112'];
}]);