var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image to overlay
$overlay.append($image);

// Add a caption to the overlay
$overlay.append($caption);

// Add overlay
$("html").append($overlay);

// Capture the click event on a link to an image
$("#container a").click(function(event){
    event.preventDefault();
    var imageLocation= $(this).attr("href");
    // Update overlay with the image linked in the link
    $image.attr("src", imageLocation);  
    
    // Show the overlay
    $overlay.fadeIn();
    
	// Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
});

// When overlay is clicked
$overlay.click(function(){
  // Hide the overlay
  $overlay.fadeOut();
});


$("#port_menu").hide();
$("#portfolio a").click(function(){
	$("#port_menu").slideToggle();
});