import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const HandleForm = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let idNew = uuidv4();
  
  const idnew = idNew.split('-');

  const newContact = {
    type: 'addContact',
    payload: {
      id: idnew[1],
      name: name,
      number: number,
    },
  };

  const handleAdd = (evt) => {
    evt.preventDefault();
    dispatch(newContact);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  return { handleName, handleNumber, newContact, handleAdd };

};

export default HandleForm;
