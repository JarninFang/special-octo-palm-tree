$(document).ready(function($){
	/*lightbox*/
	$('.lightbox-trigger').click(function(e) {
		//To prevent linked image from opening in new page
		e.preventDefault();
		var image_href = $(this).attr('src');
		console.log(image_href);
		if($('#lightbox').length > 0) { //#lightbox exists
			//Insert img tag with clicked  link's href as src value
			$('#content').html('<img src="' + image_href + '" >');

			//Show lightbox window
			$('#lightbox').show();
		} else { //#lightbox does not exist
			//Create html markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
			'<p>Click to close</p>' +
				'<div id="content">'  + //insert clicked link's href
				'<img src="' + image_href + '" >' +
				'</div>' +
				'</div>';

			//Insert lightbox html onto page
			$('body').append(lightbox);
		}
	});

	//Click anywhere to get rid of it
	$('body').on('click', '#lightbox', function() {
		$('#lightbox').hide();
	});

});