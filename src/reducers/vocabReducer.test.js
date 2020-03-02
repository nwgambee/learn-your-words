import { vocabReducer } from './vocabReducer'

describe('vocabReducer', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = '';
    const result = vocabReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state when type is GET_WORD', () => {
    const mockAction = {
      type: 'GET_WORD',
      query: 'some string'
    }
    const mockState = '';
    const expected = 'some string';
    const result = vocabReducer(mockState, mockAction)
    expect(result).toEqual(expected);
  })


})