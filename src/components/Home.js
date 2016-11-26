import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import NavBarContainer from '../containers/NavBarContainer'
import InventoryContainer from '../containers/InventoryContainer'

export default class Home extends Component {
	render() {
		return (
			<Grid>
				<NavBarContainer />
				<InventoryContainer />
			</Grid>
		)
	}
}
