import React from 'react';
import { removeFromList } from '../../actions/index' 
import { VocabList, mapStateToProps, mapDispatchToProps } from './VocabList';
import { shallow } from 'enzyme';

describe('VocabList', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<VocabList vocabList=
      {
        [
          {word: 'word', results: [
            {definition: 'this is a def', partOfSpeech: 'noun'},
             {}
            ]
          }
        ]
      }
    />);
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
  
  describe('mapDispatchToProps', () => {
    it('should call dispatch with a removeFromList action when removeFromList is called', () => {
      const mockDispatch = jest.fn();
      const action = removeFromList('word');
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.removeFromList('word');
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })
})
