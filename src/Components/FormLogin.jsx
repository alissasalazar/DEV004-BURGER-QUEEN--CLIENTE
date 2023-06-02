import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";
import { fetchLogin } from "../../services/peticiones";
import { roleAdm, roleChef, roleWaiter } from "../../Utiles/strings";

export default function FormLogin() {
  // Usamos useNavigate para poder indicarle a que ruta debe ir luego
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ErrorMsg = () => setLoginErr(false);

  const SubmitLogin = async (event) => {
    event.preventDefault();

    if (!email) return alert("Debe ingresar su correo");
    if (!password) return alert("Debe ingresar una contraseña");

    try {
      const answer = await fetchLogin(email, password);
      console.log("que me da answer en form login", answer);
      if (answer === "Cannot find user" || answer === "Incorrect password") {
        setLoginErr(true);
      } else {
        console.log("me da el token", answer.accessToken);
        if (answer.user.role === roleAdm) return navigate("/Administrador");
        if (answer.user.role === roleChef) return navigate("/ChefBoss");
        if (answer.user.role === roleWaiter) return navigate("/Weiter");
        document.cookie = `token = ${answer.accessToken}`;
        console.log("aqui esta el token?", document.cookie);
        document.cookie = `id = ${answer.user.id}`;
        navigate("/Weiter");
      }
    } catch (error) {
      if (error === "Unauthorized") {
        console.log("que me da error", error);
        navigate("/");
      }
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
          required
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
          required
        />
        {loginErr && (
          <div className="errorDiv">
            <p className="errorTxt">Usuario/contraseña incorrectos</p>
          </div>
        )}
        <div className={styles.contentButton}>
          <button
            onClick={() => {
              SubmitLogin(event);
              console.log("entro");
            }}
            className={styles.firstButton}
          >
            INGRESAR
          </button>
        </div>
      </form>
    </div>
  );
}
