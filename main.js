var cont = document.getElementById('Imagesshow').getElementsByTagName('li'),
	nav = document.getElementById('Nav').getElementsByTagName('li'),
	arrWrap = document.getElementById('m-c-hand'),
	index, focusTimeHandler,
	box = document.getElementById('m-content');

var mOver = function()
{
	document.getElementById('m-c-hand').style.display = "block";
}
var mOut = function()
{
    document.getElementById('m-c-hand').style.display = "none";
}
var getCurIndex = function()
{
	for(var i = 0; i < nav.length; i++)
	{
		if(nav[i].className.indexOf('selected')!=-1)
			return i;
	}
}
var move = function(flag)
{
	index = getCurIndex();
	if (flag)
	{
		index++;
		if(index >= cont.length)
			index = 0;		
	}
	else 
	{
		index--;
		if(index < 0)
			index = cont.length-1;
	}
	display(index);
}

var display = function(index)
{	
	for(var i=0; i<cont.length; i++)
	{
		cont[i].className = '';
		nav[i].className = '';
	}
   	cont[index].className='show';
 	nav[index].className='selected';
}
var autoTabStart = function()
{
	focusTimeHandler = setInterval(function(){move(true);},2000);
}
var autoTapStop = function()
{
	clearInterval(focusTimeHandler);
}
var showOrHidden = function(flag) 
{
   	flag ? arrWrap.style.display = 'block' : arrWrap.style.display = 'none';             
}
    	/*var box.onmouseover=function()
		{
			autoTapStop();
		}	
		
		var box.onmouseout=function()
		{
			autoTabStart();
		}*/
var showAndStop = function()
{
   	showOrHidden(true);
 	autoTapStop();
}
var hiddenAndStart = function()
{
    showOrHidden(false);
	autoTabStart();
}
