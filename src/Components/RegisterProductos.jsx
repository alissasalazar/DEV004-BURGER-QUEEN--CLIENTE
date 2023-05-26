import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../StyleSheets/Login.module.css";
import stylesRegister from "../StyleSheets/Register.module.css";
import { getProduct } from "./peticionesProductsAdm";

export default function RegisterProductos() {
  const navigate = useNavigate();
  const [registerErr, setRegisterErr] = useState(false);
  const [nameProduc, setnameProduc] = useState("");
  const [precio, setPrecio] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const submitRegister = async (event) => {
    event.preventDefault();
    if (!nameProduc) return alert("Debe ingresar el nombre del producto");
    if (!precio) return alert("Debe ingresar el precio del producto");
    if (!image) return alert("Debe ingresar la imagen del producto");
    if (!type) return alert("Debe seleccionar un rol");

    const producto = {
      name: nameProduc,
      price: precio,
      image: image,
      type:type,
    };

    const response = await getProduct(producto);
    console.log("que me da answer de register", response);
    if (response === "Email already exists") {
      setRegisterErr(true);
    } else {
      navigate("/ProductosAdm");
    }
  };

  return (
    <div>
      <div className={stylesRegister.fondoRegister}>
        <div className={styles.contenedorLogin}>
          <h1 className={styles.title}>B. Q.</h1>
          <form className={styles.formLogin}>
            Nombre de producto
            <input
              className={styles.inputData}
              type="text"
              value={nameProduc}
              onChange={(e) => {
                setnameProduc(e.target.value);
              }}
              placeholder="Ingresa el nombre delproducto"
            />
            Precio de producto
            <input
              className={styles.inputData}
              type="text"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ingresa el precio del producto"
            />
            Imagen del producto
            <input
              className={styles.inputData}
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Ingresa la imagen del producto"
            />
            Tipo de producto
            <select
              className={styles.inputData}
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
            {registerErr && (
              <div className="errorDiv">
                <p className="errorTxt">El producto ya existe</p>
              </div>
            )}
            <div className={styles.contentButton}>
              <button
                className={stylesRegister.registerButton}
                onClick={() => submitRegister(event)}
              >
                REGISTRAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
