import React, { Component } from 'react'
import { Button, Checkbox, Col, ControlLabel, Grid, Form, FormControl, FormGroup } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { BUTTON_CANCEL, BUTTON_SAVE } from '../constants/Buttons'
import 'react-datepicker/dist/react-datepicker.css'

export default class ProductForm extends Component {
	constructor(props) {
		super(props);

		this.state = props.inventory;

		this.updateState = this.updateState.bind(this)
		this.handleDateChange = this.handleDateChange.bind(this)
		this.onSubmit	 	= this.onSubmit.bind(this)
	}

	handleDateChange(theDate) {
    this.setState({ dateAvailable: theDate });
	}

	validateDescription() {
		const { description } = this.state;
		return !description || description.length > 3 ? null : 'error';
	}

	validateName() {
		const { name } = this.state;
		return!name || name.length > 3 ? null : 'error';
	}

	validatePrice() {
		const { price } = this.state;
		return !price || /^\d+(?:\.\d{0,2})$/.test(price) ? null : 'error'
	}

	updateState(e) {
    let { name, checked, type, value } = e.target;
    let field = {};

    switch(type) {
      case 'checkbox': {
        field[name] = checked;
        break;
      }

      default:
        field[name] = value;
        break;
    }

    this.setState(field);
	}

	onSubmit(e) {
	 	e.preventDefault()

		const { navigateToHome } = this.props
		const { addProduct, editProduct } = this.props.actions

	 	if(this.state.id) {
	 		editProduct(this.state)
	 	} else {
	 		addProduct(this.state)
	 	}
	 	navigateToHome()
	 	return false
	}

	render() {
		const style = {
			paddingBottom: '20px',
			textAlign: 'center'
		}
		const { navigateToHome } = this.props
		const formTitle = [this.state.id > -1 ? 'Edit' : 'Add', 'Product'].join(' ')

		return (
			<Grid>
				<h3 style={style}>{formTitle}</h3>
				<Form horizontal onSubmit={this.onSubmit}>
				  <FormGroup validationState={this.validateName()}>
				    <Col componentClass={ControlLabel} sm={2}>Name</Col>
				    <Col sm={9}>
				      <FormControl
			        	type="text"
			        	name="name"
			        	placeholder="Name"
			        	value={this.state.name || ''}
			        	onChange={this.updateState} />
				    </Col>
				  </FormGroup>

			    <FormGroup validationState={this.validateDescription()}>
			      <Col componentClass={ControlLabel} sm={2}>Description</Col>
			      <Col sm={9}>
			        <FormControl
			        	type="text"
			        	name="description"
			        	componentClass="textarea"
			        	placeholder="Description"
			        	value={this.state.description || ''}
			        	onChange={this.updateState} />
			      </Col>
			    </FormGroup>

			    <FormGroup validationState={this.validatePrice()}>
			      <Col componentClass={ControlLabel} sm={2}>Price</Col>
			      <Col sm={9}>
			        <FormControl
			        	type="text"
			        	name="price"
			        	placeholder="Price"
			        	value={this.state.price || ''}
			        	onChange={this.updateState} />
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col componentClass={ControlLabel} sm={2}>Date Available</Col>
			      <Col sm={9}>
			      	<DatePicker selected={moment(this.state.dateAvailable)} onChange={this.handleDateChange} />
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col componentClass={ControlLabel} sm={2}>Taxable</Col>
			      <Col sm={9}>
			        <Checkbox
			        	name="isTaxable"
			        	checked={this.state.isTaxable || false}
			        	onChange={this.updateState} />
			      </Col>
			    </FormGroup>

					<FormGroup>
			      <Col smOffset={2} sm={10}>
			        <Button bsStyle="primary" ref={(Button) => { this.saveButton = Button }} bsSize="small" type="submit">{BUTTON_SAVE}</Button>
			        <Button bsStyle="link" onClick={navigateToHome}>{BUTTON_CANCEL}</Button>
			      </Col>
			    </FormGroup>
			  </Form>
		  </Grid>
		);
	}
}
