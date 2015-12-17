

function HideAllShowOne(d) {
	console.log(d);

	var menuItem = ["about-me", "contact", "portfolio", "resume"];

	for(i = 0; i < menuItem.length; i++) {
		document.getElementById(menuItem[i]).style.display = "none";
	}

	if(d === 'hp') {
		document.getElementById(menuItem[0]).style.display = "inline block";
	} else if(d === 'pp') {
		document.getElementById(menuItem[1]).style.display = "inline block";
	} else if(d === 'mp') {
		document.getElementById(menuItem[2]).style.display = "inline block";
	} else if(d === 'fp') {
		document.getElementById(menuItem[3]).style.display = "inline block";
	} else if(d === 'lp') {
		document.getElementById(menuItem[4]).style.display = "inline block";
	}
}