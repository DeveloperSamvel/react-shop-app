import './Card.css';

const Card = ({
    img,
    imgAlt,
    description,
    secondaryText,
    buttonText,
    onButtonClick,
}) => {
    return (
        <div className="card">
            <div className="card-header">
                {img && <img className="card-img" src={img} alt={imgAlt} />}
            </div>
            <div className="card-body">
                <div>
                    {description && <p className="card-text">{description}</p>}
                </div>
            </div>
            <div className='card-footer'>
                {secondaryText && <p className="card-text">{secondaryText} ֏</p>}
                {buttonText && <button onClick={onButtonClick} className="btn btn-primary">{buttonText}</button>}
            </div>
        </div>
    )
}

export default Card;