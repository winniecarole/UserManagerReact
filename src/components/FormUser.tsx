import {Alert, Button, Form} from 'react-bootstrap';
import {useState} from 'react';

function FormUser(props:any) {

    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [beschreibung, setBeschreibung] = useState('');



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
        vorname,
        nachname,
        beschreibung
      });
      setVorname('');
      setNachname('');
      setBeschreibung('');

    }

    return (
      <div>
        <h3 className="text-center">Neue User</h3>
        <Form onSubmit={(e) => handleSubmit(e)} style={{margin: '5em 10em 10em 10em'}}>
            <Form.Group className="mb-3" >
                 <Form.Control value={vorname}
                        onChange={(e) => handleChangeVorname(e)}
                        type="text" name="vorname"placeholder="Vorname" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Control value={nachname}
                        onChange={(e) => handleChangeNachname(e)}
                        type="text" name="nachname" placeholder="Nachname" />
            </Form.Group>
            <Form.Group className="mb-3" >
                 <Form.Control as="textarea"  value={beschreibung}
                        onChange={(e) => handleChangebeschreibung(e)}
                         name="beschreibung" placeholder="Beschreibung" />
            </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );

}
export default FormUser;

