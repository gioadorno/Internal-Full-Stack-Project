import * as api from '../API';


export const getBooks = () => async (dispatch) => { 
    
    try {
        const { data } = await api.getBooks(); 
        
        dispatch({ type: 'GETBOOKS', payload: data });
    } catch (error) {
        console.log(error.message)
    }
};



export const createBook = (book) => async (dispatch) => {
    try {
        const { data } = await api.createBook(book);

        dispatch({ type: 'CREATEBOOK', payload: data })
    } catch (error) {
        console.log(error)
    }
};
