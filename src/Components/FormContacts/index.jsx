import './index.css';
import HandleForm from '../../helpers/handleForm';

const FormContacts = (props) => {
  const { dispatch } = props;
  
  const {handleName, handleNumber,newContact } = HandleForm()
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
            // value={name}
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
            type="number"
            onChange={handleNumber}
            name="number"
            // value={number}
            placeholder="add Number"
            autoFocus
            required
          />
        </label>
        <br />
      <button  className="form__button">add Contact</button>
      </form>
    </div>
  );
};

export default FormContacts;
