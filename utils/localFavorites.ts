


const toggleFavorite = (id_pokemon: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if(favorites.includes(id_pokemon)){
        favorites = favorites.filter(favorite => favorite !== id_pokemon);
    }else{
        favorites.push(id_pokemon);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
// una funcion para saber si existe o no en favoritos
const existInFavorites = (id_pokemon: number):boolean => {
    // esta linea es para que no se rompa en el servidor
    if ( typeof window === 'undefined' ) {
        console.log('no existe window');
        return false;
        
    }
    // si no existe el localstorage, lo creo vacio para que no de error al parsear el json 
    // y devuelvo false porque no existe en favoritos   
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log('favorites: ', favorites);
    
    // si existe en favoritos devuelvo true
    return favorites.includes(id_pokemon);
}

const pokemonFavorite = {
    toggleFavorite,
    existInFavorites
};

export default pokemonFavorite;