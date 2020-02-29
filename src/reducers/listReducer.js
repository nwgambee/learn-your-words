export const listReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_TO_LIST':
          return [...state, action.word]
      default:
          return state;
  }
}