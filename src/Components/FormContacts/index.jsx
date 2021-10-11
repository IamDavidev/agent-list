import './index.css'

const FormContacts = ({props}) => {
  return (
    <div className="form__contacts">
      <h2 className="title__contacts">contacts xd</h2>
      <form>
          <label>
             Name : <br /><input type="text" placeholder='Add name'   autoFocus />
          </label>
          <br />
          <label >
              Number: <br /><input type='text' placeholder='add Number'    autoFocus/>
          </label>
          <br />
          <button className="form__button">
              add contact
          </button>
      </form>
    </div>
  );
};

export default FormContacts;
