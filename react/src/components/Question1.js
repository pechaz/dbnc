import React from 'react';

const DATA = [
    {room_type: "Queen", vacant_rooms: 5, price: 100},
    {room_type: "Double", vacant_rooms: 3, price: 75},
    {room_type: "Twin", vacant_rooms: 8, price: 60}
];

class Question1 extends React.Component {

    renderData = () =>{
        return DATA.map(item =>{
            return (
                <li>
                    {item.room_type}, {item.vacant_rooms}, ${item.price}
                </li>
            );
        })
    }

    render() {

        return (
            <div className="mainContainer">
                <ol>
                    {this.renderData()}
                </ol>
            </div>
        );
    }
}

export default Question1;
