import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";

export default function FormLogin() {
  // Usamos useNavigate para poder indicarle a que ruta debe ir luego
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ErrorMsg = () => setLoginErr(false);

  //TODO Colocamos la funcion para poder hacer la peticion de usario y pueda validar si es correcto
  const SubmitLogin = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/login", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const answer = await response.json();
    if (answer === "Cannot find user" || answer === "Incorrect password") {
          setLoginErr(true);
        } else {
          document.cookie = `token = ${answer.accessToken}`;
          console.log("aqui esta el token?",document.cookie )
          document.cookie = `id = ${answer.user.id}`;
          navigate("/Weiter");
        }
  };

  return (
    <div className={styles.contenedorLogin}>
      <form className={styles.formLogin}>
        EMAIL
        <input
          onFocus={ErrorMsg}
          className={styles.inputData}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Ingresa tu correo aquí"
        />
        CONTRASEÑA
        <input
          onFocus={ErrorMsg}
          className={styles.inputData}
          type="password"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        {loginErr && (
          <div className="errorDiv">
            <p className="errorTxt">Usuario/contraseña incorrectos</p>
          </div>
        )}
        <div className={styles.contentButton}>
          <button
            onClick={() => SubmitLogin(event)}
            className={styles.firstButton}
          >
            INGRESAR
          </button>
        </div>
      </form>
    </div>
  );
}
