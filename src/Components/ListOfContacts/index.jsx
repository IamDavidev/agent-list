import React, { useReducer, useEffect } from 'react';
import HandleForm from '../../helpers/handleForm';
import init from '../../helpers/LocalStorage';
import './index.css';
import FormContacts from '../FormContacts';
import { ContactsReducer } from '../../reducers/ContactsReducer';


const ListOfContacts = () => {
  //reducer
  const [state, dispatch] = useReducer(ContactsReducer, [],init);
  //useEffect for localStorage
  useEffect(() => {
 localStorage.setItem('contacts', JSON.stringify(state))
  }, [state]);

  // console.log(JSON.parse(localStorage.getItem('contacts')));
  //delete contact
  const handleDelete = (id) => {
    const objDelete = {
      type: 'delete',
      payload: id,
    };
    dispatch(objDelete);
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
                <button onClick={() => handleDelete(id)}>{'❌'}</button>
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
