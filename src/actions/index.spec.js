/**
* Test suite covering actions
*/
import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('actions', () => {
  it('setState should create SET_STATE action', () => {
    const initialState = [
	    {
  			id: 1,
        name: "Blue Lightsaber",
  			description: "A blue lightsaber, used by the light-side inclined",
  			price: 109.99,
  			dateAvailable: '2016-11-26T19:21:54.806Z',
  			isTaxable: false
  		}
    ]
    const nextState = {
    	type: types.SET_STATE,
    	state: [
		    {
          id: 1,
          name: "Blue Lightsaber",
          description: "A blue lightsaber, used by the light-side inclined",
          price: 109.99,
          dateAvailable: '2016-11-26T19:21:54.806Z',
          isTaxable: false
  			}
	    ]
    }
    expect(actions.setState(initialState)).toEqual(nextState)
  })

  it('addProduct should create ADD_PRODUCT action', () => {
    const initialState = {
			name: "Blue Lightsaber"
    }
    const nextState = {
    	type: types.ADD_PRODUCT,
  		name: "Blue Lightsaber"
    }
    expect(actions.addProduct(initialState)).toEqual(nextState)
  })

  it('editProduct should create EDIT_PRODUCT action', () => {
    const initialState = {
			id: 2,
			name: "Blue Lightsaber"
    }
    const nextState = {
    	type: types.EDIT_PRODUCT,
    	id: 2,
  		name: "Blue Lightsaber"
    }
    expect(actions.editProduct(initialState)).toEqual(nextState)
  })

  it('deleteProduct should create DELETE_PRODUCT action', () => {
    const initialState = 2;
    const nextState = {
    	type: types.DELETE_PRODUCT,
    	id: 2
    }
    expect(actions.deleteProduct(initialState)).toEqual(nextState)
  })
})

