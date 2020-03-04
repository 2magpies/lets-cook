import React, { useState, useEffect } from 'react';
import './Header.css';
import {
    Nav,
    Row,
    Col,
    Navbar,
    Dropdown,
    DropdownButton,
    Modal,
    Button,
    Tab,
    Tabs,
    Form
} from 'react-bootstrap';

function LoginModal() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up or Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              Sign Up
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Log In
            </Tab>
          </Tabs>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
}

export default LoginModal;