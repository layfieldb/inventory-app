import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import NavBar from '../components/NavBar'

const mapDispatchToProps = (dispatch) => {
	return {
    onAddClick: () => {
      browserHistory.push('/product/')
    }
  }
}

const NavBarContainer = connect(
	null,
	mapDispatchToProps
	)(NavBar)

export default NavBarContainer

