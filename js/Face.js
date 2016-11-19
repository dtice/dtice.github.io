$(document).ready(function(){
	var leftOpen = "static/img/leftfaceopen.gif";
	var leftClosed = "static/img/leftfaceclosed.gif";
	var rightOpen = "static/img/rightfaceopen.gif";
	var rightClosed = "static/img/rightfaceclosed.gif";
	var nIntervId;
	var flipInterv;
	var width = $("document").width();
	var faceNum = 5;
	var t = 0;
	var flippy = false;
	var floppy = false;
	var flip = false;
	var flop = false;
	$("#illuminati").css("left:"+width);
	$("#illuminati").click(function(){
		if(!floppy)
		{
			$.each($('audio'), function () {
				this.pause();
			});
			floppy = true;
		}
		else
		{
			$.each($('audio'), function () {
				this.play();
			});
			floppy = false;
		}
	});
	$("#contactButton").click(function(){
		if(!flippy)
		{
			$("#contactBar").slideDown( "slow", function() {
			});
			flippy = true;
		}
		else
		{
			$("#contactBar").slideUp("slow", function() {
			});
			flippy = false;
		}
	});
	for(var i = 1; i <= faceNum; i++)
	{
		$("#faceColumn").prepend('<img id="face' + i + '" src="static/img/rightfaceclosed.gif" />');
	}
	eat();
	moveit(faceNum);
	flippem();
	
	function flippem(){
		flipInterv = setInterval(flipping, 400);
	}
	
	function randBoolean(){
		var rando = false;
		if(Math.random() >= 0.5)
		{
			rando = true;
		}
		return rando;
	}
	
	function flipping(){
		for(var i = 1; i <= faceNum; i++)
		{
			if($("#face"+i).hasClass("flip") && randBoolean())
			{
				$("#face"+i).removeClass("flip");
			}
			else
			{
				$("#face"+i).addClass("flip");
			}
		}
	}
	
	function moveit(num) {
		t += 0.05;

		var r = 100;         // radius
		var xcenter = 0;   // center X position
		var ycenter = 100;   // center Y position

		
		for(var i = 1; i <= num; i++)
		{
			var newTop = Math.floor(ycenter + (r * Math.sin((t * i)/2)));
		$("#face" + i).animate({
			top: newTop,
		}, 1, function() {
			moveit(faceNum);
		});
		}
	}
	function eat(){
		nIntervId = setInterval(eating, 200);
	}
	function eating(){
		if(!flip)
		{
			for(var i = 1; i <= faceNum; i++)
			{
				$("#face" + i).attr("src", rightOpen);
			}
			flip = true;
		}
		else{
			for(var i = 1; i <= faceNum; i++)
			{
				$("#face" + i).attr("src", rightClosed);
			}
			flip = false;
		}
	}
});
