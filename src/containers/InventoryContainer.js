import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { deleteProduct } from '../actions'
import Inventory from '../components/Inventory'

const mapStateToProps = (state) => {
  return {
    inventory: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: (id) => {
      browserHistory.push('/product/' + id)
    },
    onDeleteClick: (id) => {
      dispatch(deleteProduct(id))
    }
  }
}

const InventoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory)

export default InventoryContainer
