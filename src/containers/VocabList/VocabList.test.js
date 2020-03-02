import React from 'react';
import { removeFromList } from '../../actions/index' 
import { VocabList, mapStateToProps, mapDispatchToProps } from './VocabList';
import { shallow } from 'enzyme';

describe('VocabList', () => {
  let wrapper;
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
  describe('Method Tests', () => {
    it('should return hidden if vocabList is not empty', () => {
      wrapper = shallow(<VocabList vocabList={[{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}, {}]}]}/>)
      expect(wrapper.instance().checkContents()).toEqual('hidden')
    })
    it('should return visible if vocabList is empty', () => {
      wrapper = shallow(<VocabList vocabList={[]}/>)
      expect(wrapper.instance().checkContents()).toEqual('visible')
    })
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
