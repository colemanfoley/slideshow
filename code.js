$(document).ready(function(){
	$('#buttonSet li').click(function(){
		handleImageChange($(this));
	});

	handleImageChange($('#buttonSet li').first());
});

var handleImageChange = function(thisObject) {
	$('#imageSet li').hide();
	$('#imageSet li:nth-child(' + ($(thisObject).index() + 1) + ')').show();

	$('#buttonSet li').css('background-color', 'white');
	$(thisObject).css('background-color', 'black');
};
