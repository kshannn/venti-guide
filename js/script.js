//collapse collpasible menu when it loses focus (i.e clicking away)
	$("#navbarToggle").blur(function(event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#bs-example-navbar-collapse-1").collapse("hide");
		}
	});
});