$('.backgrounddiv').on("click", function(e)
	{
		var x=e.pageX;
		if(x>600)
		$('#scan').css({'display':'block','animation-name':'scan'});
		setTimeout(function()
			{
				$('#scan').css({'display':'none'})
			},1000)
	});

$('#contact').on('click',function()
	{
		$('.linkedin').css({"background-color":"transparent","font-size":"1em"});
		$('.mail').css({"background-color":"transparent","font-size":"1em"})


	});
$('#linkedin').on('click',function()
	{
		$('.linkedin').css({"background-color":"rgba(255,255,255,0.3)","font-size":"1.3rem"})
		$('.mail').css({"background-color":"transparent","font-size":"1em"})

	});
$('#email').on('click',function()
	{
		$('.mail').css({"background-color":"rgba(255,255,255,0.3)","font-size":"1.3rem"})
		$('.linkedin').css({"background-color":"transparent","font-size":"1em"});

	});
if($(window).width()<1000)
{
	$('.background').attr('src','b2.png');
	$('#contact').css("font-size","1.7rem");
	$('.name').css("font-size","2.5rem");
	$('nav').css("font-size",'2.5rem');
	$('.dropdown-item > img').css("width",'80');
	$('.btn').css("font-size","2rem")
	$('.card-body').css("font-size","1.8rem")
	$('#scan').remove();

}