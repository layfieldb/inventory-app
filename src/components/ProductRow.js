import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import moment from 'moment'

export default class ProductRow extends Component {
	render() {
		const { id, name, description, price, dateAvailable, isTaxable, onEdit, onDelete } = this.props
		return (
			<tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>{moment(dateAvailable).format("MM/DD/YYYY")}</td>
        <td>{isTaxable ? 'Y' : 'N'}</td>
        <th>
        	<Button bsStyle="primary" onClick={() => onEdit(id) }>Edit</Button>
        	<Button bsStyle="link" onClick={() => onDelete(id) }>Delete</Button>
        </th>
    	</tr>
		);
	}
}
