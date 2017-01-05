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
	var isAddOpen = false;
	var isAddRwdOpen = false;



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

  $('.close-add').click(function()
	{
		if (isAddOpen === false)
		{
			$(this).clearQueue().animate({
				width : '55px',
				left: '-55px'
			});
			$("#admin").clearQueue().animate({
				right : '0'
			});
			$('#admin').find('.icn-admin').removeClass('icon-add-man').addClass('icon-close-bold');
			$('#admin').find('.txt-admin').hide();

			isAddOpen = true;
		}
		else if (isAddOpen === true)
		{
			$(this).clearQueue().animate({
				width : '160px',
				left: '-160px'

			});
			$("#admin").clearQueue().animate({
				right : '-280px'
			});
			$('#admin').find('.icn-admin').addClass('icon-add-man').removeClass('icon-close-bold');
			$('#admin').find('.txt-admin').show();


			isAddOpen = false;
		}
	});

	$('.close-rwd').click(function()
	{
		if (isAddRwdOpen === false)
		{
			$(this).clearQueue().animate({
				width : '55px'
			});
			$("#admin-rwd").clearQueue().animate({
				top : '0'
			});
			$('#admin-rwd').find('.icn-admin').removeClass('icon-add-man').addClass('icon-close-bold');
			$('#admin-rwd').find('.txt-admin').hide();

			isAddRwdOpen = true;
		}
		else if (isAddRwdOpen === true)
		{
			$(this).clearQueue().animate({
				width : '160px'

			});
			$("#admin-rwd").clearQueue().animate({
				top : '-380px'
			});
			$('#admin-rwd').find('.icn-admin').addClass('icon-add-man').removeClass('icon-close-bold');
			$('#admin-rwd').find('.txt-admin').show();


			isAddRwdOpen = false;
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
