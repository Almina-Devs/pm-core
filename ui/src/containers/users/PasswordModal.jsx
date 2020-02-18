import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, Input, ModalFooter } from 'reactstrap';

const PasswordModal = (props) => {
    const {
      id,
      handleUpdate,
      onChange
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <i className="fas fa-key" onClick={toggle}></i>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Update Password</ModalHeader>
          <ModalBody>
            <Input type="password" id={id} placeholder="password" onChange={onChange}></Input>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={ handleUpdate }>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default PasswordModal;