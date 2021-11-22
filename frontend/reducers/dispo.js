export default (dispo = [], action) => {
    switch (action.type) {
        case 'DISPOFETCH':
            return action.payload;
        case 'DISPOCREATE':
            return [...dispo, action.payload]
        default:
            return dispo;
    }
};

