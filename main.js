$(function(){
    $("#menu").hide();
    $("#menuback").hide();

    $(".menupngoff").click(function(){
        $("#menu").hide();
		$("#menuback").hide();
    })
	
    $(".menupngon").click(function(){
        $("#menu").show();
		$("#menuback").show();
    })
})