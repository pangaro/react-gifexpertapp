export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=KZTU5vULeqpKNNJz7020tMdWHLvP50ZY`;   
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( ( img ) => {
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url,
        }
    });

    return gifs;
}