$(document).ready(function() {
	//头部star 
	$(".hmain").mouseover(function() {
		var ulNode = $(this).children("ul");
		ulNode.show();
	});
	$(".hmain").mouseout(function() {
		var ulNode = $(this).children("ul");
		ulNode.hide();
	});
	$(".more").mouseover(function() {
		var ulNode1 = $(this).children("ul");
		ulNode1.show();
		$(".third3").css("backgroundColor", "#f0f0f0");
		$(".more>a").css("color", "#000000");
	});
	$(".more").mouseout(function() {
		var ulNode1 = $(this).children("ul");
		ulNode1.hide();
		$(".third3").css("backgroundColor", "#38f");
		$(".more>a").css("color", "#ffffff");
	});
	getWeather();
	// 天气查询
	function getWeather() {
		var city_info = $.ajax({
			url: "http://restapi.amap.com/v3/ip?key=7498ad1e80bc34107b110059a4d09dab",
			async: false
		}).responseText;
		var cityId = $.parseJSON(city_info).adcode;
		var weather_info = $.ajax({
			url: "http://restapi.amap.com/v3/weather/weatherInfo?\
			key=7498ad1e80bc34107b110059a4d09dab&city=" + cityId + "&extensions=base&output=json",
			async: false
		}).responseText;
		var lives = $.parseJSON(weather_info).lives[0];
		console.log(lives);
		var city = lives.city;
		var weather = lives.weather;
		var temperature = lives.temperature;
		var humidity = lives.humidity;
		$(".city").text(city + "：");
		$(".weather").text(weather);
		$(".temperature").text(temperature + "℃");
		$(".humidity").text(humidity);

	}
	//头部end
	//输入框
	$(".intext").focus(function() {
		$(".formCon").css("border", "1px solid #38f");
	});
	$(".intext").blur(function() {
		$(".formCon").css("border", "1px solid #b8b8b8");
	});
	$(".look").mouseover(function() {
		$(".minIcon").css("background", "url(css/imgs/card.png) no-repeat -143PX 0");
	});
	$(".look").mouseout(function() {
		$(".minIcon").css("background", "url(css/imgs/card.png) no-repeat -15PX 0");
	});
	$("#realcontent").load("myfoucs.html");
	$(".tab li").each(function(index) {
		$(this).click(function() {
			$(".tab li.tabin").removeClass("tabin");
			$(this).addClass("tabin");
			if (index == 0) {
				$("#realcontent").load("myfoucs.html");
			} else if (index == 1) {
				$("#realcontent").load("propose.html");
			} else if (index == 2) {
				$("#realcontent").load("nav.html");
			} else if (index == 3) {
				$("#realcontent").load("viedo.html");
			} else if (index == 4) {
				$("#realcontent").load("going.html");
			}
		})
	});
	$(".topsize").mouseover(function() {
		$(this).css("backgroundColor", "#eee");
		$(".topicon").hide();
		$(".toptext").show();
	});
	$(".topsize").mouseout(function() {
		$(this).css("backgroundColor", "#fafafa");
		$(".topicon").show();
		$(".toptext").hide();
	});
	$(".topsize").click(function() {
		$(window).scrollTop(0);
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			$('.topsize').css('display', 'block');
		} else {
			$('.topsize').css('display', 'none');
		}
	});
	var i = 1;
	$("#change_skin").click(function() {
		$(".head").animate({
			height: "288px"
		}, 500);
	});
	$(".p2").click(function() {
		$(".head").animate({
			height: "0px"
		}, 500);
	});
	$(".bgcon img").hover(function() {
		i = $(this).index();
		$(".bgyl").css("background", 'url(img/bg' + i + '.jpg)');
		$(".bgyl").css("background-size", "264px 180px");
	});
	$(".bgcon img").click(function() {
		$("body").css("background", 'url(img/bg' + i + '.jpg)');
		Cookies.set('bgImg','url(img/bg' + i + '.jpg)');
		$(".baidu img").attr("src", "img/logo_white.png");
		Cookies.set('logoImg',"img/logo_white.png");
	});
	var bgImg = Cookies.get('bgImg');
	var logoImg = Cookies.get('logoImg');
	if(bgImg){
		$("body").css("background", bgImg);
		$(".baidu img").attr("src", logoImg);
	}else{
		$(".baidu img").attr("src", "img/bd_logo.png");
	}
});