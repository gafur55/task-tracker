import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <div className='header'>
        <h1>{title}</h1>
        <Button color='black' text='Add' onClick={onClick}/>       
    </div>
  )
}   

Header.defaultProps = {
  title: 'Task Tracker',
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