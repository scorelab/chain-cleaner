import React,{Component} from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import Modal from "react-responsive-modal";
import {database} from "../firebase/firebase";
import Select from 'react-select';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import AuthUserContext from './AuthUserContext';



const AddHeistButton = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NewHeistButtonAuth />
      : <NewHeistButtonNonAuth />
    }
  </AuthUserContext.Consumer>

const FORM_STATE = {
  heistName:'',
  description: '',
  extra: '',
  type: 'Low',
  error: null,
  open: false,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

let recaptchaField = false;
let transactionsTags;
let addressesTags;

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
	handleOnChange (values) {
		const { multi } = this.state;
		if (multi) {
			this.setState({ transactions: values });
			transactionsTags = values;
		} else {
			this.setState({ values });
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
		    addressesTags = value;
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


class NewHeistButtonAuth extends Component {
    constructor(props) {
        super(props);
        this.state = { ...FORM_STATE };

        this.reportRef = database.ref('/reports');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onOpenModal = () => {
        this.setState({ open: true });
      };

    onCloseModal = () => {
        this.setState({ open: false });
      };

    handleSubmit(event) {
        if (!recaptchaField) {
            event.preventDefault();
            alert("Please verify the Re-CAPTCHA!");
        } else {
            event.preventDefault();
            const {
                heistName,
                description,
                type,
            } = this.state;

            let transactions = [];
            let addresses = [];
            let today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

            if (typeof addressesTags === 'undefined') {
                alert("Please insert address(s)!");
            } else {
                for (let s = 0; s < addressesTags.length; s++) {
                    addresses[s] = addressesTags[s].value;
                }
            }

            if (typeof transactionsTags === 'undefined') {
                alert("Please insert transaction(s)!");
            } else {
                for (let s = 0; s < transactionsTags.length; s++) {
                    transactions[s] = transactionsTags[s].value;
                }
            }

            if (!(typeof transactionsTags === 'undefined') && !(typeof addressesTags === 'undefined')) {
                this.reportRef.push({
                    heistName: heistName,
                    description: description,
                    type: type,
                    transactionsTags: transactions,
                    addressesTags: addresses,
                    time: today
                });

                alert("Submitted Successfully!");
                this.setState({...FORM_STATE});
                recaptchaField = false;
                this.onCloseModal();
                location.reload();
            }

        }

    }

    onChange(value){
            recaptchaField = true;
    }

    render() {
        const {
            heistName,
            description,
            type,
            error,
        } = this.state;

         const isInvalid =
              heistName === '' ||
              description === '';

        return(
            <div className="pull-right">
                <button type="button" className="btn btn-warning newHeistButton" onClick={this.onOpenModal}>
                    <span className="fa fa-plus"/> Add New Heists
                </button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="heistPopup">
                        <h4>Report New Heists</h4>
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
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"
                                          value={description}
                                          onChange={event => this.setState(byPropKey('description', event.target.value))}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Type</label>
                                <select className="form-control" id="exampleFormControlSelect1"
                                        value={type}
                                        onChange={event => this.setState(byPropKey('type', event.target.value))}
                                >
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>Affected</option>
                                    <option>High</option>
                                    <option>Danger</option>
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
                            <button type="submit" className="btn btn-primary mb-2" disabled={isInvalid} style={{marginBottom: "30px"}}>
                                Submit New Heist
                            </button>
                            {error && <p style={{color: '#aa1d1d'}}>{error.message}</p>}
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

const NewHeistButtonNonAuth = () =>
    <div className="pull-right">
        <p style={{backgroundColor:"#e05353", color:"#ffffff",padding:"1px 4px 1px 4px", marginTop:"-20px"}}>Login for submit a new Heist!</p>
    </div>

export default AddHeistButton;

export{
     TransactionMulti,AddressMulti
}
