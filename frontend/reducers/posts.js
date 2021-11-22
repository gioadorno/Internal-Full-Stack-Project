export default (posts = [], action) => {
    switch (action.type) {
        case 'fetch':
            return action.payload;
        case 'create':
            return [...posts, action.payload]
        default:
            return posts;
    }
};

