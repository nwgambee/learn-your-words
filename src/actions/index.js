export const getVocabWord = query => ({
    type: 'GET_WORD',
    query
})

export const addToList = word => ({
    type: 'ADD_TO_LIST',
    word
})

export const removeFromList = id => ({
    type: 'REMOVE_FROM_LIST',
    id
})