import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <Header className='header'>
        <h1>{title}</h1>
        <button className='btn'>Add</button>
    </Header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS in JS
// ADD THIS: style={headingStyle} TO <h1> FOR STYLING

// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'blue'
// }

export default Header