$(document).ready(function(){
	var leftOpen = "img/leftfaceopen.jpg";
	var leftClosed = "img/leftfaceclosed.jpg";
	var rightOpen = "img/rightfaceopen.jpg";
	var rightClosed = "img/rightfaceclosed.jpg";
	var nIntervId;
	var flip = false;
	$("#face").followCursor();
	eat();
	
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