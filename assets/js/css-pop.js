function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popUpDiv = document.getElementById(popUpDivVar);
	popUpDiv_height=blanket_height/2-200;//200 is half popup's height
	// popUpDiv.style.top = popUpDiv_height + 'px';
}
function window_pos(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv = document.getElementById(popUpDivVar);
	window_width=window_width/2-400;//400 is half popup's width
	// popUpDiv.style.left = window_width + 'px';
}
function removeElement(parentDiv, childDiv){
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
}
function addElement(windowname){
	var iframe = document.createElement("IFRAME");
	iframe.style.width = "100%";
	iframe.style.height = "100%";
	iframe.setAttribute("frameborder","0");
	if 	(windowname === "popUpDiv1") {
		iframe.setAttribute("src","https://player.vimeo.com/video/139122405");
		iframe.setAttribute("id","iframe1");
	}
	else {
		iframe.setAttribute("src","https://player.vimeo.com/video/37328349");
		iframe.setAttribute("id","iframe2");	
	}
	div = document.getElementById(windowname);
	div.insertBefore(iframe, div.firstChild);
}
function popup(windowname) {
	console.log(windowname);
	blanket_size(windowname);
	window_pos(windowname);
	toggle('blanket');
	toggle(windowname);
	// if (!document.getElementById('iframe')) {
	// 	addElement();
	// 	console.log('added clear iframe');
	// }		
}
function exit(windowname) {
	blanket_size(windowname);
	window_pos(windowname);
	toggle('blanket');
	toggle(windowname);
	if 	(windowname === "popUpDiv1") {
		removeElement(windowname, "iframe1");
	}
	else {
		removeElement(windowname, "iframe2");	
	}
	addElement(windowname);
}