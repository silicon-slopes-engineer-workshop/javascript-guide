const testData = [
	{ name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook" },
	{ name: "Sophie Albert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Facebook" },
	{ name: "Sabastian Markbage", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

// CardList
// function
const CardList = (props) => (
	<div>
		{props.profiles.map(profile => <Card {...profile} />)}
	</div>
);

/// [ <Card />, <Card />, <Card /> ]
// [ React.createElement(), React.createElement(), React.createElement() ]

// Card
class Card extends React.Component {
	render() {
		const profile = this.props;
		return (
			<div className="github-profile">
				<img src={profile.avatar_url} />
				<div className="info">
					<div className="name">{profile.name}</div>
					<div className="company">{profile.company}</div>
				</div>
			</div>
		);
	}
}

class Form extends React.Component {
	// userNameInput = React.createRef();
	state = { userName: '' };

	handleSubmit = (event) => {
		event.preventDefault(); // important when working with form
		console.log(
			// this.userNameInput.current.value
			this.state.userName
		);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Github username"
					value={this.state.userName}
					onChange={event => this.setState({ userName: event.target.value })}
					required
				/>
				<button>Add card</button>
			</form>
		);
	}
}

// App
// function component
// const App = ({title}) => (
//   <div className="header">{title}</div>
// );
// class component
class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		profiles: testData,
	// 	};
	// }

	state = {
		profiles: testData,
	};

	render() {
		return (
			<div>
				<div className="header">{this.props.title}</div>
				<Form />
				<CardList profiles={this.state.profiles} />
			</div>
		);
	}
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
	mountNode,
);