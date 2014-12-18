jQuery(document).ready(function(){
	$('#subscribeform').submit(function(){

		var action = $(this).attr('action');

		$("#mesaj").slideUp(750,function() {
		$('#mesaj').hide();

 		$('#subsubmit')
			.after('<img src="images/ajax-loader.gif" class="subscribe-loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			email: $('#subemail').val()
		},
			function(data){
				document.getElementById('mesaj').innerHTML = data;
				$('#mesaj').slideDown('slow');
				$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});
				$('#subsubmit').removeAttr('disabled');
				if(data.match('success') != null) $('#subscribeform').slideUp('slow');

			}
		);

		});

		return false;

	});

});