$(document).ready(function(){
	// 导航栏《职业学校》star
	$("#school").mouseover(function(){
		$(this).css("color","rgb(53, 181, 88)");
		$("#aIcon1").css({
			"borderTop":"1px solid rgb(53, 181, 88)",
			"borderLeft":"1px solid rgb(53, 181, 88)",
		});
		$(".zhiye").css({
			"display":"block",
			"opacity":"1"
		});
	}).mouseout(function(){
		$(this).css("color","#000000");
		$("#aIcon1").css({
			"borderTop":"1px solid #c1c1c1",
			"borderLeft":"1px solid #c1c1c1",
		});
		$(".zhiye").hide();
	});
	// 导航栏《职业学校》end
	// 导航栏《会员课程》star
	$("#vipLesson").mouseover(function(){
		$(this).css("color","rgb(53, 181, 88)");
		$("#aIcon2").css({
			"borderTop":"1px solid rgb(53, 181, 88)",
			"borderLeft":"1px solid rgb(53, 181, 88)",
		});
		$("#vip").css({
			"display":"block",
			"opacity":"1"
		});
	}).mouseout(function(){
		$("#aIcon2").css({
			"borderTop":"1px solid #c1c1c1",
			"borderLeft":"1px solid #c1c1c1",
		});
		$("#vip").hide();
	});
	// 导航栏《会员课程》end
	// 导航栏《极客社区》star
	$("#community").mouseover(function(){
		$(this).css("color","rgb(53, 181, 88)");
		$("#aIcon3").css({
			"borderTop":"1px solid rgb(53, 181, 88)",
			"borderLeft":"1px solid rgb(53, 181, 88)",
		});
		$("#com").css({
			"display":"block",
			"opacity":"1"
		});
	}).mouseout(function(){
		$(this).css("color","#000000");
		$("#aIcon3").css({
			"borderTop":"1px solid #c1c1c1",
			"borderLeft":"1px solid #c1c1c1",
		});		
		$("#com").hide();
	});
	// 导航栏《极客社区》end
	// 导航栏《极客学校app》star
	$("#appicon").mouseover(function(){
		$("#jikeApp").css({
			"display":"block",
			"opacity":"1",
		});
	}).mouseout(function(){
		$("#jikeApp").hide();
	});
	// 导航栏《极客学校app》end
	// 导航栏《学生个人认证中心》star
	$(".logged").mouseover(function(){
		$(".submenu").css({
			"display":"block",
			"opacity":"1",
		});
	}).mouseout(function(){
		$(".submenu").hide();
	});
	// 导航栏《学生个人认证中心》end
	// 搜索栏
	$("#searchBtn").click(function(){
		$(".searchbox").show(1000);
	})
	$("#closeBtn").click(function(){
		$(".searchbox").hide();
	});
	// 中间部分
	$(".bd-list li").hover(function(){
		$(".listShow",this).show();
	},function(){
		$(".listShow",this).hide();
	});
	$(".sortMode dl").hover(function(){
		$(this).css("height","auto");
		$(this).addClass("dlnew");		
		$("dd",this).show();
		$(".arrow",this).css("opacity","0");
	},function(){
		$(this).css("height","36px");
		$(this).removeClass("dlnew");
		$("dd",this).hide();
		$(".arrow",this).css("opacity","1");
	});
	$("#list2 li").hover(function(){
		$(".lessonplay",this).css("opacity","1");
	},function(){
		$(".lessonplay",this).css("opacity","0")
	});
	$("#list1 li").hover(function(){
		$(".cj",this).css("display","block");
		$(".learn",this).css("display","block");
		$(".lessonplay",this).css("opacity","1");
		$(".lessonInfor",this).css("height","167px");
		$(".keshi",this).css("bottom","59px");
		$(".lessonInfor p",this).css({
			"height":"36px",
			"opacity":"1",
			"display":"block",
		});
	},function(){
		$(".cj",this).css("display","none");
		$(".learn",this).css("display","none");
		$(".lessonplay",this).css("opacity","0");
		$(".lessonInfor",this).css("height","80px");
		$(".keshi",this).css("bottom","22px");
		$(".lessonInfor p",this).css({
			"height":"0",
			"opacity":"0",
			"display":"none",
		});
	});
	// 页面加载star
	$(".page_div3").paging({
        total: 8,
        url: "/job8/lesson.html",
        animation: false,
        centerBgColor: "#fff",
        centerFontColor: "#000",
        centerBorder: "1px solid #ddd",
        transition: "all .2s",
        centerHoverBgColor: "#25dd3d",
        centerHoverBorder: "1px solid #25dd3d",
        centerFontHoverColor: "#fff",
        otherFontHoverColor: "#fff",
        otherBorder: "1px solid #ddd",
        otherHoverBorder: "1px solid #25dd3d",
        otherBgColor: "#fff",
        otherHoverBgColor: "#25dd3d",
        currentFontColor: "#fff",
        currentBgColor: "#f79898",
        currentBorder: "1px solid #f79898",
        fontSize: 13,
        currentFontSize: 13,
        cormer: 2,
        gapWidth: 3,
        showJump: true,
        submitStyle: "href",
        firstAjaxSubmit: true,
        jumpBgColor: "#fff",
        jumpFontHoverColor: "#fff",
        jumpHoverBgColor: "#25dd3d",
        jumpBorder: "1px solid #ddd",
        jumpHoverBorder: "1px solid #25dd3d",
    });
    var current_url = window.location.href;
    var first=$(".otherBtns").first();
    if(current_url.split("=").length>1){
        page_num = parseInt(current_url.split("=")[1]);
        $(".jkLesson").load("list"+ page_num +".html",function(){
	    	$("#page").css("marginTop","40px");
			$(".previewMode .fkList").click(function(){
				$("#list1").css("display","block");
				$("#list1 ul").css("height","2200px");
				$("#page").css("marginTop","-70px");
				$("#list2").css("display","none");
			});
			$(".previewMode .htList").click(function(){
				$("#list2").css("display","block");
				$("#list1 ul").css("height","auto");
				$("#page").css("marginTop","40px");
				$("#list1").css("display","none");
			});
		});	
		if(page_num == 1){						
			$("a",first).css("cursor","not-allowed");
		}else{	
			$("a",first).css("cursor","pointer");			
		}
    }else{
        $(".jkLesson").load("list1.html",function(){
        	$("a",first).css("cursor","not-allowed");
	    	$("#page").css("marginTop","40px");
			$(".previewMode .fkList").click(function(){
				$("#list1").css("display","block");
				$("#list1 ul").css("height","2200px");
				$("#page").css("marginTop","-70px");
				$("#list2").css("display","none");
			});
			$(".previewMode .htList").click(function(){
				$("#list2").css("display","block");
				$("#list1 ul").css("height","auto");
				$("#page").css("marginTop","40px");
				$("#list1").css("display","none");
			});
		});
    }
	// 页面加载end
	$(".jkinfor .dowcon").hover(function(){
		$("img",this).css("display","block");
	},function(){
		$("img",this).css("display","none");
	});
	$(".gotop .jk-app").hover(function(){
		$(".gotop .appewm").css("display","block");
	},function(){
		$(".gotop .appewm").css("display","none");
	});
	// gotop
	$(".gotop .top").click(function(){
		$(window).scrollTop(0);
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			$(".gotop .top").css("display","block");
		} else {
			$(".gotop .top").css("display","none");
		}
	});
})