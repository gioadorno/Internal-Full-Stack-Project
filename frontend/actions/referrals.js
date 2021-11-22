import * as api from '../API';


export const getReferrals = () => async (dispatch) => { 
    
    try {
        const { data } = await api.getReferrals(); 
        
        dispatch({ type: 'GETREFERRALS', payload: data });
    } catch (error) {
        console.log(error.message)
    }
};



export const createReferral = (referral) => async (dispatch) => {
    try {
        const { data } = await api.createReferral(referral);

        dispatch({ type: 'CREATEREFERRAL', payload: data })
    } catch (error) {
        console.log(error)
    }
};
