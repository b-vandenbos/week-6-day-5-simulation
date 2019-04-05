import React, {Component} from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import './wizard.css';
import store, {CANCEL} from '../../store';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export default class Wizard extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            toDashboard: false
        }  
        
        this.cancel = this.cancel.bind(this);
    }

    cancel() {
        store.dispatch({
            type: CANCEL
        });
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div className='wizard'>
                <div className='wizard-header'>
                    <h1 className='wizard-title'>Add New Listing</h1>
                    <Link to={'/'}><button className='cancel-button' onClick={this.cancel}>Cancel</button></Link>
                </div>
                <Route path='/wizard/step1' component={StepOne} />
                <Route path='/wizard/step2' component={StepTwo} />
                <Route path='/wizard/step3' component={StepThree} />
            </div>
        )
    }
}