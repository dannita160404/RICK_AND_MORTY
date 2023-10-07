export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"

export const addFav = (character) =>{
    return {
        type: ADD_FAV,
        playload: character

    }
}

export const removeFav = (id) =>{
    return {
        type: REMOVE_FAV,
        playload: id

    }
}

export const filterCards = (gender) => {
    return{
        type: FILTER,
        playload: gender,
    }
}

export const orderCards = (order) =>{
    return{
        type: ORDER,
        playload: order
    }
}