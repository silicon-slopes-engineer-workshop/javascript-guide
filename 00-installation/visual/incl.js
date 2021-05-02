fetch("/src/include/head.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector("head").innerHTML = data;
		document.title = "JS Installation";
	});

fetch("/src/include/header.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector("header").innerHTML = data;
	});

fetch("/src/include/nav.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector("nav").innerHTML = data;
	});

fetch("/src/include/footer.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector("footer").innerHTML = data;
	});