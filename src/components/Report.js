import React, {Component} from 'react';

import Navigation from './Navigation';
import withAuthorization from './withAuthorization';
import Select from 'react-select';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import ReCAPTCHA from 'react-google-recaptcha';
import HeistTimeline from './Timeline'
import {database} from '../firebase/firebase';
import Modal from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const ReportPage = () =>
  <div>
    <Navigation/>
    <ReportForm />
  </div>

const FORM_STATE = {
  heistName:'',
  description: '',
  extra: '',
  type: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

let recaptchaField = '';
let transactionsTags = '';
let transactionId = 0;
let addressesTags = '';
let addressesId = 0;

const TransactionMulti = createClass({
	displayName: 'CreatableDemo',
	propTypes: {
		hint: PropTypes.string,
		label: PropTypes.string
	},
	getInitialState () {
		return {
			multi: true,
			transactions: [],
			options: [
			],
			value: undefined
		};
	},
	handleOnChange (value) {
		const { multi } = this.state;
		if (multi) {
		    transactionsTags += value[transactionId].value+",";
		    transactionId += 1;
			this.setState({ transactions: value });
		} else {
			this.setState({ value });
		}
	},
	render () {
		const { multi, transactions, options} = this.state;
		return (
			<div className="section">
				<Select.Creatable
					multi={multi}
					options={options}
					onChange={this.handleOnChange}
					value={transactions}
                    placeholder="Enter multiple entries"
				/>
			</div>
		);
	}
});
const AddressMulti = createClass({
	displayName: 'CreatableDemo',
	propTypes: {
		hint: PropTypes.string,
		label: PropTypes.string
	},
	getInitialState () {
		return {
			multi: true,
			addresses: [],
			options: [
			],
			value: undefined
		};
	},
	handleOnChange (value) {
		const { multi } = this.state;
		if (multi) {
		    addressesTags += value[addressesId].value+",";
		    addressesId += 1;
			this.setState({ addresses: value });
		} else {
			this.setState({ value });
		}
	},
	render () {
		const { multi, addresses, options } = this.state;
		return (
			<div className="section">
				<Select.Creatable
					multi={multi}
					options={options}
					onChange={this.handleOnChange}
					value={addresses}
                    placeholder="Enter multiple entries"
				/>
			</div>
		);
	}
});

class ReportForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...FORM_STATE };

        this.reportRef = database.ref('/reports');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
      };

      onCloseModal = () => {
        this.setState({ open: false });
      };

     handleSubmit(event){
        event.preventDefault();
        const {
            heistName,
            description,
            extra,
            type,
        } = this.state;

        console.log(heistName+description+extra+type);
        console.log(transactionsTags);
        console.log(addressesTags);

        this.reportRef.push({
          heistName: heistName,
          description: description,
          extra: extra,
          type: type,
          transactionsTags: transactionsTags,
          addressesTags: addressesTags
        });

       alert("Submitted Successfully!");
       window.location.reload();
    }

    onChange(value){
            recaptchaField = value;
    }

    render() {
        const {
            heistName,
            description,
            extra,
            type,
            error,
        } = this.state;

         const { open } = this.state;

         const isInvalid =
             recaptchaField === '';

        return(
            <div className="container middle-pages">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Reported Heists</h3>
                        <div className="pull-right">
                            <button type="button" className="btn btn-warning newHeistButton" onClick={this.onOpenModal}>
                              <span className="fa fa-plus"  /> Add New Heists
                            </button>
                            <Modal open={open} onClose={this.onCloseModal} center>
                                <div className="heistPopup">
                                    <h2>Report New Heists</h2>
                                    <hr/>
                                    <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Heists Name</label>
                                        <input
                                            value={heistName}
                                            onChange={event => this.setState(byPropKey('heistName', event.target.value))}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                  value={description}
                                                  onChange={event => this.setState(byPropKey('description', event.target.value))}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Another Field</label>
                                        <input
                                            value={extra}
                                            onChange={event => this.setState(byPropKey('extra', event.target.value))}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Type</label>
                                        <select className="form-control" id="exampleFormControlSelect1"
                                                value={type}
                                                onChange={event => this.setState(byPropKey('type', event.target.value))}
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Transactions</label>
                                        <TransactionMulti/>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <AddressMulti/>
                                    </div>
                                    <div className="form-group">
                                        <ReCAPTCHA
                                            ref="recaptcha"
                                            sitekey="6LchelcUAAAAAGZwre6ZHG3-cDp0QZzwS1xxZGEx"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2" disabled={isInvalid}
                                            style={{marginBottom: "30px"}}>Submit Heist
                                    </button>
                                    {error && <p style={{color: '#aa1d1d'}}>{error.message}</p>}
                                </form>
                                </div>
                            </Modal>
                        </div>
                        <hr/>
                        <div className="middle-pages-2">
                             <HeistTimeline/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ReportPage);

export {
  ReportForm, TransactionMulti,AddressMulti
};