import { useState } from "react";

export function useSimpleForm (initialData){
    
    const [ formData, setFormData ] = useState(initialData);
    
    function onInputChange(event){
        
        const input = event.target;
        
        // if(input.value.trim() === '')
        //     return;
            
        setFormData({
            ...formData,
            [input.name]: input.value
            }
        )
    }
    
    function onReset(){
        setFormData(initialData)
    }
    
    return { formData, onInputChange, onReset }    
}