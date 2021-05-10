const testData = [
	{ name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook" },
	{ name: "Sophie Albert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Facebook" },
	{ name: "Sabastian Markbage", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

// CardList
// function
const CardList = (props) => (
	<div>
		<Card {...testData[0]} />
		<Card {...testData[1]} />
		<Card {...testData[0]} />
	</div>
);

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

// App
// function component
// const App = ({title}) => (
//   <div className="header">{title}</div>
// );
// class component
class App extends React.Component {
	render() {
		return (
			<div>
				<div className="header">{this.props.title}</div>
				<CardList />
			</div>
		);
	}
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
	mountNode,
);