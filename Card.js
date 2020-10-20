import React from 'react';

export const Card = (props) => {

    return (
        <div className={"card" + (props.clicked ? "animate" : "")} onClick={() => props.handleClick(props.id)}>
            <div className='img-container'>
                <img alt={props.name} src={props.src}/>
            </div>
            <div className='img-content'>
                <ul>
                    <li><strong>Wave:</strong> {props.name}</li>
                    <li><strong>Location:</strong> {props.location}</li>
                </ul>
            </div>
        </div>
    )
}
