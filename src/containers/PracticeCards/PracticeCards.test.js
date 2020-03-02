import React from 'react';
import { PracticeCards, mapStateToProps, mapDispatchToProps } from './PracticeCards';
import { shallow } from 'enzyme';

describe('PracticeCards', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<PracticeCards vocabList={[{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}, {}]}]}/>)
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return an object with the vocabList array', () => {
      const mockState = {
        searchedWord: {word: 'hat', definition: 'this is a definition', type: 'noun'},
        loadingStatus: true,
        vocabList: [{word: 'hat'}, {word: 'cat'}],
        someOtherProp: false
      }
      const expected = {
        vocabList: [{word: 'hat'}, {word: 'cat'}],
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})