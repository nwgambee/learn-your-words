export const listReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_TO_LIST':
          return [...state, action.word];
      case 'REMOVE_FROM_LIST':
          return state.filter(item => {
            return item.word !== action.id;
          })
      default:
          return state;
  }
}