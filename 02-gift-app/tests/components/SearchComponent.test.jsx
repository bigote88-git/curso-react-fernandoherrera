import { fireEvent, render, screen } from "@testing-library/react"
import { SearchComponent } from "../../src/components/SearchComponent"

describe('Testing <SearchComponent.jsx />', ()=> {
    
    test('Test the input value', ()=> {
        
        render(<SearchComponent onHandleCategory={()=> {}} />)
        const input = screen.getByRole('textbox')
        
        fireEvent.input( input, { target: { value: 'React Native'}})
        
        expect(input.value).toBe('React ')
        
        // console.log(input);
        
    })
    
})