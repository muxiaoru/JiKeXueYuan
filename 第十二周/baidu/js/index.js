
$(document).ready(function() {	
	//头部start
	/**
	 * js设计模式：单例模式
	 * 功能: 个人登录和设置菜单
	 */
	//
	var settingMenu = {
	    init: function() {
	    	var me = this;
	        me.render();
	        me.bind();
	    },
	    render: function() {
	        var me = this;
	        me.hover = $(".hmain");
	    },
	    bind: function() {
	        var me = this;
	        me.hover.mouseover(function() {
	            $(this).children("ul").show();
	        });
	        me.hover.mouseout(function() {
	            $(this).children("ul").hide();
	        });
	    }
	};

	/**
	 * js设计模式：单例模式
	 * 功能:更多产品
	 */
	var moreProduct = {
	    init: function() {
	    	var me = this;
	        me.render();
	        me.bind();
	    },
	    render: function() {
	        var me = this;
	        me.hover = $(".more");
	    },
	    bind: function() {
	        var me = this;
	        me.hover.mouseenter(function() {
	            $(this).children("ul").show();
				$(".third3").css("backgroundColor", "#f0f0f0");
				$(".more>a").css("color", "#000000");
	        });
	        me.hover.mouseleave(function() {
	            $(this).children("ul").hide();
				$(".third3").css("backgroundColor", "#38f");
				$(".more>a").css("color", "#ffffff");
	        });
	    }
	}; 

	/**
	 * js设计模式：单例模式
	 * 功能: 天气查询
	 */
	// 
	var getWeather = {
		init: function(){
			$.getJSON("http://restapi.amap.com/v3/ip?key=7498ad1e80bc34107b110059a4d09dab", 
				function(data){
					console.log(data.adcode);
					$.getJSON("http://restapi.amap.com/v3/weather/weatherInfo?\
								key=7498ad1e80bc34107b110059a4d09dab&city=" + 
								data.adcode + "&extensions=base&output=json",
						function(result){
							console.log(result);
							var lives = result.lives[0];
							var city = lives.city;
							var weather = lives.weather;
							var temperature = lives.temperature;
							var humidity = lives.humidity;
							$(".city").text(city + "：");
							$(".weather").text(weather);
							$(".temperature").text(temperature + "℃");
							$(".humidity").text(humidity);
					});
			});
		}
	};
	//头部end


	//回到顶部start
	/**
	 * js设计模式：单例模式
	 * 功能: 回到顶部
	 */
	 var goTop = {
	    init: function() {
	    	var me = this;
	        me.render();
	        me.bind();
	    },
	    render: function() {
	        var me = this;
	        me.hover = $(".topsize");
	    },
	    bind: function() {
	        var me = this;
	        me.hover.mouseover(function() {
	            $(this).css("backgroundColor", "#eee");
				$(".topicon").hide();
				$(".toptext").show();
	        });
	        me.hover.mouseout(function() {
	            $(this).css("backgroundColor", "#fafafa");
				$(".topicon").show();
				$(".toptext").hide();
	        });
	        me.hover.click(function() {
				$(window).scrollTop(0);
			});
	    }
	};
	//监听页面回滚
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			$('.topsize').css('display', 'block');
		} else {
			$('.topsize').css('display', 'none');
		}
	});
	//回到顶部end

	//输入框start
	/**
	 * js设计模式：单例模式
	 * 功能: 输入框
	 */
	 var customInput = {
	    init: function() {
	    	var me = this;
	        me.render();
	        me.bind();
	    },
	    render: function() {
	        var me = this;
	        me.attention = $(".intext");
	    },
	    bind: function() {
	        var me = this;
	        me.attention.focus(function() {
	            $(".formCon").css("border", "1px solid #38f");
	        });
	        me.attention.blur(function() {
	            $(".formCon").css("border", "1px solid #b8b8b8");
	        });
	    }
	};
	//输入框end


	// $(".look").mouseover(function() {
	// 	$(".minIcon").css("background", "url(css/imgs/card.png) no-repeat -143PX 0");
	// });
	// $(".look").mouseout(function() {
	// 	$(".minIcon").css("background", "url(css/imgs/card.png) no-repeat -15PX 0");
	// });

	/**
	 * js设计模式：单例模式
	 * 功能:橱窗控制
	 */
	var showCaseControl = {
	    init: function() {
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
	    }
	};
	
	//换肤
	var changeSkin = {
		init: function() {
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
			this.render();
			this.bind();
		},
		render: function(){
			var me = this;
			me.hover = $(".bgcon img");
		},
		bind: function(){
			var me = this;
	        me.hover.hover(function(){
	        	i = $(this).index();
				$(".bgyl").css("background", 'url(img/skin/bg'+ i +'.jpg)');
				$(".bgyl").css("background-size", "264px 180px");

	        });
	        me.hover.click(function(){
				$("body").css("background", 'url(img/skin/bg'+ i +'.jpg)');
				Cookies.set('bgImg', i);
				$(".baidu img").attr("src", 'img/logo_white.png');
			});

		}
	}

	var bgImg = Cookies.get('bgImg');
	if(bgImg){
		$("body").css("background", 'url(img/skin/bg'+ bgImg +'.jpg)');
		$(".baidu img").attr("src", "img/logo_white.png");
	}else{
		$(".baidu img").attr("src", "img/bd_logo.png");
	}

	var start = (function() {
	    //高德API接入天气信息
	    getWeather.init();
	    //设置目录
	    settingMenu.init();
	    //更多产品
	    moreProduct.init();
	    //换肤
	    changeSkin.init();
	    //回到顶部
	    goTop.init();
	    //输入框
	    customInput.init();
	    //我的关注
	    $("#realcontent").load("myfoucs.html");
	    //橱窗控制
	    showCaseControl.init();
	})();
});