import { listReducer } from './listReducer'

describe('listReducer', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = listReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state when type is ADD_TO_LIST', () => {
    const mockAction = {
      type: 'ADD_TO_LIST',
      word: 'some word'
    }
    const mockState = ['different word'];
    const expected = ['different word', 'some word'];
    const result = listReducer(mockState, mockAction)
    expect(result).toEqual(expected);
  })

  it('should return the correct state when type is REMOVE_FROM_LIST', () => {
    const mockAction = {
      type: 'REMOVE_FROM_LIST',
      word: 'same'
    }
    const mockState = ['same'];
    const expected = [];
    const result = listReducer(mockState, mockAction)
    expect(result).toEqual(expected);
  })


})