var bannerStatus = 1;
var bannerTimer = 4000;


// start banner loop on load
window.onload = function() {
	bannerLoop();
	$(document).ready(function() {
    $('#imgban3').delay(1000).fadeIn(400);
	});
	$(document).ready(function() {
    $('#imgban2').delay(1000).fadeIn(400);
	});
	$(document).ready(function() {
    $('#imgban1').delay(1000).fadeIn(400);
	});

};


// to restart loop after mouse entry
var startBannerLoop = setInterval(function() {
	if (bannerStatus === 1) {
		bannerStatus = 2;
		bannerLoop();
	} 
	else if (bannerStatus === 2){
		bannerStatus = 3;
		bannerLoop();
	}
	else if (bannerStatus === 3){
		bannerStatus = 4;
		bannerLoop();
	}
	else if (bannerStatus === 4){
		bannerStatus = 1;
		bannerLoop();
	}
}, bannerTimer);


// pause looping when mouse is in banner
document.getElementById("main-banner").onmouseenter = function() {
	console.log('mouse in!');
	clearInterval(startBannerLoop);
};

document.getElementById("main-banner").onmouseleave = function() {
	console.log('mouse out!');
	startBannerLoop = setInterval(function() {
		if (bannerStatus === 1) {
		bannerStatus = 2;
		bannerLoop();
		} 
		else if (bannerStatus === 2){
			bannerStatus = 3;
			bannerLoop();
		}
		else if (bannerStatus === 3){
			bannerStatus = 4;
			bannerLoop();
		}
		else if (bannerStatus === 4){
			bannerStatus = 1;
			bannerLoop();
		}
		}, bannerTimer);
};

// click scrolling
document.getElementById("imgbanbtn-prev").onclick = function() {
	if (bannerStatus === 1) {
		bannerStatus = 4;
		bannerLoopBack();
		setTimeout(function() {
				$('#imgbanbtn-prev').click()
			}, 500);
	} else {
		bannerStatus -= 1; 
		bannerLoopBack();
	}
}

document.getElementById("imgbanbtn-next").onclick = function() {
	if (bannerStatus >= 4) {
		bannerStatus = 1;
		bannerLoop();
		setTimeout(function() {
				$('#imgbanbtn-next').click()
			}, 500);
	} else {
		bannerStatus += 1;
		bannerLoop();
	}
}

// main forward looping 
function bannerLoop() {
	var width = (document.getElementById('main-banner').offsetWidth + 'px');
	var two_width = (2*(document.getElementById('main-banner').offsetWidth) + 'px');
	var three_width = (3*(document.getElementById('main-banner').offsetWidth) + 'px');
	if (bannerStatus === 1) {
		document.getElementById("imgban1").style.opacity = "1";

		document.getElementById("imgban1").style.zIndex = "100";
		document.getElementById("imgban3").style.zIndex = "1";
		document.getElementById("imgban4").style.zIndex = "1";
		document.getElementById("imgban2").style.zIndex = "1";

		document.getElementById("imgban1").style.right = "0px";
		document.getElementById("imgban2").style.right = '-' + width;
		document.getElementById("imgban3").style.right = '-' + two_width;
		document.getElementById("imgban4").style.right = '-' + three_width;
		setTimeout(function() {
				document.getElementById("imgban5").style.zIndex = "1000";
			}, 500);
	}

	else if (bannerStatus === 2) {
		document.getElementById("imgban5").style.zIndex = "0";
		document.getElementById("imgban1").style.right = width;

		document.getElementById("imgban2").style.zIndex = "100";
		document.getElementById("imgban3").style.zIndex = "1";
		document.getElementById("imgban4").style.zIndex = "1";
		document.getElementById("imgban1").style.zIndex = "1";

		document.getElementById("imgban2").style.right = "0px";
		document.getElementById("imgban3").style.right = '-' + width;
		document.getElementById("imgban4").style.right = '-' + two_width;
	}

	else if (bannerStatus === 3) {
		document.getElementById("imgban5").style.zIndex = "0";
		document.getElementById("imgban1").style.right = two_width;
		document.getElementById("imgban1").style.zIndex = "10";
		document.getElementById("imgban1").style.opacity = "0";
		document.getElementById("imgban2").style.right = width;

		document.getElementById("imgban3").style.zIndex = "100";
		document.getElementById("imgban2").style.zIndex = "1";
		document.getElementById("imgban4").style.zIndex = "1";
		document.getElementById("imgban1").style.zIndex = "1";

		document.getElementById("imgban3").style.right = "0px";
		document.getElementById("imgban4").style.right = '-' + width;
	}

	else if (bannerStatus === 4) {
		document.getElementById("imgban1").style.zIndex = "70";
		document.getElementById("imgban1").style.right = '-' + width;
		document.getElementById("imgban1").style.opacity = "0";
		document.getElementById("imgban2").style.right = two_width;
		document.getElementById("imgban3").style.right = width;

		document.getElementById("imgban4").style.zIndex = "100";
		document.getElementById("imgban3").style.zIndex = "1";
		document.getElementById("imgban2").style.zIndex = "1";
		document.getElementById("imgban1").style.zIndex = "1";

		document.getElementById("imgban4").style.right = "0px";
		// setTimeout(function() {
		// 		$('#imgbanbtn-next').click()
		// 	}, 500);
		setTimeout(function() {
				document.getElementById("imgban5").style.zIndex = "1000";
			}, 500);
	}
}

// backward looping for back button
function bannerLoopBack() {
	var width = (document.getElementById('main-banner').offsetWidth + 'px');
	var two_width = (2*(document.getElementById('main-banner').offsetWidth) + 'px');
	var three_width = (3*(document.getElementById('main-banner').offsetWidth) + 'px');
	if (bannerStatus === 1) {
		document.getElementById("imgban1").style.right = "0px";
		document.getElementById("imgban2").style.right = '-' + width;
		document.getElementById("imgban3").style.right = '-' + two_width;
		document.getElementById("imgban4").style.right = '-' + three_width;
		setTimeout(function() {
				document.getElementById("imgban5").style.zIndex = "1000";
			}, 500);
	}

	else if (bannerStatus === 2) {
		document.getElementById("imgban5").style.zIndex = "0";
		document.getElementById("imgban1").style.opacity = "1";
		document.getElementById("imgban1").style.right = width;
		document.getElementById("imgban2").style.right = "0px";
		document.getElementById("imgban3").style.right = '-' + width;
		document.getElementById("imgban4").style.right = '-' + two_width;

	}

	else if (bannerStatus === 3) {
		document.getElementById("imgban5").style.zIndex = "0";
		document.getElementById("imgban1").style.right = two_width;
		document.getElementById("imgban2").style.right = width;
		document.getElementById("imgban3").style.right = "0px";
		document.getElementById("imgban4").style.right = '-' + width;
	}

	else if (bannerStatus === 4) {
		document.getElementById("imgban1").style.right = three_width;
		document.getElementById("imgban2").style.right = two_width;
		document.getElementById("imgban3").style.right = width;
		document.getElementById("imgban4").style.right = "0px";
		setTimeout(function() {
				document.getElementById("imgban5").style.zIndex = "1000";
			}, 500);
	}
}