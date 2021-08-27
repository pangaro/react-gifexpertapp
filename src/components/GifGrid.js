import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );

    //console.log(state);
/*
    const [images, setimages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then( setimages );
            //.then( ( imgs ) => setimages( imgs ) );
    }, [ category ]);
*/

    return (
        <>
            <h3 className="animate__animated animate__swing__delay-2s"> { category } </h3>

            { loading && <p>Loading...</p> }
            <div className="card-grid">
                {
                     images.map( ( img ) => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img } /> 
                    ))
                }
            </div>
        </>
    )
}
