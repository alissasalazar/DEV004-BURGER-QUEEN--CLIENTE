/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import FormLogin from "../Components/FormLogin";
import { MemoryRouter } from "react-router-dom";
import ViewWeiter from "../Pages/ViewWeiter";
import userEvent from '@testing-library/user-event'

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
    // Resolver el mock del fetch
    const fetchMock = jest.fn().mockResolvedValue({
      json: () => ({
        accessToken: "123",
        user: { id: "456" },
      }),
    });

    global.fetch = fetchMock;

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

  test('No coloco ningun dato', async () => {
    render(
      <MemoryRouter>
        <FormLogin />
      </MemoryRouter>
    )

    await waitFor(async () => {
      userEvent.click(screen.getByText(/Ingresar/i))
      const errorMessage = /Usuario\/contraseña incorrectos/i
      expect(screen.findByText(errorMessage)).toBeInTheDocument
    })
  })
});

describe("Weiter", () => {
  test("Deberia ver los elementos del weiter", async () => {
    const fetchMock = jest.fn().mockResolvedValue({
      json: () => [
        {
          id: 1,
          userId: 1,
          client: "Jude Milhon",
          products: [[Object], [Object]],
          status: "pending",
          dataEntry: "2022-03-05 15:00",
          dateProcessed: "2023-05-19 11:11:28",
        },
      ],
    });

    global.fetch = fetchMock;
    render(
      <MemoryRouter>
        <ViewWeiter />
      </MemoryRouter>
    );
    screen.debug();
    const input = screen.getByText(/pedidos/i);
    const inputEl = screen.getByText(/ordenes por entregar/i);
    const inputEl2 = screen.getByText(/nuevo pedido/i);
    expect(input).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();
    expect(inputEl2).toBeInTheDocument();
  });
});
