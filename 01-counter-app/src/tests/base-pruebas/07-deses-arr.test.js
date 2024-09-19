import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr, arreglos', ()=> {

    test('debe retornar un string y un numero', ()=> {
        
        const [ letters, numbers ] = retornaArreglo()       

        expect(letters).toEqual(expect.any(String))
        expect(numbers).toEqual(expect.any(Number))
    })
})