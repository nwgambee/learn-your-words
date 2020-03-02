import * as actions from '../actions/index'

describe('actions', () => {
  it('should have a type of GET_WORD', () => {
    const query = 'hat'
    const expectedAction = {
      type: 'GET_WORD',
      query
    }
    const result = actions.getVocabWord(query)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of ADD_TO_LIST', () => {
    const word = 'hat'
    const expectedAction = {
      type: 'ADD_TO_LIST',
      word
    }
    const result = actions.addToList(word)
    expect(result).toEqual(expectedAction)
  })
})