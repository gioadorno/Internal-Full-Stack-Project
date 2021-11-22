import * as api from '../API';


export const getMarkers = () => async (dispatch) => { 
    
    try {
        const { data } = await api.getMarkers(); 
        
        dispatch({ type: 'GETMARKERS', payload: data });
    } catch (error) {
        console.log(error.message)
    }
};



export const createMarker = (marker) => async (dispatch) => {
    try {
        const { data } = await api.createMarker(marker);

        dispatch({ type: 'CREATEMARKER', payload: data })
    } catch (error) {
        console.log(error)
    }
};
