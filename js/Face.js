$(document).ready(function(){
	var leftOpen = "static/img/leftfaceopen.gif";
	var leftClosed = "static/img/leftfaceclosed.gif";
	var rightOpen = "static/img/rightfaceopen.gif";
	var rightClosed = "static/img/rightfaceclosed.gif";
	var nIntervId;
	var faceNum = 5;
	var t = 0;
	var flip = false;
	$("#stop").click(function(){
		$("audio").stop();
	});
	for(var i = 1; i <= faceNum; i++)
	{
		$("#faceColumn").prepend('<img id="face' + i + '" src="static/img/rightfaceclosed.gif" />');
	}
	eat();
	moveit(faceNum);
	
	function moveit(num) {
		t += 0.05;

		var r = .5 * $("body").height();         // radius
		var xcenter = 0;   // center X position
		var ycenter = (.5 * $("body").height());   // center Y position

		
		for(var i = 1; i <= num; i++)
		{
			var newTop = Math.floor(ycenter + (r * Math.sin((t * i)/2)));
			console.log("#face"+i);
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
