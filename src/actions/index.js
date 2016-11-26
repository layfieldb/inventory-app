import * as types from '../constants/ActionTypes'

export const setState = (state) => {
	return {
		type: types.SET_STATE,
		state
	}
}

export const addProduct = (inventory) => {
	return {
		type: types.ADD_PRODUCT,
		...inventory
	}
}

export const editProduct = (inventory) => {
	return {
		type: types.EDIT_PRODUCT,
		...inventory
	}
}

export const deleteProduct = (id) => {
	return {
		type: types.DELETE_PRODUCT,
		id
	}
}
