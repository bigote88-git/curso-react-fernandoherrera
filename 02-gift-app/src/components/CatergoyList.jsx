import { GiftGrid } from "./GiftGrid"

export function CategoryList({ categories }){

    return(
        categories.map(category => {
            return <GiftGrid category={category} key={category} />
        })
    )
}

