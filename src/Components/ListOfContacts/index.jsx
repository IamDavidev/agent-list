import './index.css';
import FormContacts from '../FormContacts';
const ListOfContacts = () => {
  const contacts = [{ id: 21321685, name: 'david', number: '772131031065' }];
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
          {contacts.map(({ id, name, number }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FormContacts />
    </div>
  );
};

export default ListOfContacts;
