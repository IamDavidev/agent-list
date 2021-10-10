import './index.css';
const ListOfContacts = () => {
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
            <tr>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
            </tr>
        </tbody>
      </table>
      <div className="form__contacts">
        <h1>
          form
        </h1>
      </div>
    </div>
  );
};

export default ListOfContacts;
