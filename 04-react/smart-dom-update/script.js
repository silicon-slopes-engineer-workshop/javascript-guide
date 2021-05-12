const jsDiv = document.getElementById("dateJs");
const reactDiv = document.getElementById("dateReact");

const render = () => {
	jsDiv.innerHTML = `
		<div class="split">
			JS template
			<input />
			<p>${new Date()}</p>
		</div>
	`;
}

setInterval(render, 100);