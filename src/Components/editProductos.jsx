/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AiOutlineEdit } from "react-icons/ai";
// import Dropdown from "react-bootstrap/Dropdown";
import { getCookie } from "./Cookies";

// eslint-disable-next-line react/prop-types
export default function UpDateProducts({ id, product }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nameProduc, setnameProduc] = useState(product.name);
  const [precio, setPrecio] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [type, setType] = useState(product.type);

  const upDate = async () => {
    const getCookieResult = getCookie("token");
    const producto = {
      name: nameProduc,
      price: precio,
      image: image,
      type: type,
    };
    console.log("que me da el id", id);
    const response = await fetch("http://localhost:8080/products/" + id, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getCookieResult}`,
      },
      body: JSON.stringify(producto),
    });
    const answer = await response.json();
    console.log("que me da answer ", answer);
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
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                value={nameProduc}
                onChange={(e) => {
                  setnameProduc(e.target.value);
                }}
                placeholder="Ingresa el nombre delproducto"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Precio del producto</Form.Label>
              <Form.Control
                type="text"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                placeholder="Ingresa el precio del producto"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Imagen del producto</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Ingresa la imagen del producto"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Tipo de producto</Form.Label>
              <select
                type="type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <optgroup label="Tipo de producto">
                  <option value="Desayuno">Desayuno</option>
                  <option value="Almuerzo">Almuerzo</option>
                </optgroup>
              </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              upDate(), handleClose()
            }}
          >
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
