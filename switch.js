const height=$('.round').css('height');
$('.round').css('width',height);
const width=$('.round').width();

$('.switch').on('click',()=>
{
	if($('.switch').attr('id')=='dark')
		{
			$('.round').css('left','0px');
			$('.switch').attr('id','light');
			$('.round').attr('id','sun');
			$('#star1').attr('id','cloud1');
			$('#star2').attr('id','cloud2');
			$('body').css('background-color','white');
			$('#changingimage').attr('src','logo.png');
			$('body').css('color','black');
			$('.btn').css('color','#0099bb');
		}
	else
	{
		$('.round').css('left',80-width)
		$('.switch').attr('id','dark');
		$('.round').attr('id','moon');
		$('#cloud1').attr('id','star1');
		$('#cloud2').attr('id','star2');
		$('body').css('background-color','black');
		$('body').css('color','white');	
		$('#changingimage').attr('src','blacklogo.png');
		$('.btn').css('color','#00ffad')

	}

})
$('iframe').contents().find('body').css('background-color','white');