import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import moment from 'moment'
import * as buttons from '../constants/Buttons'
import { DATE_FORMAT } from '../constants/Constants'

export default class ProductRow extends Component {
	render() {
		const { id, name, description, price, dateAvailable, isTaxable, onEdit, onDelete } = this.props
		return (
			<tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>{moment(dateAvailable).format(DATE_FORMAT)}</td>
        <td>{isTaxable ? 'Y' : 'N'}</td>
        <th>
        	<Button bsStyle="primary" onClick={() => onEdit(id) }>{buttons.BUTTON_EDIT_PRODUCT}</Button>
        	<Button bsStyle="link" onClick={() => {if(confirm('Are you sure you want to delete this product?')) {onDelete(id)}; }}>{buttons.BUTTON_DELETE_PRODUCT}</Button>
        </th>
    	</tr>
		);
	}
}
