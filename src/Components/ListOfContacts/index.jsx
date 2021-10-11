import React, {useReducer} from 'react'

import './index.css';
import Contacts from '../../services/contacts';
import FormContacts from '../FormContacts';
import { ContactsReducer } from '../../reducers/ContactsReducer';
const ListOfContacts = () => {
  
  const [state,dispatch] = useReducer(ContactsReducer, Contacts) 
  
  return (
    <div className="contacts">
      <table className="table__contacts">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>number</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Contacts.map(({ id, name, number }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{number}</td>
              <button>{'❌'}</button>
            </tr>
          ))}
        </tbody>
      </table>
      <FormContacts />
    </div>
  );
};

export default ListOfContacts;
