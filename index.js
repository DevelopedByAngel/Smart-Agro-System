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
$('form').on('submit', (event)=>
{
	console.log($('#name').val())
	event.preventDefault();
	fetch('https://angelmail.herokuapp.com/',
	{
		method:'POST',
		headers:{'Content-Type': 'application/json'},
		body: JSON.stringify({
			name:$('#name').val(),
			email:$('#email').val(),
			message:document.querySelector('#message').value
		})
	})
	.then(user=>user.json())
	.then(user=>
	{
		console.log(user)
		if(user.msg=='mail sent')
		{
			$('.alert p').text('Confirmation mail sent');
			$('.alert').css('display','block');
			$('.alertdiv').css('animation-name','time');
			setTimeout(function()
			{
				$('.alert').css('display','none');
				$('.alertdiv').css('animation-name','');
			},2000)
		}
		else
		{
			$('.alert p').text('Error occured!! Please resend message');
			$('.alert').css('display','block');
			$('.alertdiv').css('animation-name','time');
			setTimeout(function()
			{
				$('.alert').css('display','none');
				$('.alertdiv').css('animation-name','');
			},2000)
		}
	})
})
const login=()=>
{
	if($(window).width()<1000)
	window.location='https://developedbyangel.github.io/Smart-Agro-System/home1.html?auth='+$('#auth').val();
	else
	window.location='https://developedbyangel.github.io/Smart-Agro-System/home.html?auth='+$('#auth').val();
}