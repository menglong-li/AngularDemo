var app = angular.module('myApp', ['ngKeditor']);
app.controller('footerGet',function($scope,$http) {
	$http.get('http://localhost:8081/about/view/2')
	.success(
		function(res)
		{
			$scope.content = res.content;

		}
	)
	.error(function(e){});
});

app.controller('footerEdit',function($scope,$http){
	$scope.edit = function(isValid)
	{
		if(isValid)
		{
			$.ajax({
				type:"POST",
				url:'http://localhost:8081/about/edit',
				data:{tid:2,content:$scope.content},
				datatype:"jsonp",
				success:function(data)
				{
					if(data > 0)
					{
						location.href = location.href;
					}
				},
				error:function()
				{
					alert('error');
				}
			});
		}
	}
});