
export function todoReducer(initialState, action){
    
    switch (action.type) {
        case '[TODO] Add todo':
            return [...initialState, action.payload]
            
        case '[TODO] Delete todo':
            return initialState.filter(todo => todo.id !== action.payload)
            
        case '[TODO] Toggle status':
            return initialState.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                
                return todo;
            })
    
        default:
            return initialState;
    }
}