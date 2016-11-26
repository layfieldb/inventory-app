import reducer from './index'
import * as types from '../constants/ActionTypes'

describe('reducer', () => {
  it('should handle initial state with empty action', () => {
    const action = {}
    const nextState = reducer(undefined, action)
    expect(nextState).toEqual([])
  })

  it('should handle initial state', () => {
    const action = {
        type: types.SET_STATE,
          state: [{
          id: 1,
          name: "Red Lightsaber"
        }]
      }
      const nextState = reducer(undefined, action)
      expect(nextState).toEqual([{
        id: 1,
        name: "Red Lightsaber"
      }])
  })

  it('should handle ADD_PRODUCT', () => {
    const initialState = [{
      id: 1,
      name: "Red Lightsaber"
    }]
    const action = {
      type: types.ADD_PRODUCT,
      name: "Green Lightsaber",
      description: "A green lightsaber",
      price: 39.99,
      dateAvailable: "11/23/2016",
      isTaxable: true
    }
    const nextState = reducer(initialState, action)
    expect(nextState).toEqual([
      {
        id: 1,
        name: "Red Lightsaber"
      },
      {
        id: 2,
        name: "Green Lightsaber",
        description: "A green lightsaber",
        price: 39.99,
        dateAvailable: "11/23/2016",
        isTaxable: true
      }
    ])
    // Checking whether state got polluted
    expect(initialState).toEqual([
      {
        id: 1,
        name: "Red Lightsaber"
      }
    ])
  })

  it('should handle EDIT_PRODUCT', () => {
    const initialState = [
      {
        id: 1,
        name: "Green Lightsaber"
      },
      {
        id: 2,
        name: "Purple Lightsaber"
      }
    ]
    const action = {
      type: types.EDIT_PRODUCT,
      id: 1,
      price: 99.99,
      name: "Green Lightsaber"
    }
    const nextState = reducer(initialState, action)
      expect(nextState).toEqual([
      {
        id: 1,
        price: 99.99,
        name: "Green Lightsaber"
      },
      {
        id: 2,
        name: "Purple Lightsaber"
        }
    ])
  })

  it('should handle DELETE_PRODUCT', () => {
    const initialState = [
      {
        id: 1,
        name: "Green Lightsaber"
      },
      {
        id: 2,
        name: "Red Lightsaber"
      },
      {
        id: 3,
        name: "Blue Lightsaber"
      }
    ]
    const action = {
      type: types.DELETE_PRODUCT,
      id: 2
    }
    const nextState = reducer(initialState, action)
    expect(nextState).toEqual([
      {
        id: 1,
        name: "Green Lightsaber"
      },
      {
        id: 3,
        name: "Blue Lightsaber"
      }
    ])
  })
})