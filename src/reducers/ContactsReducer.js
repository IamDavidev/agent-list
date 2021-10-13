export const ContactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'addContact':
      return [...state, action.payload];
    case 'delete':
      return state.filter(i => i.id !== action.payload)
    default:
      return state;
  }
};
