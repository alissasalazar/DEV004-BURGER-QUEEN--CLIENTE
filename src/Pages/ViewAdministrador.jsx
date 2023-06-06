/* eslint-disable react/no-unescaped-entities */
import stylesComponents from "../StyleSheets/Components.module.css";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import BtnsOfNav from "../../Utiles/BtnsOfNav";
import UpDateUsers from "../Components/editUsers";
import { deleteFetch, getUsersRequest } from "../../services/peticiones";
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <BtnsOfNav
            ruta={"/Administrador"}
            nombre={"Colaboradores"}
            className={"btn btn-success me-2"}
          />
          <BtnsOfNav
            ruta={"/ProductosAdm"}
            nombre={"Productos"}
            className={"btn btn-warning"}
          />
        </form>
      </nav>
      <BtnsOfNav
        ruta={"/Register"}
        nombre={"Registrar colaborador"}
        className={"btn btn-outline-dark btn-lg"}
      />
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
                      deleteFetch("users",e.id)
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
                        deleteFetch("users",e.id)
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
                        deleteFetch("users",e.id)
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
