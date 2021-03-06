import React from 'react';
import { addToList } from '../../actions/index' 
import { VocabCard, mapStateToProps, mapDispatchToProps } from './VocabCard';
import { shallow } from 'enzyme';

describe('VocabCard', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<VocabCard vocabList={[{word: 'hat'}, {word: 'cat'}]}/>);
    expect(wrapper).toMatchSnapshot();
  })
  describe('Method Tests', () => {
    it('should call addToList when the add to vocab list button is clicked', () => {
      wrapper = shallow(<VocabCard vocabList={[{word: 'hat'}, {word: 'cat'}]} wordDetails={{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}]}} />);
      wrapper.instance().addToList = jest.fn();
      wrapper.find('button').simulate('click');
      expect(wrapper.instance().addToList).toHaveBeenCalled();
    })
    it('should return true if the word exists in the vocabList', () => {
      wrapper = shallow(<VocabCard vocabList={[{word: 'hat'}, {word: 'cat'}]} wordDetails={{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}]}} />);
      expect(wrapper.instance().checkIfInVocabList('cat')).toEqual(true)
    })
    it('should return falsey if the word does not exist in the vocabList', () => {
      wrapper = shallow(<VocabCard vocabList={[{word: 'hat'}, {word: 'cat'}]} wordDetails={{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}]}} />);
      expect(wrapper.instance().checkIfInVocabList('yellow')).toEqual(undefined)
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
    it('should call dispatch with a addToVocabList action when addToVocabList is called', () => {
      const mockDispatch = jest.fn();
      const action = addToList('word');
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.addToVocabList('word');
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })
})
