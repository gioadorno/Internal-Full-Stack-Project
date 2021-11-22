import * as api from '../API';

// Action Creators - functions that return an action
export const getProps = () => async (dispatch) => { //Has to use thunk to load the action properly utilizing async and dispatch

    try {
        const { data } = await api.getProps(); // First getting response from the api, which is data that represents the posts.

        dispatch({ type: 'fetch', payload: data}); //Successfuly using redux to pass the action from the data in api.fetchpost
    } catch (error) {
        console.log(error.message)
    }

}

export const createProp = (prop) => async (dispatch) => {
    try {
        const { data } = await api.createProp(prop);

        dispatch({ type: 'create', payload: data })
    } catch (error) {
        console.log(error)
    }
}

// Maps
export const getMapProps = () => async (dispatch) => { 

    try {
        const { data } = await api.getProps(); 

        dispatch({ type: 'fetch', payload: data}); 
    } catch (error) {
        console.log(error.message)
    }
}

// Homepage
export const getHomeProps = () => async (dispatch) => { 

    try {
        const { data } = await api.getProps(); 

        dispatch({ type: 'fetch', payload: data}); 
    } catch (error) {
        console.log(error.message)
    }
};


