export const ContactsReducer = (state, action) => {
  switch (action.type) {
    case 'addContact':
      return [...state, action.payload];
    case 'delete':
      return console.log(state)
    default:
      return state;
  }
};
