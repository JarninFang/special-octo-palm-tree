var contentTextArray =  [ "Bounded is an Android mobile game that I developed with two other high school friends during the summer after my first year of college. We had just been introduced to computer science and were excited by the vast world of possibilites that this field had to offer. I was in charge of much of the front end of the game, including much of the buttons, screens, and functionality. I used LibGDX, which is a cross-platform game development API to create the game in Java. The app is featured on the play store <a href='https://play.google.com/store/apps/details?id=com.jnvgames.bounded.android'>here</a>.", 
"The Random Quote Machine is small web project that I made to practice my HTML, CSS, and Javascript skills. I like the minimalist design of the website, as opposed to a website that's cluttered and filled with a bunch of noise. This project was one of my first web projects that helped me familiarize myself with the web development process. The link to the website is <a href='http://jarninfang.github.io/random-quotes/'>here</a>.", 
"The Javascript Calculator is another small web project that I made to showcase my web development skills. This project was more focused on algorithm and logic rather than web design. I had to write a lot of javascript to program the calculator's behavior to be similar to that of a real calculator. I also had to cover for special cases like the clear button and the equals button. The link to the website is <a href='http://jarninfang.github.io/javascript-calculator/'>here</a>." ];

var imageIDArray = [
"bounded-image",
"random-quote-image",
"javascript-calc-image"
];

$(document).ready(function($){
	/*lightbox*/
	$('.lightbox-trigger').click(function(e) {
		//To prevent linked image from opening in new page
		e.preventDefault();
		var image_href = $(this).attr('src');
		var content_text = loadContent($(this).attr('id'));	
		console.log(content_text);
		if($('#lightbox').length > 0) { //#lightbox exists
			//Insert img tag with clicked  link's href as src value
			$('#content').html('<img src="' + image_href + '" >');
			$('#content-text').html('<p>' + content_text + '</p>');
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
				'<div id="content-text">' +
				 content_text + 
				'</div>' + 
				'<div id="overlay"></div>' + 
				'</div>';

			//Insert lightbox html onto page
			$('body').append(lightbox);
		}
	});

	//Click anywhere to get rid of it
	$('body').on('click', '#lightbox', function() {
		$('#lightbox').hide();
	});

	//FOR SCROLLING NAVBAR
});

function loadContent(imageID) {
	for(var i = 0; i < imageIDArray.length; i++) {
		if(imageID == imageIDArray[i]) {
			return contentTextArray[i];
		}
	}
}