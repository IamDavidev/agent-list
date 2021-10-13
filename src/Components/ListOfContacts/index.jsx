import React, { useReducer } from 'react';
import HandleForm from '../../helpers/handleForm';
import './index.css';
import Contacts from '../../services/contacts';
import FormContacts from '../FormContacts';
import { ContactsReducer } from '../../reducers/ContactsReducer';
const ListOfContacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, Contacts);

  const objdelete = { 
    type:'delete',
    payload:{
      id:id
    }
  }
  const handleDelete = (id) => {
    const objDelete = {
      type: 'delete',
      payload: id,
    };
  };

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
          {state.map(({ id, name, number }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{number}</td>
              <td>
                <button onClick={()=>handleDelete(id)}>{'❌'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <FormContacts dispatch={dispatch} />
    </div>
  );
};

export default ListOfContacts;
