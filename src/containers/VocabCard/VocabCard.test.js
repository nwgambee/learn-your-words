import React from 'react';
import { addToList } from '../../actions/index' 
import { VocabCard, mapStateToProps, mapDispatchToProps } from './VocabCard';
import { shallow } from 'enzyme';


describe('VocabCard', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<VocabCard />);
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
    it('should call dispatch with a addToVocabList action when addToVocabList is called', () => {
      const mockDispatch = jest.fn();
      const action = addToList('word');
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.addToVocabList('word');
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })
})
