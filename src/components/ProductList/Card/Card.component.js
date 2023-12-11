import React from 'react';
import './Card.css';

const Card = ({
    img,
    imgAlt,
    title,
    description,
    secondaryText,
    buttonText,
    onButtonClick,
}) => {
    return (
        <div style={{border: "1px solid black"}}>
            {img && <img src={img} alt={imgAlt} />}
            <h5>{title}</h5>
            {secondaryText && <p>{secondaryText}</p>}
            <span>{description}</span>
            {buttonText && <button onClick={onButtonClick}>{buttonText}</button>}
        </div>
    )
}

export default Card;