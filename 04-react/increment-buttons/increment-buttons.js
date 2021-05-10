function Button(props) {
	const handleClick = () => props.onClickFunction(props.increment)
	return (
		<button onClick={handleClick}>
			+{props.increment}
		</button>
	);
}

// Display
function Display(props) {
	return (
		<div>
			{props.message}
		</div>
	);
}

// App
function App() {
	const [counter, setCounter] = useState(0);
	const incrCounter = (incr) => setCounter(counter + incr);
	return (
		<>
			<Button onClickFunction={incrCounter} increment={1} />
			<Button onClickFunction={incrCounter} increment={5} />
			<Button onClickFunction={incrCounter} increment={10} />
			<Button onClickFunction={incrCounter} increment={100} />
			<Display message={counter} />
		</>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('mountNode'),
);