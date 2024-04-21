import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas de 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const functionUser = getUser();

        expect( testUser).toEqual(functionUser)
    })

    test('getUsuarioActivo debe retornar un objeto con el nombre', ()=> {

        const username = 'Pepito123';
        const testUserObject = {
            uid: 'ABC567',
            username
        };

        const functionUserObject = getUsuarioActivo(username);

        expect( testUserObject).toEqual(functionUserObject);

    })
    
});