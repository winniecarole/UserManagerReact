import {Modal,Button} from 'react-bootstrap';
import { useState } from 'react';
import List from './ListUser';
import App from '../App';
import { UserEntry } from '../model/UserEntry';

function ModalUser(props: any,onEditItem: any) {
    //console.log(props)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id =useState(props.onUser.id);
    const [vorname, setVorname] = useState(props.onUser.vorname);
    const [nachname, setNachname] = useState(props.onUser.nachname);
    const [beschreibung, setBeschreibung] = useState(props.onUser.beschreibung);




    const handleChangeVorname =(e:any)=> {
      setVorname(e.target.value);

    }
    const handleChangeNachname =(e:any)=> {
      setNachname(e.target.value);
    }
    const handleChangebeschreibung=(e:any)=> {
      setBeschreibung(e.target.value);
    }

    const handleSubmit=(e:any)=> {
      e.preventDefault()
      props.onItem({
        id,
        vorname,
        nachname,
        beschreibung
      });
    }



    return (


      <>
        <Button variant="primary" onClick={handleShow}>
          bearbeiten
        </Button>

        <Modal show={show} onHide={handleClose}>
        <form onSubmit={(e) => handleSubmit(e)} >
          <Modal.Header closeButton>
            <Modal.Title>User Bearbeiten</Modal.Title>
          </Modal.Header>
          <Modal.Body>

              <div className="form-group">
               <label >id:</label>
                <input value={id[0]} disabled/>
              </div>
              <div className="form-group">
                  <label >VorName:</label>
                <input className="form-control" id="vorname" type="text" name="vorname"  value={vorname} onChange={e => handleChangeVorname(e)}/>
              </div>
              <div className="form-group">
                  <label htmlFor="name">Nachname:</label>
                <input className="form-control" id="nachname" value={nachname} onChange={e => handleChangeNachname(e)}/>
              </div>
              <div className="form-group">
                  <label>Beschreibung:</label>
                <textarea className="form-control" id="beschreibung"  value={beschreibung} onChange={e=> handleChangebeschreibung(e)}/>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Schließen
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Speichern
            </Button>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }

  export default ModalUser;
