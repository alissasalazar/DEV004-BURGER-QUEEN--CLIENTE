/* eslint-disable react/no-unescaped-entities */
import BarraBtnsAdministrador from "../Components/BarraBtnsAdministrador";
import stylesComponents from "../StyleSheets/Components.module.css";
import { Link, Outlet } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";
import { useState, useEffect } from "react";
import getUsersRequest from "../Components/getUsersRequest";
import { AiOutlineDelete } from "react-icons/ai";
import canceledUser from "../Components/canceledUser";
import UpDateUsers from "../Components/editUsers";
export default function ViewAdministrador() {
  const [waiter, setWaiter] = useState([]);
  const [chef, setChef] = useState([]);
  const [administrador, setAdministrador] = useState([]);

  const getUsers = async () => {
    const waiters = await getUsersRequest("waiter");
    setWaiter(waiters);

    const administradores = await getUsersRequest("admin");
    setAdministrador(administradores);

    const chefs = await getUsersRequest("chef");
    setChef(chefs);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={stylesComponents.contenedorPedidos}>
      <div className={stylesComponents.tituloView}>
        Bienvenido Administrad@r
      </div>
      <div className={styles.contentButton}>
        <BarraBtnsAdministrador />
      </div>
      <button className={styles.secondButton}>
        <Link className={styles.a} to={"/Register"}>
          Registrar nuevo Coloborador
        </Link>
        <Outlet />
      </button>
      <div className={stylesComponents.contenedorRoles}>
        <div className={stylesComponents.contenedorUsuarios}>
          <p className={stylesComponents.tituloMenu}>Meseros</p>
          {waiter ? (
            waiter.map((e) => (
              <div key={e.id} className={stylesComponents.usuario}>
                <div>ID: {e.id}</div>
                <div>Correo: "{e.email}" </div>
                <div>Rol: {e.role}</div>
                <div>
                  <div
                    onClick={() => {
                      getUsers();
                    }}
                  >
                    <UpDateUsers id={e.id} user={e} />
                  </div>
                  <AiOutlineDelete
                    onClick={() => {
                      canceledUser(e.id);
                      getUsers();
                    }}
                  ></AiOutlineDelete>
                </div>
              </div>
            ))
          ) : (
            <div>No se han registrado aún meceros</div>
          )}
        </div>
        <div className={stylesComponents.contenedorUsuarios}>
          <p className={stylesComponents.tituloMenu}>Chefs</p>
          {chef
            ? chef.map((e) => (
                <div key={e.id} className={stylesComponents.usuario}>
                  <div>ID: {e.id}</div>
                  <div>Correo: "{e.email}" </div>
                  <div>Rol: {e.role}</div>
                  <div>
                  <div
                    onClick={() => {
                      getUsers();
                    }}
                  >
                    <UpDateUsers id={e.id} user={e} />
                  </div>
                    <AiOutlineDelete
                      onClick={() => {
                        canceledUser(e.id);
                        getUsers();
                      }}
                    ></AiOutlineDelete>
                  </div>
                </div>
              ))
            : "No se han registrado aún Chefs"}
        </div>
        <div className={stylesComponents.contenedorUsuarios}>
          <p className={stylesComponents.tituloMenu}>Administrador</p>
          {administrador
            ? administrador.map((e) => (
                <div key={e.id} className={stylesComponents.usuario}>
                  <div>ID: {e.id}</div>
                  <div>Correo:"{e.email}"</div>
                  <div>Rol: {e.role}</div>
                  <div>
                  <div
                    onClick={() => {
                      getUsers();
                    }}
                  >
                    <UpDateUsers id={e.id} user={e} />
                  </div>
                    <AiOutlineDelete
                      onClick={() => {
                        canceledUser(e.id);
                        getUsers();
                      }}
                    ></AiOutlineDelete>
                  </div>
                </div>
              ))
            : "No se han registrado aún administradores"}
        </div>
      </div>
    </div>
  );
}
