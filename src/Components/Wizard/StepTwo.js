import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './wizard.css';
import store, {STEP_TWO} from '../.././store';

export default class StepTwo extends Component {
    constructor() {
        super();

        let reduxState = store.getState();

        this.state = {
            img: reduxState.img,
            toDashboard: false
        }

        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount() {
        store.subscribe( () => {
            let reduxState = store.getState();
            this.setState({img: reduxState.img});
        });
    }

    watchImg(val) {
        this.setState({img: val});
    }

    saveChanges() {
        let {img} = this.state;
        store.dispatch({
            type: STEP_TWO,
            payload: img
        });
    }

    render() {
    
        return (
            <div className='wizard-steps'>
                <div className='wizard-steps-form'>
                    <p>Image URL</p><input name="img" value={this.state.img} onChange={e => this.watchImg(e.target.value)}/>
                </div>
                <div className='navbar'>
                    <Link to={'/wizard/step1'}><button className='nav-button left' onClick={this.saveChanges}>Previous Step</button></Link>
                    <Link to={'/wizard/step3'}><button className='nav-button right' onClick={this.saveChanges}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}