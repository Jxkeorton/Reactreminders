import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
        <header className = 'header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green' } 
                text={showAdd ? 'close' : 'add' } 
                onClick={onAdd} 
            />
        </header>
    </div> 
  )
}

Header.defaultProps = {
    title: 'Task Manager',
} 

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
