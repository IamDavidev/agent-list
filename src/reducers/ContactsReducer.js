export const ContactsReducer = (state, action) => {
  switch (action.type) {
    case 'addContact':
      return [...state, action.payload];
    default:
      return state;
  }
};
