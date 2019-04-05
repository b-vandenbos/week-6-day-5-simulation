import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './wizard.css';
import store, {STEP_THREE, CANCEL} from '../.././store';

export default class StepThree extends Component {
    constructor() {
        super();

        let reduxState = store.getState();

        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            img: reduxState.img,
            mortgage: '',
            rent: '',
            toDashboard: false
        }

        this.addHouse = this.addHouse.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount() {
        store.subscribe( () => {
            let reduxState = store.getState();
            this.setState({mortgage: reduxState.mortgage, rent: reduxState.rent});
        });
    }

    addHouse() {
        this.setState({toDashboard: true})
        let {name, address, city, state, zip, img, mortgage, rent} = this.state;
        axios.post('/houses/add', {name, address, city, state, zip, img, mortgage, rent})
        .then( () => {
            this.setState({name: '', address: '', city: '', state: '', zip: '', img: '', mortgage: '', rent: ''});
        })
        .catch( err => console.log(`There was an error in adding ${name} house: ${err}`));
        store.dispatch({
            type: CANCEL
        });
    }

    watchMortgage(val) {
        this.setState({mortgage: val});
    }

    watchRent(val) {
        this.setState({rent: val});
    }

    saveChanges() {
        let {mortgage, rent} = this.state;
        store.dispatch({
            type: STEP_THREE,
            payload: {mortgage, rent}
        });
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
    
        return (
            
            <div className='wizard-steps'>
            <div className='wizard-steps-form'>
                <p>Monthly Mortgage Amount</p><input name="mortgage" value={this.state.mortgage} onChange={e => this.watchMortgage(e.target.value)}/>
                <p>Desired Monthly Rent</p><input name="rent" value={this.state.rent} onChange={e => this.watchRent(e.target.value)}/>
            </div>
                <div className='navbar'>
                    <Link to={'/wizard/step2'}><button className='nav-button left' onClick={this.saveChanges}>Previous Step</button></Link>
                    <button className='complete-button right' onClick={this.addHouse}>Complete</button>
                </div>
            </div>
        )
    }
}