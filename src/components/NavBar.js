import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { BUTTON_ADD_PRODUCT } from '../constants/Buttons'

export default class NavBar extends Component {
	render() {
		const { onAddClick } = this.props
		const style = {
			margin: '20px 0'
		}
		return (
      <div>
        <Button style={style} className="pull-right" bsStyle="primary" onClick={() => onAddClick()}>{BUTTON_ADD_PRODUCT}</Button>
      </div>
		)
	}
}