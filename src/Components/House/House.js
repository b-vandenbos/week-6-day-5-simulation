import React, {Component} from 'react';
import "./house.css";

export default class House extends Component {

    render() {
        let {house, deleteHouse} = this.props;
        return (
            <div className='house'>
                <div className='house-image'>
                    <img src={house.img} alt='house' />
                </div>
                <div className='house-info'>
                    <p>Property Name: {house.name}</p>
                    <p>Address: {house.address}</p>
                    <p>City: {house.city}</p>
                    <p>State: {house.state}</p>
                    <p>Zip: {house.zip}</p>
                </div>
                <div className='house-price'>
                    <p>Monthly Mortgage: ${house.mortgage}</p>
                    <p>Desired Rent: ${house.rent}</p>
                </div>
                <button className='house-delete' onClick={() => deleteHouse(house.id)}>X</button>
            </div>
        )
    }
}