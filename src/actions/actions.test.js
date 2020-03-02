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
})