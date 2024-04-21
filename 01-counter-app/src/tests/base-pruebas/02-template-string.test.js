import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", ()=>{

    test('getSaludo deberia retornar Hola dev ', () => {
        
        const nombre = 'dev';
        const mensaje = getSaludo(nombre);

        expect(mensaje).toBe(`Hola ${nombre}`)
    });
})