export default (referrals = [], action) => {
    switch (action.type) {
        case 'GETREFERRALS':
            return action.payload;
        case 'CREATEREFERRAL':
            return [...referrals, action.payload];
        default:
            return referrals;
    }
};

