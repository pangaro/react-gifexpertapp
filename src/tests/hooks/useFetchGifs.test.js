import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';


describe('Puebas en hoook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
        
        //const { data:images, loading } = useFetchGifs( 'goku' );
        const { result, waitForNextUpdate } =renderHook( () => useFetchGifs( 'goku' ));
        const { data, loading } = result.current;
        //console.log(data, loading);
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });
    
    test('debe retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } =renderHook( () => useFetchGifs( 'goku' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe(false);
    })
    
});  
