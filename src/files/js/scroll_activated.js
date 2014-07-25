AdobeEdge.bootstrapCallback(function(compId){
	
	$('body').css('height','15000px');
	
	$(window).on('scroll',function(){
		checkScroll();
	}).resize(function(){
		checkScroll();
	});
	
	function checkScroll(){
	
		var myComposition = AdobeEdge.getComposition('EDGE-8740435547');
		var scrollPos = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var duration = myComposition.getStage().getDuration();
		
		var scrollPercent = scrollPos / (winHeight - docHeight);
		var animPosition = Math.floor(duration * (scrollPercent * -1));
		
		myComposition.getStage().stop(animPosition);
		
	}
});
