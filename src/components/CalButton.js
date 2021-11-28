import React from 'react';

const CalButton = (props) => {

    return <div >
        <button className = "button" value = {props.value} onClick = {props.onClick}>  {props.value}</button>

        </div>

}

export default CalButton;