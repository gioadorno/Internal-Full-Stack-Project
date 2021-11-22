import * as api from '../API';

// Action Creators - functions that return an action
export const getDispoProps = () => async (dispatch) => { //Has to use thunk to load the action properly utilizing async and dispatch

    try {
        const { data } = await api.getDispoProps(); // First getting response from the api, which is data that represents the posts.

        dispatch({ type: 'DISPOFETCH', payload: data}); //Successfuly using redux to pass the action from the data in api.fetchpost
    } catch (error) {
        console.log(error.message)
    }

}

export const createDispoProp = (dispoProp) => async (dispatch) => {
    try {
        const { data } = await api.createDispoProp(dispoProp);

        dispatch({ type: 'DISPOCREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}