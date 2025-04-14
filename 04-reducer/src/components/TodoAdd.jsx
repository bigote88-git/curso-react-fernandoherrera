import { useSimpleForm } from "../hooks/useSimpleForm";

export function TodoAdd({ onSubmit }){
    
    const { formData, onInputChange, onReset } = useSimpleForm({ description: ''})
    
    const { description } = formData
    
    function onSubmitEvent(event){
        event.preventDefault();
        
        if(description.length <= 1){
            console.log('New todo is empty, returning')
            inputEl.select()
            return;
        }
        
        onSubmit(description)
        onReset()
    }
    
    return (
        <form className='todo-form'
          action="#" onSubmit={ onSubmitEvent }>
            <input id="description" name="description" type="text" placeholder='What do you do?' value={description} 
            onChange={ onInputChange } />
            <button type="submit">Add</button>
          </form>
    );    
}