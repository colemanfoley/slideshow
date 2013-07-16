var currentImg = 1;
$(document).ready(function(){
	$('#imageSet li').first().show();

	$('#buttonSet li').click(function(){
		$('#imageSet li').hide();
		$('#imageSet li:nth-child(' + ($(this).index()+ 1) + ')').show();
		$('#buttonSet li').css('background-color', 'white');
		$(this).css('background-color', 'black');
	})
})
