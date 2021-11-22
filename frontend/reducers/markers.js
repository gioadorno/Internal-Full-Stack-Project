export default (marker = [], action) => {
    switch (action.type) {
        case 'GETMARKERS':
            return action.payload;
        case 'CREATEMARKER':
            return [...marker, action.payload]
        default:
            return marker;
    }
};

