$(function(){
    $("#menu").hide();
    $("#menuback").hide();
    $("#menufilmy").hide();

    $(".menupngoff").click(function(){
        $("#menu").hide();
		$("#menuback").hide();
		$("#menufilmy").hide();
    })
	
    $(".menupngon").click(function(){
        $("#menu").show();
		$("#menuback").show();
    })
	
    $("#lifilmy").click(function(){
		$("#menufilmy").show();
    })
})