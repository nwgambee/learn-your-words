import React from 'react';
import { getVocabWord } from '../../actions/index' 
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<SearchForm />);
    expect(wrapper).toMatchSnapshot();
  })
  describe('Method Tests', () => {
    it('should call handleSubmit when the submit button is clicked', () => {
      wrapper = shallow(<SearchForm />);
      wrapper.instance().handleSubmit = jest.fn();
      const form = wrapper.find('form').first();
      form.simulate('submit')
      expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
    })
    it('should update state when handleError is called', () => {
      const startState = {query: '', error: ''};
      wrapper = shallow(<SearchForm />);
      wrapper.setState(startState);
      const expected = {query: '', error: 'Sorry, we were not able to find a definition for that word. Make sure your spelling is correct!' };
      wrapper.instance().handleError();
      expect(wrapper.state('error')).toEqual(expected.error);
    })
    it('should update state when handleChange is called', () => {
      const startState = {query: '', error: ''};
      wrapper = shallow(<SearchForm />);
      wrapper.setState(startState);
      const mockEvent = {target: {name: 'query', value: 'hat'}};
      const expected = {query: 'hat', error: ''};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('query')).toEqual(expected.query);
    })
  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with a getVocabWord action when getVocabWord is called', () => {
      const mockDispatch = jest.fn();
      const action = getVocabWord('query');
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.getVocabWord('query');
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })
})
