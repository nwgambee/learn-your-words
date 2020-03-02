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
      // wrapper.find('.search-word-form').simulate('submit');
      const form = wrapper.find('form').first();
      form.simulate('submit')
      expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
    })
    it.skip('should update state when handleError is called', () => {

    })
    it.skip('should update state when handleChange is called', () => {
      
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
