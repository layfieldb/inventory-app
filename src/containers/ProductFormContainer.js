import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../actions'
import ProductForm from '../components/ProductForm'
import moment from 'moment'

const getInventoryDetail = (products, id) => {
  return products.filter(product => product.id === id)[0] || {
    name: null,
    description: null,
    price: null,
    dateAvailable: moment(),
    isTaxable: false
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    inventory: getInventoryDetail(state, Number(ownProps.params.productId))
  }
}

const navigateToHome = () => {
  browserHistory.push('/')
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators( actions, dispatch ),
    navigateToHome
  }
}

const ProductFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm)

export default ProductFormContainer
