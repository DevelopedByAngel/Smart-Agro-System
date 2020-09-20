var auth=(window.location.href).split("=")[1];
console.log(auth)
if (auth==="demo")
auth="aaqCQAawYvMh9xT1jZN56Wmg5TdA9ek-"
setInterval(function(){
	fetch('http://blynk-cloud.com/'+auth+'/get/V0')
.then(data => data.json())
.then(data => 
	{
		const water=(data[0]<50)?data[0]:parseFloat(data[0])+30
		$('.watercontainer img').css('height',water+'%');
		$('.waterp').text(Math.round(water)+"%")
	})
fetch('http://blynk-cloud.com/'+auth+'/get/V1')
.then(data => data.json())
.then(data => 
	{
		const temp=Math.round(data[0])
		$('.tempp').text(temp+'\xB0c')
	})
},1000)
$('.drop').on('click',function()
{
	if($('#switchtext').text()=='OFF')
	{
	fetch('http://blynk-cloud.com/'+auth+'/update/D4?value=1')
	$('#switchtext').text('ON');
	$('.drop img:first-child').css('animation-name','rotate')
	$('.dropimg').attr('src','drop2.svg')
	}
	else
	{
		fetch('http://blynk-cloud.com/'+auth+'/update/D4?value=0')
		$('.drop img:first-child').css('animation-name','rotater');
		$('#switchtext').text('OFF');
		$('.dropimg').attr('src','drop1.svg')
	}

})
const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const date=new Date()
$('#day').text(weekday[date.getDay()])
$('#date').text(date.getDate()+','+month[date.getMonth()]+' '+date.getFullYear())
// date.getHours()>18?'pm':'am'
$('#time').text((date.getHours()>12?date.getHours()-12:date.getHours())+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+' '+(date.getHours()>12?'pm':'am'))
if($(window).width()<1000)
{
	$('.background').css('background-image','url(https://mobilehd.blob.core.windows.net/main/2018/11/cereal-wheat-crop-agriculture-corn-rural-pasture-farm-field-bread-sun.jpg)');
}
// aaqCQAawYvMh9xT1jZN56Wmg5TdA9ek-
$('.tempoverlay').css('height',$('.temp').outerHeight());
$('.tempoverlay').css('width',$('.temp').outerWidth());
// $('.tempoverlay').css('padding',$('.temp').padding());
// $('.tempoverlay').css('margin',$('.temp').margin());
$('.tempoverlay').css('left',$('.temp').offset().left);
$('.tempoverlay').css('top',$('.temp').offset().top);