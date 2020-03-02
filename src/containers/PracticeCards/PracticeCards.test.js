import React from 'react';
import { PracticeCards, mapStateToProps, mapDispatchToProps } from './PracticeCards';
import { shallow } from 'enzyme';

describe('PracticeCards', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<PracticeCards vocabList={[{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}, {}]}]}/>)
    expect(wrapper).toMatchSnapshot();
  })

  describe('Method Tests', () => {
    it('should shuffle the given array when shuffleList is called', () => {
      wrapper = shallow(<PracticeCards vocabList={[{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}, {}]}]}/>)
      let unshuffled = [1,2,3,4]
      expect(wrapper.instance().shuffleList(unshuffled).length).toEqual(unshuffled.length)
    })
    it('should call checkGuess when the checkGuess button is clicked', () => {
      wrapper = shallow(<PracticeCards vocabList={[{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}, {}]}]}/>)
      wrapper.instance().checkGuess = jest.fn();
      wrapper.find('.check-guess').simulate('click');
      expect(wrapper.instance().checkGuess).toHaveBeenCalled()
    })
    it('should update state when a word is guessed correctly', () => {
      wrapper = shallow(<PracticeCards vocabList={[{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}, {}]}]}/>)
      const startState = {guess: 'hat', correctlyGuessedWords: []};
      wrapper.setState(startState);
      const expected = {guess: '', correctlyGuessedWords: ['hat']};
      wrapper.instance().checkGuess('hat');
      expect(wrapper.state()).toEqual(expected);
    })
    it('should update state when handleChange is called', () => {
      const startState = {guess: '', correctlyGuessedWords: []};
      wrapper = shallow(<PracticeCards vocabList={[{word: 'word', results: [{definition: 'definition', partOfSpeech: 'noun'}, {}]}]}/>)
      wrapper.setState(startState);
      const mockEvent = {target: {name: 'guess', value: 'hat'}};
      const expected = {guess: 'hat', correctlyGuessedWords: []};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('guess')).toEqual(expected.guess);
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
})