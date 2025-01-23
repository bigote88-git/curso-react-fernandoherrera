import { Children } from './Children'
import { useCallback, useState } from 'react';

export const FatherApp = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = ( num ) => {
        setValor( valor + num )
    }
    
    const incrementarMemo = useCallback((num)=>{
        setValor( (valor) => valor + num )
    }, [])

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Children 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementarMemo }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
