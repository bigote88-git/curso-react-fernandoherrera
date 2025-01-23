import { useState } from "react"

export const useForm = (initialData = {}) => {
    
    const [formData, setFormData] = useState(initialData)
    
    const onInputChange = (event) => {        
        const input = event.target        
        setFormData({
            ...formData,
            [input.name]: input.value
        })
    }
    
    const onReset = () => setFormData(initialData)
    
    return { formData, onInputChange, onReset }
}