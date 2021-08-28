
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//import PropTypes from 'prop-types'

//const GifExpertApp = props => {
export const GifExpertApp = ({ defaultCategories = [] }) => {
    //const categories = [ 'pepe', 'pepa', 'pipa' ];

    //const [categories, setCategories] = useState([]);
    const [categories, setCategories] = useState( defaultCategories );
    /*const handleAdd = (e) => {
        //setCategories( [...categories, 'uno mas'] );
        setCategories( cats => [...categories, 'uno mas'] );
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                        //<li key={ category }> { category } </li>
                    ))
                }
            </ol>
        </>
    )
}

/*GifExpertApp.propTypes = {

}*/

export default GifExpertApp;
