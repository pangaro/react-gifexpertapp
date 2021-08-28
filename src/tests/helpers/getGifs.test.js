import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {
    
    test('debe traer 10 elementos', async() => {
        
        const gifs = await getGifs('Goku');

        expect( gifs.length ).toBe ( 10 );
    });
    
    test('debe traer un aregglo vacio', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe ( 0 );
    });
})
