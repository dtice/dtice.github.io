$(document).ready(function(){
	var leftOpen = "static/img/leftfaceopen.gif";
	var leftClosed = "static/img/leftfaceclosed.gif";
	var rightOpen = "static/img/rightfaceopen.gif";
	var rightClosed = "static/img/rightfaceclosed.gif";
	var nIntervId;
	var t = 0;
	var flip = false;
	$("#stop").click(function(){
		$("audio").stop();
	});
	eat();
	moveit();
	
	function moveit() {
		t += 0.05;

		var r = .5 * $("body").height();         // radius
		var xcenter = 0;   // center X position
		var ycenter = (.5 * $("body").height());   // center Y position

		var newTop = Math.floor(ycenter + (r * Math.sin(t)));

		$('#face').animate({
			top: newTop,
		}, 1, function() {
			moveit();
		});
	}
	function eat(){
		nIntervId = setInterval(eating, 200);
	}
	function eating(){
		if(!flip)
		{
			$("#face").attr("src", rightOpen);
			
			flip = true;
		}
		else{
			$("#face").attr("src", rightClosed);
			
			flip = false;
		}
	}
});
