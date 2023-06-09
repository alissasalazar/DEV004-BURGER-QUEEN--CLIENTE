import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../../../StyleSheets/Login.module.css";
import stylesRegister from "../../../StyleSheets/Register.module.css";
import { getUsers } from "../../../../services/peticiones";

export default function RegisterUsers() {
  const navigate = useNavigate();
  const [registerErr, setRegisterErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");


  const submitRegister = async (event) => {
    event.preventDefault();
    if (!email) return alert("Debe ingresar su correo");
    if (!password) return alert("Debe ingresar una contraseña");
    if (!rol) return alert("Debe seleccionar un rol");

    const user = {
      email: email,
      password: password,
      role: rol,
    };

      const response = await getUsers(user);
      if (response === "Email already exists") {
        setRegisterErr(true);
      } else {
        navigate("/Administrador");
      }  
  };

  return (
    <div>
      <div className={stylesRegister.fondoRegister}>
        <div className={styles.contenedorLogin}>
          <h1 className={styles.title}>B. Q.</h1>
          <form className={styles.formLogin}>
            EMAIL
            <input
              className={styles.inputData}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Ingresa un correo aquí"
            />
            CONTRASEÑA
            <input
              className={styles.inputData}
              type="password"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa la contraseña"
            />
            ROL
            <select
              className={styles.inputData}
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
            {registerErr && (
              <div className="errorDiv">
                <p className="errorTxt">El email ya existe</p>
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
