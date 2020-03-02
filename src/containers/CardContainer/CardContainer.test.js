import React from 'react';
import { CardContainer, mapStateToProps, mapDispatchToProps } from './CardContainer';
// import { shallow } from 'enzyme';

describe('mapStateToProps', () => {
  it('should return an object with the searchedWordDetails and vocabList', () => {
    const mockState = {
      searchedWord: {word: 'hat', definition: 'this is a definition', type: 'noun'},
      loadingStatus: true,
      vocabList: [{word: 'hat'}, {word: 'cat'}],
      someOtherProp: false
    }
    const expected = {
      searchedWordDetails: {word: 'hat', definition: 'this is a definition', type: 'noun'},
      vocabList: [{word: 'hat'}, {word: 'cat'}],
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})