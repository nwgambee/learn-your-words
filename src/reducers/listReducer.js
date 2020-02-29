export const listReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_TO_LIST':
          return action.query
      default:
          return state;
  }
}