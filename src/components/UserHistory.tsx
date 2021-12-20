import React from 'react';
import './App.css';
import {Navbar,Nav, Button, Row, Col, Container} from 'react-bootstrap';

import { BrowserRouter as Router, Routes,Route ,Link} from 'react-router-dom';


class UserHistory extends React.Component <{}>{
    constructor(props: {}) {
        super(props)
    
        this.state = {
          productshistory: []
        }
      }
}

export default UserHistory;
