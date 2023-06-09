/* eslint-disable react/prop-types */
import {   useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AiOutlineEdit } from "react-icons/ai";
import { userPatch } from "../../../../services/peticiones";

// eslint-disable-next-line react/prop-types
export default function UpDateUsers({id,user}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [registerErr, setRegisterErr] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState();
  const [rol, setRol] = useState(user.role);


  const upDate = async() =>{
    const user ={
      email: email,
      password: password,
      role: rol,
    }
    await userPatch(user,id)
  };

  return (
    <>
      <AiOutlineEdit variant="primary" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificacion de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                value= {email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>CONTRASEÑA</Form.Label>
              <Form.Control
                type="text"
                autoComplete="on"
              value={password}
              onChange={(e) => {
                if(password === ""){
                  setPassword(user.password)
                }else{
                  setPassword(e.target.value)
                }              
              }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>ROL</Form.Label>
              <select
              type="roles"
              value={rol}
              onChange={(e) => {
                setRol(e.target.value);
              }}
            >
              <optgroup label="Roles">
                <option value="waiter">Mesero</option>
                <option value="chef">Chef</option>
                <option value="admin">Administrador</option>
              </optgroup>
            </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => {upDate(),handleClose()}}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
