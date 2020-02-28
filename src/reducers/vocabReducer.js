export const vocabReducer = (state = '', action) => {
    switch (action.type) {
        case 'GET_WORD':
            return action.query
        default:
            return state;
    }
}