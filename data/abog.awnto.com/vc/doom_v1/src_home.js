
function scrl()
	{
		//document.getElementById('y').innerHTML = document.documentElement.scrollTop;
		var scrlo = document.body.scrollTop;
		scrlo= scrlo/50-1;
		//document.getElementById('xy').innerHTML = document.body.scrollTop;
		//document.getElementById('brand_x').innerHTML = (scrlo);
		if(scrlo<=1&&scrlo>=0)
		{
		document.getElementById("logo").style = 'top:'+(15-15*scrlo)+'px;left:'+(20-15*scrlo)+'px;height:'+(70-20*scrlo)+'px;width:'+(70-20*scrlo)+'px';
		document.getElementById("brand_1").style = 'left:'+(110-50*scrlo)+'px;';
		document.getElementById("brand_2").style = 'left:'+(110+40*scrlo)+'px;top:'+(25-40*scrlo)+'px;';
		document.getElementById("nav_box").style = 'height:'+(50+30*scrlo)+'px;';
		
		document.getElementById("au").style = 'left: '+(30-10*scrlo)+'px;top: '+(15+15*scrlo)+'px;font-size: '+(0+16*scrlo)+'px;';
		
		}
		//setTimeout(scrl, 1);
		//document.getElementById("logo").style = 'transform: translate(-'+scrlo+'px,0px);';
		else if(scrlo>1)
		{
			document.getElementById("logo").style = 'top:0px;left:5px;height:50px;width:50px';
			document.getElementById("brand_1").style = 'left:60px;';
			document.getElementById("brand_2").style = 'left:150px;top:-15px;';
			document.getElementById("nav_box").style = 'height:80px;';
			
			document.getElementById("au").style = 'left: 20px;top: 30px;font-size: 16px;';
		}
		else
		{
			document.getElementById("logo").style = 'top:15px;left:20px;height:70px;width:70px';
			document.getElementById("brand_1").style = 'left:110px;';
			document.getElementById("brand_2").style = 'left:110px;top:25px;';
			document.getElementById("nav_box").style = 'height:50px;';
			
			document.getElementById("au").style = 'left: 30px;top: 15px;font-size: 0px;';
		}
	}
	
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
//window.onscroll = function() {scrollFunction();scrl()};
window.onscroll = function() {scrl()};


var s_box=1;
var tim_se= 1;
var tim_se_r=0;

function search_box_load()
{
	if(s_box==0){s_box=1;}else{s_box=0;}
	search_box();
	
}

function search_box()
{
	
	if(s_box==0)
	{
		if(tim_se_r<1){setTimeout(search_box,1);tim_se_r += 0.01;}else{tim_se_r=1;search_ani();}
		//document.getElementById("search_box").style = 'visibility:visible;';
		if(tim_se_r<1)
		{
			search_ani();
		}
	}
	
	
	
	if(s_box==1)
	{
		
		if(tim_se_r > 0 ){tim_se_r = tim_se_r - 0.01;setTimeout(search_box,1);}else{tim_se_r=0;search_ani();}
		//document.getElementById("search_box").style = 'visibility:visible;';
		if(tim_se_r>0)
		{
			search_ani();
		}
		
	}
	
function search_ani()
{
		document.getElementById("search_button").style = 'transform: rotate('+(180*tim_se_r)+'deg);top:'+(7+16*tim_se_r)+'px;left:'+(5*tim_se_r)+'px;border: '+(3-1*tim_se_r)+'px solid #fff;border-radius:'+(15-13*tim_se_r)+'px;height:'+(24-24*tim_se_r)+'px;width:'+(24+12*tim_se_r)+'px;';
	
		document.getElementById("search_button_paddle").style = 'top:'+(29-24*tim_se_r)+'px;left:'+(27-4*tim_se_r)+'px;transform: rotate(-'+(45+315*tim_se_r)+'deg);height:'+(15+25*tim_se_r)+'px;';
		
		document.getElementById("search").style = 'transform: rotate('+(0-45*tim_se_r)+'deg);';
		
		document.getElementById("search_box").style = 'right: '+(-420+440*tim_se_r)+'px;';
		
		document.getElementById('okg').innerHTML = tim_se_r;
		
		
}





		/*
		document.getElementById("search_box").style = 'visibility:visible;';
		
		document.getElementById("search_button").style = 'top:23px;left:5px;border: 2px solid #fff;border-radius:2px;height:-0px;width:36px;';
		
		document.getElementById("search_button_paddle").style = 'top:5px;left:23px;transform: rotate(-0deg);height:40px;';
		
		document.getElementById("search").style = 'transform: rotate(-45deg);';
		*/
	/*
	else
	{
		

		document.getElementById("search_button").style = 'width:24px;height:24px;top:7px;border: 3px solid #fff;border-radius:15px;';
		
		document.getElementById("search_button_paddle").style = 'width:4px;height:15px;background-color:#fff;top:29px;left:27px;border-radius:2px;transform: rotate(-45deg);';
		
		document.getElementById("search").style = 'transform: rotate(-0deg);';
		
		document.getElementById("search_box").style = 'visibility:hidden;';s_box=0;
		
	}*/
}



/*

var d=0;
	var st=0;
	
	function my_c()
	{
		st++;
		if(st == 1)
		{
			myo();
		}
	}
	
	function myo()
	{
		if(d<20)
		{
		document.getElementById("logo").style = 'transform: translate(0px,'+d+'px);';
		document.getElementById("logo_rt").style = 'transform: rotate(-'+d+'deg);';
		//document.getElementById("log_button").style = 'transform: translate('+d+'px,0px);';
		d++;
		setTimeout(myo,5);
		}
		else
		{
			my_cl();
		}
	}
	
	function my_cl()
	{
		if(d<21&&d>(-10))
		{
		document.getElementById("logo").style = 'transform: translate(0px,'+d+'px);';
		//document.getElementById("log_button").style = 'transform: translate('+d+'px,0px);';
		if(d>=0){document.getElementById("logo_rt").style = 'transform: rotate(-'+d+'deg);';}
		d--;
		setTimeout(my_cl,10);
		}
		else
		{
			my_acl();
		}
		
	}
	
	function my_acl()
	{
		if(d<0)
		{
		document.getElementById("logo").style = 'transform: translate(0px,'+d+'px);';
		//document.getElementById("log_button").style = 'transform: translate('+d+'px,0px);';
		//document.getElementById("logo_rt").style = 'transform: rotate(-'+d+'deg);';
		
		d++;
		setTimeout(my_acl,10);
		}
		else
		{
			st=0;
		}
		
	}


function scrl()
	{
		//document.getElementById('y').innerHTML = document.documentElement.scrollTop;
		var scrlo = document.body.scrollTop;
		//document.getElementById('xy').innerHTML = document.body.scrollTop;
		document.getElementById('xy').innerHTML = scrlo;
		
		setTimeout(scrl, 1);
		document.getElementById("logo").style = 'transform: translate(-'+scrlo+'px,0px);';
		
	}
	
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
//window.onscroll = function() {scrollFunction();scrl()};
//window.onscroll = function() {scrl()};
*/
