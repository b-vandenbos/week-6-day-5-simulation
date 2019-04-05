import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';
import "./dashboard.css";

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        }

        this.getAllHouses = this.getAllHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount() {
        this.getAllHouses();
    }

    getAllHouses() {
        axios.get('/houses')
        .then(results => {this.setState({houses: results.data})})
        .catch(err => console.log(`There was an error in loading the houses: ${err}`));
    }

    deleteHouse(id) {
        axios.delete(`/houses/${id}`)
        .then(console.log(`The house with ${id} has been deleted`))
        .catch(err => console.log(`There was an error in deleting the house with id ${id}: ${err}`));
        this.getAllHouses();
    }

    render() {
        let {houses} = this.state;
        return (
            <div className='dashboard'>
                <div className='dashboard-header'>
                    <h1 className='title'>Dashboard</h1>
                    <Link to={'./wizard/step1'}><button className='add-button'>Add New Property</button></Link>
                </div>
                <div className='dashboard-content'>
                    <h2 className='listing-title'>Home Listings</h2>
                    {
                     houses.map((house, index) => {
                            return (<House key={index} house={house} deleteHouse={this.deleteHouse} />)
                        })
                    }
                </div>
            </div>
        )
    }
}