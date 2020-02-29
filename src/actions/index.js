export const getVocabWord = query => ({
    type: 'GET_WORD',
    query
})

export const addToList = word => ({
    type: 'ADD_TO_LIST',
    word
})