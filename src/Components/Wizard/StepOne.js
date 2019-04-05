import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './wizard.css';
import store from '../.././store';
import {STEP_ONE} from '../.././store';

export default class StepOne extends Component {
    constructor() {
        super();

        let reduxState = store.getState();

        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            toDashboard: false
        }

        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount() {
        store.subscribe( () => {
            let reduxState = store.getState();
            this.setState({name: reduxState.name, address: reduxState.address, city: reduxState.city, state: reduxState.state, zip: reduxState.zip})
        });
    }

    watchName(val) {
        this.setState({name: val});
    }

    watchAddress(val) {
        this.setState({address: val});
    }

    watchCity(val) {
        this.setState({city: val});
    }

    watchState(val) {
        this.setState({state: val});
    }

    watchZipcode(val) {
        this.setState({zip: val});
    }

    saveChanges() {
        let {name, address, city, state, zip} = this.state;
        store.dispatch({
            type: STEP_ONE,
            payload: {name, address, city, state, zip}
        });
    }

    render() {
    
        return (
            <div className='wizard-steps'>
                <div className='wizard-steps-form'>
                    <p>Property Name</p><input name="name" value={this.state.name} onChange={e => this.watchName(e.target.value)}/>
                    <p>Address</p><input name="address" value={this.state.address} onChange={e => this.watchAddress(e.target.value)}/>
                    <div className='row3'>
                        <div className='info-unit'>
                            <p>City</p><input name="city" value={this.state.city} onChange={e => this.watchCity(e.target.value)}/>
                        </div>
                        <div className='info-unit'>
                            <p>State</p><input name="state" value={this.state.state} onChange={e => this.watchState(e.target.value)}/>
                        </div>
                        <div className='info-unit'>
                            <p>Zip</p><input name="zip" value={this.state.zip} onChange={e => this.watchZipcode(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='navbar'>
                <Link to={'/wizard/step2'}><button className='nav-button right' onClick={this.saveChanges}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}