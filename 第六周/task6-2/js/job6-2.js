function $(obj){
	return document.getElementById(obj);
}

var color = {
	"0": "#999999",
	"1": "#BB3BD9",
	"2": "#e31559",
	"3": "#08BECE",
	"4": "#FBA60A",
	"5": "#AFD400"
}
var skin={};
skin.addEvent=function(){
	var skins =$("skin").getElementsByTagName("li");
	for (i=0;i<skins.length;i++)
	{
		skins[i].onclick=function(){skin.setSkin(this.id.substring(5))};
	}
}

skin.setCookie=function(n){
	var expires=new Date();
	expires.setTime(expires.getTime()+24*60*60*365*1000);
	var flag="Skin_Cookie="+n;
	document.cookie=flag+";expires="+expires.toGMTString();
}

skin.readCookie=function(){
	var skin=0;
	var mycookie=document.cookie;
	var name="Skin_Cookie";
	var start1=mycookie.indexOf(name+"=");
	if(start1==-1){
		var ls_skin = window.LS.get("skin"); 
		if(ls_skin){
			// 如果cookie中没有值，就从localstorage取值
			skin=parseInt(ls_skin);
		}else{
			skin = skin;
		}
	}
	else{
		var start=mycookie.indexOf("=",start1)+1;
		var end=mycookie.indexOf(";",start);
		if(end=-1){
			end=mycookie.length;
		}
		var values= unescape(mycookie.substring(start,end));
		if (values!=null)
		{
			skin=values;
		}
	}
	return skin;
	
}

skin.setSkin=function(n){
	var skins =$("skin").getElementsByTagName("li");
	var special_list = document.getElementsByClassName("specail_font");
	for (i=0;i<skins.length;i++)
	{
		skins[i].className="";
	}
	window.LS.set("skin", n); //考虑到chrome内核，本地无法存储cookie，使用localStorage
	skin.setCookie(n);
	$("skin_"+n).className="selected";
	$("life1").style.background=color[n];
	for(var i=0; i<special_list.length; i++){
		special_list[i].style.color = color[n]
	}
}

window.onload=function(){
	skin.setSkin(skin.readCookie());
	skin.addEvent();
}