import React from 'react';
import './App.css';
import {Navbar,Nav, Button, Row, Col, Container} from 'react-bootstrap';
import {UserEntry} from './model/UserEntry';
import List from './components/ListUser';
import FormUser from './components/FormUser';
import { BrowserRouter as Router, Routes,Route ,Link} from 'react-router-dom';


class App extends React.Component<{}, { title: string, users: UserEntry[] }> {
  constructor(props: {}) {
    console.log("app runnig");
    super(props);
    this.state = {
        title: 'UserManager', users: [
          new UserEntry('kevin','Piam','student'),
          new UserEntry('Winnie','Tongle','student'),
          new UserEntry('Maxwell','Tchiabe','student')
        ]

    }
  }


  deleteUser(user: UserEntry) {
    this.setState(state => ({
      users: state.users.filter(item =>
        item.id !== user.id
      )
    }));
  }


  createUser(vorname: string, nachname: string, beschreibung: string) {
    this.setState(state => ({
      users: [...state.users, new UserEntry(vorname,nachname,beschreibung)]
    }));
  }

 editUser(user:UserEntry,vorname: string, nachname: string, beschreibung: string){
    for(let i=0;i<this.state.users.length;i++){
        if(this.state.users[i].id==user.id){
          this.state.users[i].vorname = vorname;
          this.state.users[i].nachname = nachname;
          this.state.users[i].beschreibung = beschreibung;
        }
    }
    this.setState(state => ({
      users: this.state.users
    }));
 }

  render() {
    return <div>
      <Navbar bg="dark" variant="dark">
    <Container>
        <Nav className="me-auto">
        <Navbar.Brand>{this.state.title}</Navbar.Brand>
        <Nav.Link href='/listUser'>List User</Nav.Link>
        <Nav.Link href="/addUser">User Hinzufügen</Nav.Link>
        </Nav>
      </Container>

    </Navbar>
        <Router>
            <Routes>
                <Route path='/listUser' element = {<List items={this.state.users} onDeleteUser={(user) => this.deleteUser(user) } updateUser ={(user,vorname,nachname,beschreibung) => this.editUser(user,vorname,nachname,beschreibung)}/>}>UserList</Route>
                <Route path='/addUser' element={<FormUser onItem={(e:any)=>{this.createUser(e.vorname,e.nachname,e.beschreibung)}}/>}>User hinzufügen</Route>
            </Routes>
        </Router>
    </div>;
  }
}

export default App;
