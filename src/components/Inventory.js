import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

import ProductRow from './ProductRow'

export default class Inventory extends Component {
	render() {
		const { inventory, onEditClick, onDeleteClick } = this.props
		const rows = inventory.map(product => {
			return <ProductRow key={product.id} {...product} onEdit={onEditClick} onDelete={onDeleteClick}></ProductRow>
		})

		if (!rows.length) {
			return <h3>Add some products to get started</h3>
		} else {
			return (
	      <Table striped bordered condensed hover>
	        <thead>
	          <tr>
	            <th>Name</th>
	            <th>Description</th>
	            <th width="10%">Price</th>
	            <th width="10%">Date Available</th>
	            <th width="5%">Taxable</th>
	            <th width="15%"></th>
	          </tr>
	        </thead>
	        <tbody>{rows}</tbody>
	      </Table>
			)
		}
	}
}
