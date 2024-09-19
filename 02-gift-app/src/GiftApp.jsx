import { useState } from 'react';
import { SearchComponent } from './components/SearchComponent'
import './GiftApp.css';
import { CategoryList } from './components/CatergoyList';

export function GitfApp(){

    const [categories, setCategories] = useState([])   
    
    function onNewCategory(newCategory){

        const lowerCategories = categories.map(category => category.toLowerCase())
        if(lowerCategories.includes(newCategory.toLowerCase())) return

        setCategories([newCategory, ...categories])
    }

    return (
        <div>
            <h1>Gitf App</h1>

            <SearchComponent onHandleCategory={ onNewCategory } />
            <CategoryList categories={categories} />

        </div>
    )
}