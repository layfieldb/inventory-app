import { SET_STATE, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from '../constants/ActionTypes'
const initialState = [];

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_STATE:
			return action.state
		case ADD_PRODUCT:
			return [
				...state,
				{
					id: String(state.reduce((maxId, product) => Math.max(product.id, maxId), -1) + 1),
					name: action.name,
					description: action.description,
					price: action.price,
					dateAvailable: action.dateAvailable,
					isTaxable: action.isTaxable
				}
			]
		case EDIT_PRODUCT:
			return state.map((product) => {
				if(product.id === action.id) {
					return {
						id: action.id,
						name: action.name,
						description: action.description,
						price: action.price,
						dateAvailable: action.dateAvailable,
						isTaxable: action.isTaxable
					}
				}
				return product
			})
		case DELETE_PRODUCT:
			const index = state.findIndex(product => product.id === action.id);
			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			]
		default:
			return state
	}
}

export default reducer;