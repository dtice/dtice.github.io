$(document).ready(function(){
	var leftOpen = "img/leftfaceopen.gif";
	var leftClosed = "img/leftfaceclosed.gif";
	var rightOpen = "img/rightfaceopen.gif";
	var rightClosed = "img/rightfaceclosed.gif";
	var nIntervId;
	var t = 0;
	var flip = false;
	eat();
	moveit();
	function moveit() {
		t += 0.05;

		var r = .4 * $("body").height();         // radius
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
		nIntervId = setInterval(eating, 500);
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