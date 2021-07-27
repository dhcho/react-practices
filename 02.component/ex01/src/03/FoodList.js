import React, { Component } from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component {
    render() {
        return (
            <ul>
                { FoodList.map((food) => <ListItem key={food.no} name={food.name} quantity={food.quantity} />)}
            </ul>
        );
    }
}