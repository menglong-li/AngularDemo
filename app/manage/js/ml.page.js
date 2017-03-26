/*
*<my-page conf="pageconf"></my-page>
*pageconf{size,current,pagelength,count}
*size:数据行数
*current:当前页码
*pagelength:页码长度，需奇数
*count:总数据数
*/
angular.module('ml.page', []).directive("myPage",[function(){
	return{
		restrict: 'EA',
		replace:true,//是否替换元素
		scope:{
			conf : "="
		},
		template : '<ul class="pagination">'+
				'<li ng-class="{disabled:conf.current == 1}" ng-click="PrevPage()"><span>上一页</span></li>'+
'<li ng-repeat="x in pageList track by $index" ng-click="CurrentPage(x)" ng-class="{active:conf.current == x}">'+
'<span>{{x}}</span></li>'+
				'<li ng-class="{disabled:conf.current == conf.pagesmax}" ng-click="NextPage()"><span>下一页</span></li>'+
				'<li class="text">第 <input type="text" class="num" ng-model="jumpPageNum" ng-keyup="jumpTo()"> 页/</li>'+
				'<li class="text">共:{{conf.count}}条</li>'+
				'</ul>',
		link:function(scope, element, attrs)
		{
			function getPagination()
			{
				scope.pageList = [];
				scope.conf.pagesmax = parseInt(Math.ceil(scope.conf.count/scope.conf.size));//共多少页
				scope.jumpPageNum = scope.conf.current;
				//循环页码
				if(scope.conf.pagesmax <= scope.conf.pagelength)
				{
					for(var i=1;i<=scope.conf.pagesmax;i++)
					{
						scope.pageList.push(i);
					}
				}else
				{//1右边有...；2左边...；3两边...
					var half = (scope.conf.pagelength - 1)/2;
					if(scope.conf.current <= half)
					{
						for(var i=1;i<=(scope.conf.pagelength - 2);i++)
						{
							scope.pageList.push(i);
						}
						scope.pageList.push("...");
					}else if(scope.conf.current >= scope.conf.pagesmax - half)
					{
						scope.pageList.push(1);
						scope.pageList.push("...");
						for(i = half + 2; i >= 1; i--){
                            scope.pageList.push(scope.conf.pagesmax - i);
                        }
					}else
					{
						scope.pageList.push(1);
						scope.pageList.push("...");
						for(var i = Math.ceil(half/2); i >= 1; i--)
						{
							scope.pageList.push(scope.conf.current -i);
						}
						scope.pageList.push(scope.conf.current);
						for(var i = 1; i <= half/2; i++)
						{
							scope.pageList.push(scope.conf.current +i);
						}
						scope.pageList.push("...");
					}
					scope.pageList.push(scope.conf.pagesmax);
				}
			}
            
            //页码翻页
            scope.CurrentPage = function(x)
            {
            	scope.conf.current = x;
            }
            //上一页
            scope.PrevPage = function()
            {
            	if(scope.conf.current > 1)
            	{
					scope.conf.current -= 1;
            	}
            }
            //下一页
            scope.NextPage = function()
            {
            	if(scope.conf.current < scope.conf.pagesmax)
            	{
					scope.conf.current += 1;
            	}
            }
            // 跳转页
            scope.jumpTo = function(){
            	var jumpPageNum = /^[^0][0-9]*$/;
                if(jumpPageNum.test(scope.jumpPageNum)){
					if(scope.jumpPageNum <= scope.conf.pagesmax)
					{
						scope.conf.current = scope.jumpPageNum;
					}else
					{
						scope.conf.current = scope.jumpPageNum = scope.conf.pagesmax;
					}
                }else
                {
                	scope.jumpPageNum = scope.conf.current;
                }
            };
			//监听翻页变化
            scope.$watch(function(){
                var newValue = scope.conf.count+'-'+scope.conf.current;
                return newValue;
            }, getPagination);
		}
	}
}]);