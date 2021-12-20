import {Table} from 'react-bootstrap';
import {UserEntry} from '../model/UserEntry';
import ModalUser from './ModalUser';

function List(props: {items: UserEntry[], onDeleteUser: (user: UserEntry) => void,updateUser: (user:UserEntry,vorname:string,nachname:string,beschreibung:string) => void}) {

  const rows = props.items.map((user) => (
    <tr key={user.id}>
        <td>{user.id}</td>
      <td>{user.vorname}</td>
      <td>{user.nachname}</td>
      <td>{user.beschreibung}</td>
      <td>{user.date.toISOString()}</td>
      <td>
        <button className="btn btn-danger" onClick={() => {props.onDeleteUser(user)}}>
          delete
        </button>
      </td>
      <td>
        <ModalUser onUser={user} onItem={(e:any)=>{props.updateUser(user,e.vorname,e.nachname,e.beschreibung)}}/>
      </td>

    </tr>
  ));

  return (
    <Table >
      <thead >
      <tr>
        <th>id</th>
        <th>Vorname</th>
        <th>Nachname</th>
        <th>Beschreibung</th>
        <th>ErstellungsDatum</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </Table>
  );
}

export default List;
