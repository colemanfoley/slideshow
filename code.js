$(document).ready(function(){
	var imageIndex = 1;
	$('#buttonSet li').click(function(){
		imageIndex = $(this).index() + 1;
		changeImageTo(imageIndex);
	});

	$('#backButton').click(function(){
		if (imageIndex > 1) {
			imageIndex = imageIndex - 1;
			changeImageTo(imageIndex);
		};
	});

	$('#forwardButton').click(function(){
		if (imageIndex < 3) {
			imageIndex = imageIndex + 1;
			changeImageTo(imageIndex);
		};
	});

	changeImageTo(imageIndex);
});

var changeImageTo = function(imageIndex) {
	$('#imageSet li').hide();
	$('#imageSet li:nth-child(' + imageIndex + ')').show();

	$('#buttonSet li').addClass('inactive').removeClass('active');
	$('#buttonSet li:nth-child(' + imageIndex + ')').removeClass('inactive').addClass('active');
};
