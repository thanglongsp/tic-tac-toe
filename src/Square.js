import React from 'react';
import './Css.css';

function Square(props) {
    let button;
    console.log(props);
    if( props.id % 2 === 0) {
        button = <button className="square1" onClick={props.onClick}>
            {props.value}
        </button>
    }
    else {
        button = <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    }
    return (
        button
    );
}

export default Square;