import { useState } from 'react';
import './index.css';

const FormContacts = (props) => {
  const { dispatch } = props;
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumber = (e)=>{
    setNumber(e.target.value);
  }

  const newContact = {
    type: 'addContact',
    payload: {
      id: 72834982,
      name: name,
      number: number,
    },
  };

  const handleAdd = (evt) => {
    evt.preventDefault();
    -dispatch(newContact);
    console.log(newContact);
  };
  return (
    <div className="form__contacts">
      <h2 className="title__contacts">contacts xd</h2>
      <form onSubmit={handleAdd} autoComplete="off">
        <label>
          Name : <br />
          <input
            name="number"
            onChange={handleName}
            value={name}
            type="text"
            placeholder="Add name"
            autoFocus
            required
          />
        </label>
        <br />
        <label>
          Number: <br />
          <input
            type="text"
            onChange={handleNumber}
            name="number"
            value={number}
            placeholder="add Number"
            autoFocus
            required
          />
        </label>
        <br />
        <button className="form__button">add contact</button>
      </form>
    </div>
  );
};

export default FormContacts;
