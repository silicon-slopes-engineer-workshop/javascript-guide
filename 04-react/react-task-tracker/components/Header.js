import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
	const onClick = () => {
		console.log('click')
	}
	return (
		<header className='header'>
			{/* <h1 style={headingStyle}>{title}</h1> */}
			<h1>{title}</h1>
			<Button color='green' text='Add' onClick={onClick}/>
			{/* <Button color='blue' text='About'/> */}
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTyles = {
	title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'blue'
// }

export default Header
