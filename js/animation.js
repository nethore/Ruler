$(document).ready(function()
{

	// Gestion des tailles
	//
	// var taille1 = 185;
	// var taille2 = 165;
	//
	// $('.p:nth-child(1)').find('.taille').text(taille1);
	// $('.p:nth-child(2)').find('.taille').text(taille2);
	//
	// $('.p:nth-child(1)').css('height', function() {
	// 	return ((taille1 - 5) * 100) / 225 + "%";
	// });
	//
	// $('.p:nth-child(2)').css('height', function() {
	// 	return ((taille2 - 5) * 100) / 225 + "%";
	// });
	//
	// $('.p:nth-child(1) img').css('height', function() {
	// 	return (taille1 * 25) / 225 + "%";
	// });
	//
	// $('.p:nth-child(2) img').css('height', function() {
	// 	return (taille2 * 25) / 225 + "%";
	// });



	$(".close").css("display", "none");
	$(".close-help").css("display", "none");

	var isMenuOpen = false;
	var isHelpOpen = false;

	$('.menu_btn').click(function()
	{
		if (isMenuOpen === false)
		{
		//alert('je suis dans le bon cas')
			$("#menu").clearQueue().animate({
				left : '0'
			});

			$(".close").fadeIn(300);

			isMenuOpen = true;
		}
	});

	$('.close').click(function()
	{
		if (isMenuOpen === true)
		{
			$("#menu").clearQueue().animate({
				left : '-240px'
			});

			$(this).fadeOut(200);

			isMenuOpen = false;
		}
	});

	$("#menu").find('a').click(function()
	{
		if (isMenuOpen === true)
		{
			$("#menu").clearQueue().animate({
				left : '-240px'
			});

			$('.close').fadeOut(200);

			isMenuOpen = false;
		}
	});




	$('.help_btn').click(function()
	{
		if (isHelpOpen === false)
		{
		//alert('je suis dans le bon cas')
			$("#help").clearQueue().animate({
				right : '0'
			});

			$(".close-help").fadeIn(300);

			isHelpOpen = true;
		}
	});

	$('.close-help').click(function()
	{
		if (isHelpOpen === true)
		{
			$("#help").clearQueue().animate({
				right : '-240px'
			});

			$(this).fadeOut(200);

			isHelpOpen = false;
		}
	});

});
