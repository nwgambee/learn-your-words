import React from 'react';
import { getVocabWord } from '../../actions/index' 
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
// import { shallow } from 'enzyme';

describe('mapDispatchToProps', () => {
  it('should call dispatch with a getVocabWord action when getVocabWord is called', () => {
    const mockDispatch = jest.fn();
    const action = getVocabWord('query');
    const mappedProps = mapDispatchToProps(mockDispatch)

    mappedProps.getVocabWord('query');
    expect(mockDispatch).toHaveBeenCalledWith(action);
  })
})