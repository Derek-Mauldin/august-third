function HideAllShowOne(d) {
	console.log(d);
	var menuItem = ["about-me", "contact", "portfolio", "resume"];

	for(i = 0; i < menuItem.length; i++) {
		document.getElementById(menuItem[i]).style.display = "none";
	}

	if(d === 'abtme') {
		document.getElementById(menuItem[0]).style.display = "block";
	} else if(d === 'cont') {
		document.getElementById(menuItem[1]).style.display = "block";
	} else if(d === 'port') {
		document.getElementById(menuItem[2]).style.display = "block";
	} else if(d === 'res') {
		document.getElementById(menuItem[3]).style.display = "block";
	}

}