import './index.css';
import FormContacts from '../FormContacts'
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
      <FormContacts />
    </div>
  );
};

export default ListOfContacts;
