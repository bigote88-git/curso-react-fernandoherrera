import './GiftItem.css';

export function GiftItem({ title, url }){

    return (
        <div className="grid-card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>   
    )
}