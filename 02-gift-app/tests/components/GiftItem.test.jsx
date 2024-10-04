import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"

describe('Test in component GiftItem.jsx', ()=>{
    
    const title = 'title test 2'
    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s'
    
    test('Match with the snapshot', ()=> {
        
        const { container } = render(<GiftItem title={title} url={url} />)
        expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="grid-card"
  >
    <img
      alt="title test 2"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
    />
    <p>
      title test 2
    </p>
  </div>
</div>
`)
    })
    
    test('Match the title and alt from img', () => {
        
        render(<GiftItem title={title} url={url} />);
        
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)        
    })
    
    test('Existe title text in the component', ()=> {
        
        render(<GiftItem title={title} url={url} />)
        
        expect(screen.getByText(title)).toBeTruthy()        
    })
})