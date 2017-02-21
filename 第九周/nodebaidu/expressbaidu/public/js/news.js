$(document).ready(function(){
	if (typeof(Storage) !== "undefined") { //判断是否支持localStorage
		var type = localStorage.getItem("type");
		if(type){
			refreshnews(type);
		}else{
			type = "精选";
			localStorage.setItem("type", type);
		}
		$('nav a:contains('+ type +')').css('borderBottom','2px solid #e2e6e8');
		window.onscroll=function(){ //为了让页面看着不是很单薄使用了瀑布流
			if(scrollside()){
				refreshnews(type); //由于使用了瀑布流不得已，把$.list.empty();注释了
			}
		}
	} else {
	    alert("抱歉！您的浏览器不支持 Web Storage ...");
	}
	
	function scrollside(){
		var article=$("article");
		var lastboxHeight=article.last().get(0).offsetTop+Math.floor(article.last().height()/2);
		var documentHeight=$(document).width();
		var scrollHeight=$(window).scrollTop();
		return (lastboxHeight<scrollHeight+documentHeight)?true:false;
	}

	$('nav a').click(function(e){
		e.preventDefault();
		var type=$(this).text();
		refreshnews(type);
		localStorage.setItem("type", type); 
		$('nav a').css('borderBottom','0');
		$(this).css('borderBottom','2px solid #e2e6e8');
	})
// 滚动栏
	$('nav a').each(function(index){
		$(this).click(function(){
			$('.carousel').css('display','none');
			$('.scrollItem'+index).css('display','block');
		})
	})
	$('.more').click(function(){
		$('.scrollItem6').css('display','block');
	})

// go-top	
	var navHeight=$('nav').height();
	$(window).scroll(function() {
		if ($(window).scrollTop() > navHeight) {
			$(".goTop").css("display","block");
		} else {
			$(".goTop").css("display","none");
		}
	});
	$(".goTop").click(function(){
		$(window).scrollTop(0);
	});
})


function refreshnews(type){
	var $lists=$("article ul");
	// $lists.empty();
	$.ajax({
		url: '/news',
		type: 'get',
		datatype: 'json',
		data:{'newstype':type},
		success:function(data){

			data.forEach(function(item,index,array){
				var $list=$('<li></li>').addClass("news-list").prependTo($lists);
				var $newsImg=$('<div></div>').addClass("newsimg").appendTo($list);
				var $img=$('<img>').attr("src",item.newsimg).appendTo($newsImg);
				var $newsContent=$('<div></div>').addClass("newscontent").appendTo($list);
				var $h1=$('<h1></h1>').html(item.newstitle).appendTo($newsContent);
				var $p=$('<p></p>').appendTo($newsContent);
				var $newsTime=$('<span></span>').addClass("newstime").html(item.newstime).appendTo($p);
				if(item.newssrc){
					var $newsSrc=$('<span></span>').addClass("newssrc").html(item.newssrc).appendTo($p);
				}else{
					return 0;
				}
					
			})
		}
	})	
}