import './index.css';
import HandleForm from '../../helpers/handleForm';

const FormContacts = ({ dispatch }) => {
  const { handleName, handleNumber, handleAdd } = HandleForm({
    dispatch: dispatch,
  });

  return (
    <div className="form__contacts">
      <h2 className="title__contacts"> Add </h2>
      <form reset autoComplete="off">
        <label>
          Name :
          <input
            name="number"
            onChange={handleName}
            // value={name}
            type="text"
            placeholder="Add name"
            autoFocus
            required
            reset
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="number"
            onChange={handleNumber}
            name="number"
            // value={number}
            placeholder="add Number"
            autoFocus
            required
            reset
          />
        </label>
        <br />
        <button onClick={handleAdd} className="form__button">
          add
        </button>
      </form>
    </div>
  );
};

export default FormContacts;
