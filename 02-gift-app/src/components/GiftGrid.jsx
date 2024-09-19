import { GiftItem } from "./GiftItem.jsx";
import './GiftGrid.css';

import { useFetchGift } from "../hooks/useFetchGifs.js";

export function GiftGrid({ category }){

    const { images, isLoading }  = useFetchGift(category)

    return(
        <section className="category-info">
            {isLoading && <p>Cargando imagenes</p>}
            <h3>{category.toUpperCase()}</h3>
            <div className="grid-images">
                {
                    images.map(({ id, title, url }) => {
                        return <GiftItem 
                            key={id} title={title} url={url}  />
                        })
                }
            </div>            
        </section>
    )
}