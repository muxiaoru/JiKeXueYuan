
$(document).ready(function(){
	$(".findIon1").click(function(){		
		$(".findIon3").toggle();
	})
	$(".find1").mouseover(function(){
		$(".findIon2").show();
	})
	$(".find1").mouseout(function(){
		$(".findIon2").hide();
	})
	$(".think").click(function(){	
		$(".findIon5").toggle();
	})
})