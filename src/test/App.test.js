/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import FormLogin from "../Components/FormLogin";
import { MemoryRouter } from "react-router-dom";
// import ViewLogin from "../Pages/ViewLogin";
describe("Login", () => {
  test("Deberia mostrar los elementos del form", () => {
    render(
      <MemoryRouter>
        <FormLogin />
      </MemoryRouter>
    );
    const inputEl = screen.getByPlaceholderText(/Ingresa tu correo aquí/i);
    expect(inputEl).toBeInTheDocument();
  });

  test("El login fue existoso", async () => {
    // Mockear el navigate
    const navigateMock = jest.fn();
    // Resolver el mock del fetch
    const fetchMock = jest.fn().mockResolvedValue({
      json: () => ({
        accessToken: "123",
        user: { id: "456" },
      }),
    });

    global.fetch = fetchMock;
    const event = { preventDefault: jest.fn() };
    //con mount montamo el componente
    render(
      <MemoryRouter>
        <FormLogin />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText(/Ingresa tu correo aquí/i), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByText(/Ingresar/i));

    expect(fetchMock).toHaveBeenCalledWith("http://localhost:8080/login", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@test.com",
        password: "password",
      }),
    });

    await waitFor(() => expect(document.cookie).toContain("token=123"));
    await waitFor(() => expect(document.cookie).toContain("id=456"));

    //  expect("/Weiter").toHaveBeenCalledWith("/Weiter")
  });

  test("Deberia darnos un error porque no encuentra al usuario", async () => {
    const response = { json: () => "Cannot find user" };
    jest.spyOn(global, "fetch").mockResolvedValue(response);

    render(
      <MemoryRouter>
        <FormLogin />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText(/Ingresa tu correo aquí/i);
    const passwordInput = screen.getByPlaceholderText(/Contraseña/i);
    const submitButton = screen.getByText(/INGRESAR/i);
    const errorMessage = /Usuario\/contraseña incorrectos/i;

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText(errorMessage)).toBeInTheDocument()
    );

    // Reset the fetch mock to avoid affecting other tests
    global.fetch.mockRestore();
  });

  test("No coloco ningun dato", async () => {
    render(
      <MemoryRouter>
        <FormLogin />
      </MemoryRouter>
    );
    const errorMessage = /Usuario\/contraseña incorrectos/i;
    fireEvent.click(screen.getByText(/Ingresar/i));
    await waitFor(() =>
      expect(screen.getByText(errorMessage)).toBeInTheDocument()
    );
  });
});
