// import './GiftItem.css';
import PropTypes from 'prop-types'; 

export function GiftItem({ title, url }){

    return (
        <div className="grid-card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>   
    )
}

GiftItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}