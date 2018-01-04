function openNav() {
	if ($(window).width() < 480) {
		document.getElementById("mySidenav").style.width = "90%";
    	document.getElementById("main").style.marginLeft = "90%";
    	document.getElementById("header-box").style.marginLeft = "100%";
    	document.getElementById("main-banner").style.display = "none";
	} else {
		document.getElementById("mySidenav").style.width = "250px";
    	document.getElementById("main").style.marginLeft = "250px";
	}
    
    document.getElementById("main").onscroll = closeNav;
}

function closeNav() {
	if ($(window).width() < 480) {
		document.getElementById("mySidenav").style.width = "0";
    	document.getElementById("main").style.marginLeft = "0";
    	document.getElementById("header-box").style.marginLeft = "0";
    	document.getElementById("main-banner").style.display = null;
	} else {
		document.getElementById("mySidenav").style.width = "0px";
    	document.getElementById("main").style.marginLeft = "0px";
	}
    
    document.getElementById("main").onscroll = closeNav;
}