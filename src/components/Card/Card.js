/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Card.css';

export const Card = (props) => {
    return(
        <div className="card">
            <h3 className="card__title">{props.name}</h3>
            <img src = {props.src} width = "96px" height = "96px" className="card__img"/>
            <button className="card__btn">ПОЙМАТЬ</button>
        </div>
    )
};