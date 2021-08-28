import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';


describe('pruebas en <GifGridItem />', () => {

    const title = 'algos';

    const url = 'https://localhost/algo.jpg';
    
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> );


    test('debe mostrar <GifGridItem /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe tener un <P> con el titulo', () => {
        
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );
    });
    
    test('debe tener la imagen igual url y alt de los props', () => {
        
        const img = wrapper.find('img');
        //console.log(img.html());

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    
    test('el div debe tener la clase animate__swing', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__swing') ).toBe(true);
    });
})
