function HeaderSide()
{
	//导航展开
	$("#Sidebar label").click(function(){
		$(this).next("ul").animate({height: 'toggle'});
	});
	//响应式导航
	$("#Sidebar .side_visible").click(function(){
		$(".sidebarFirst").animate({height: 'toggle'});
	});
	//顶部菜单
	$(".dropdown").click(function(){
		if($(this).hasClass("on"))
		{
			$(this).removeClass("on");
		}else{
			$(this).addClass("on");
		}
	});

	//side定位
	var anchor = $("#Content .cont_head h2").text();
	$("#Sidebar .side_visible").text(anchor);
	$("#Sidebar .sidebarFirst a").each(function(){
		if($(this).text() == anchor)
		{
			$(this).addClass("active");
			$(this).parents("li").find("label").addClass("active");
		}
	});
}