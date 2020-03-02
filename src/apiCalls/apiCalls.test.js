import { searchVocabWord } from './apiCalls'

describe('searchVocabWord', () => {
  let mockResponse = {
    word: 'searched word',
    definition: 'this is a definition for that word',
    typeOf: 'type of searched word',
    partOfSpeech: 'verb'
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch with the correct URL', () => {
    searchVocabWord('query');
    expect(window.fetch).toHaveBeenCalledWith('https://wordsapiv1.p.mashape.com/words/query', {"headers": {"x-rapidapi-host": "wordsapiv1.p.rapidapi.com", "x-rapidapi-key": "649786d330msh02191553897bc22p13932ejsnbec91e58c30a"}, "method": "GET"})
  })

  it('should return an object of word details', () => {
    searchVocabWord()
      .then(wordData => expect(wordData).toEqual(mockResponse))
  })

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    });

    expect(searchVocabWord()).rejects.toEqual(Error('Failed to retrieve vocab word.'))
  });

  it('should return an error if the Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to retrieve vocab word.'))
    })

    expect(searchVocabWord()).rejects.toEqual(Error('Failed to retrieve vocab word.'))
  })
})