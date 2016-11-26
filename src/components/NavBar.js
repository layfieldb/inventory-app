import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class NavBar extends Component {
	render() {
		const { onAddClick } = this.props
		const style = {
			margin: '20px 0'
		}
		return (
      <div>
        <Button style={style} className="pull-right" bsStyle="primary" onClick={() => onAddClick()}>Add Product</Button>
      </div>
		)
	}
}