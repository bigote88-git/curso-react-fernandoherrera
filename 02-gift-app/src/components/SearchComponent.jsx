// import './SearchComponent.css'
import { useState } from "react"
import PropTypes, { func } from 'prop-types'

export function SearchComponent ({ onHandleCategory }){
    
    const [searchValue, setSearchValue] = useState('')

    function handledCategory(){
        if(searchValue.trim().length < 2) return

        onHandleCategory(searchValue)
        setSearchValue('')
    }

    function handledSearchValue(event){
        setSearchValue(event.target.value)      
    }

    function handledSubmit(event){
        event.preventDefault()

        handledCategory()           
    }

    return (
        <section className="search-section">
            <form onSubmit={handledSubmit}>
                <input  type='text'className='searchInput' value={searchValue} 
                    onChange={handledSearchValue}/>
                <button onClick={handledCategory} className='buttonCategory'>Buscar</button>
            </form>
        </section>
    )
}

SearchComponent.propTypes = {
    onHandleCategory: func.isRequired
}