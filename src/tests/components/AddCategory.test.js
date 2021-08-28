import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Prueba en componente <AddCategory />', () => {

    //const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>);

    beforeEach( () => {
        jest.clearAllMocks();

        wrapper = shallow( <AddCategory setCategories={ setCategories }/>);
    });

    test('debe mostrar <AddCategory /> correctamente', () => {      
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');

        const value = 'goku';

        input.simulate('change', { target: { value }});
        /*input.simulate('change', { 
            target: { 
                value: value,
            }
        });*/
    });  
 
    test('No debe postear la informacion con submit', () => {
        
        //wrapper.find('form').simulate('submit', { preventDefault: () =>{} });
        wrapper.find('form').simulate('submit', { 
            preventDefault(){} 
        });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'goku';

        //1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value }});

        //2. simular el submit
        wrapper.find('form').simulate('submit', { 
            preventDefault(){} 
        });

        //3. setCategories se debe de haber llamdo
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        //4. el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
});
