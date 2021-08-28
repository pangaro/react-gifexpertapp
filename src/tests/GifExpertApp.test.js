import React from 'react';
import GifExpertApp from "../GifExpertApp";
import { shallow } from 'enzyme';


describe('pruebas en <GifEspertApp />', () => {
    

    test('debe mostrarse correctamente', () => {

        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
       
        const categories = ['goku', 'vegeta'];

        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
    
})
