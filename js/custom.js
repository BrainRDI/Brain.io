$(document).ready(function() {

// initial fade effect for the entire screen
	var $content = $('#wrapper');
	$content.css('opacity',0);
	$('#progress').fadeOut(500, function() {
		$content.animate({'opacity':1}, 500);
	});


// cowntdown function. Set the date by modifying the date in next line (June 1, 2012 00:00:00):
	var austDay = new Date("December 27, 2014 00:00:00");
		$('#countdown').countdown({until: austDay, layout: '<div class="item"><p>{dn}</p> {dl}<div class="lines"></div></div> <div class="item"><p>{hn}</p> {hl}<div class="lines"></div></div> <div class="item"><p>{mn}</p> {ml}<div class="lines"></div></div> <div class="item"><p>{sn}</p> {sl}</div>'});
		$('#year').text(austDay.getFullYear());
			

				

});	


// full screen slider	
$(document).ready( function(){
	
	$.supersized({
	
		// Functionality
		slide_interval          :   8000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	1000,		// Speed of transition
												   
		// Components							
		slide_links				:	'false',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
											{image : 'http://placehold.it/1600x900&text=image1', thumb : ' ', url : ''},
											{image : 'http://placehold.it/1600x900&text=image2', thumb : ' ', url : ''},
											{image : 'http://placehold.it/1600x900&text=image3', thumb : ' ', url : ''}	
									]
	});
});
