export default (books = [], action) => {
    switch (action.type) {
        case 'GETBOOKS':
            return action.payload;
        case 'CREATEBOOK':
            return [...books, action.payload];
        default:
            return books;
    }
};

