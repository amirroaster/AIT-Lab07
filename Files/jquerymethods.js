// this function is for home page
function homeFunction()
{
	$('#nav1').css("background", "red");
	$('#nav2').css("background", "black");
	$('#nav21').css("background", "black");
	$('#nav22').css("background", "black");
	$('#nav23').css("background", "black");
	$('#nav3').css("background", "black");
	document.getElementById("homeArticle").style.display = "block";
	document.getElementsByClassName("articles")[0].style.display = 'none';
	document.getElementsByClassName("articles")[1].style.display = 'none';
	document.getElementsByClassName("articles")[2].style.display = 'none';
	document.getElementById("aboutArticle").style.display = "none";
}
// article page
function articlesFunction()
{
	$('#nav1').css("background", "black");
	$('#nav2').css("background", "red");
	$('#nav21').css("background", "black");
	$('#nav22').css("background", "black");
	$('#nav23').css("background", "black");
	$('#nav3').css("background", "black");
	document.getElementById("homeArticle").style.display = "none";
	document.getElementsByClassName("articles")[0].style.display = 'block';
	document.getElementsByClassName("articles")[1].style.display = 'block';
	document.getElementsByClassName("articles")[2].style.display = 'block';
	document.getElementById("aboutArticle").style.display = "none";
}
// about page
function aboutFunction()
{
	$('#nav1').css("background", "black");
	$('#nav2').css("background", "black");
	$('#nav21').css("background", "black");
	$('#nav22').css("background", "black");
	$('#nav23').css("background", "black");
	$('#nav3').css("background", "red");
	document.getElementById("homeArticle").style.display = "none";
	document.getElementsByClassName("articles")[0].style.display = 'none';
	document.getElementsByClassName("articles")[1].style.display = 'none';
	document.getElementsByClassName("articles")[2].style.display = 'none';
	document.getElementById("aboutArticle").style.display = "block";	
}
// first article
function article1Function()
{
	$('#nav1').css("background", "black");
	$('#nav2').css("background", "black");
	$('#nav21').css("background", "red");
	$('#nav22').css("background", "black");
	$('#nav23').css("background", "black");
	$('#nav3').css("background", "black");
	document.getElementById("homeArticle").style.display = "none";
	document.getElementsByClassName("articles")[0].style.display = 'block';
	document.getElementsByClassName("articles")[1].style.display = 'none';
	document.getElementsByClassName("articles")[2].style.display = 'none';
	document.getElementById("aboutArticle").style.display = "none";
}
// second article
function article2Function()
{
	$('#nav1').css("background", "black");
	$('#nav2').css("background", "black");
	$('#nav21').css("background", "black");
	$('#nav22').css("background", "red");
	$('#nav23').css("background", "black");
	$('#nav3').css("background", "black");
	document.getElementById("homeArticle").style.display = "none";
	document.getElementsByClassName("articles")[0].style.display = 'none';
	document.getElementsByClassName("articles")[1].style.display = 'block';
	document.getElementsByClassName("articles")[2].style.display = 'none';
	document.getElementById("aboutArticle").style.display = "none";
}
// third article
function article3Function()
{
	$('#nav1').css("background", "black");
	$('#nav2').css("background", "black");
	$('#nav21').css("background", "black");
	$('#nav22').css("background", "black");
	$('#nav23').css("background", "red");
	$('#nav3').css("background", "black");
	document.getElementById("homeArticle").style.display = "none";
	document.getElementsByClassName("articles")[0].style.display = 'none';
	document.getElementsByClassName("articles")[1].style.display = 'none';
	document.getElementsByClassName("articles")[2].style.display = 'block';
	document.getElementById("aboutArticle").style.display = "none";
}
// when document is ready, this function should be called
$(document).ready(function(){
	// as it is obvious home page is the main page, hence this function should be called at first
	homeFunction();
	// rather than the css code in the main.css, this time I used to jQuery for training. Also it was written that
	// using jQuery only ....
	// for the extra credit, details and summaries tags are changed to customized p tag
	$('.summaryCustom')
		.css("background-image", "url(mark.png)")
		.css("background-repeat", "no-repeat")
		.css("background-position", "68%")
		.css("width", "138px");
	// also it is possible to hide summary by adding read less
	$('.readless')
		.css("background-image", "url(mark2.png)")
		.css("background-repeat", "no-repeat")
		.css("background-position", "52%")
		.css("width", "150px");
	// the container of the menu
	$('nav')
		.css("font-size", "0")
		.css("top", "0")
		.css("background-color", "black")
		.css("width", "392px")
		.css("cursor", "default")
		//.css("float", "right")
		.css("border-radius", "20px")
		.css("position", "fixed")
		.css("right", "1%")
		.css("top", "20%")
		.css("z-index", "1");
	// the goal is to have an in-line items
	$('nav #menu')
		.css("display", "inline-block")
		.css("font-size", "0px")
		.css("vertical-align", "top");
	
	$('nav #menu li')
		.css("display", "inline-block")
		.css("padding-left", "20px")
		.css("padding-right", "20px")
		.css("font-size", "15px")
		.css("line-height", "80px");
		
	$('nav #menu li a')
		.css("color", "white")
		.css("padding", "10px")
		.css("text-decoration", "none")
		//.css("vertical-align", "middle")
		.css("text-shadow", ".2px .2px #e5e5e5");
	// submenu class is related to the children of the second menu item
	$('nav #menu .submenu')
		.css("width", "190px")
		.css("background-color", "black")
		.css("position", "absolute")
		.css("display", "inline-block")
		.css("margin", "-5px 0px 0px -74px")
		.css("border-radius", "0 0 10px 10px")
		//.css("vertical-align", "top")
	
	$('nav #menu .submenu li')
		.css("display", "block")
		.css("border-right", "none")
		.css("font-size", "15px")
		.css("text-transform", "none")
		.css("padding", "10px")
		.css("line-height", "20px")
	// footer and header is separated by this div
	$('#main-section')
		.css("clear", "right")
		.css("margin-top", "100px")
		//.css("position", "relative");
	// at first, sub-menu should not be shown
	$('ul.submenu')
		.hide();
	// optional
	$('.detailsCustom')
		.css("cursor", "default");
	// for customized detail
	$('#detailCustom0')
		.hide();
	
	$('#readless0')
		.hide();
		
	$('#detailCustom1')
		.hide();
	
	$('#readless1')
		.hide();
		
	$('#detailCustom2')
		.hide();
	
	$('#readless2')
		.hide();
		
	$('#detailCustom3')
		.hide();
	
	$('#readless3')
		.hide();
		
	$('#detailCustom4')
		.hide();
	
	$('#readless4')
		.hide();
	// for hovering opacity, width, height, and amount of border-radius will be changed. Also, the rotation is done
    // for first time
	$('img')
		.css("opacity", "0.7")
		.css("width", "240px")
		.css("height", "240px")
		.css("border-radius", "10px")
		.css("-webkit-transition", "width 1s, height 1s, -webkit-transform 1s")
		.css("transition", "width 1s, height 1s, transform 1s");
	// when user clicks on read more	
	$('.summaryCustom').click(function() {
		var nr = $(this).attr('id').substring(13);
		$('#summaryCustom' + nr)
			.hide();	
		$('#detailCustom' + nr)
			.show();
		$('#readless' + nr)
			.show();
	});
	// read less
	$('.readless').click(function() {
		var nr = $(this).attr('id').substring(8);
		$('#summaryCustom' + nr)
			.show();
		$('#detailCustom' + nr)
			.hide();
		$('#readless' + nr)
			.hide();
	});
	// clicking on menu
    $('#menu li').click(function(event) {
		var thisId = $(this).attr('id');
		if(thisId == 'nav1')
		{
			homeFunction();
		}
		else if(thisId == 'nav2')
		{
			articlesFunction();
		}
		else if(thisId == 'nav3')
		{
			aboutFunction();
		}
		else if(thisId == 'nav21')
		{
			article1Function();
		}
		else if(thisId == 'nav22')
		{
			article2Function();
		}
		else if(thisId == 'nav23')
		{
			article3Function();
		}
        $(this).siblings().children('ul.submenu:visible').slideUp('xfast');
        $(this).children("ul.submenu").slideToggle('xfast')
    });
	// the prior function had a problem. when the children of the second item were clicked, the function
	// was called two times. Hence going to the children pages of the second item was not possible. we 
	// want to click somewhere except a certain place so another function should be used.
	$(".submenu").click(function(event){
		$('.submenu').hide();
		event.stopPropagation();
	});
	// when click on the second menu item by mistake, just click on body to hide its submenus
	$("body").click(function() {
		$('.submenu').hide();
	});
	// hovering image. second function is related to the time when hovering is finished
	$('img').hover(function(){
		$(this)
			.css("opacity", "1")
			.css("width", "300px")
			.css("height", "300px")
			.css("border-radius", "15px")
			.css("-webkit-transform", "rotate(360deg)")
			.css("transform", "rotate(360deg)");
	}, function() {
		$(this)
			.css("opacity", "0.7")
			.css("width", "240px")
			.css("height", "240px")
			.css("border-radius", "10px")
			.css("-webkit-transition", "-webkit-transform .8s ease-in-out")
			.css("transition", "transform .8s ease-in-out");
	});
 });