import { getUser, getUsuarioActivo } from "../../base/05-funciones";
describe("Pruebas en 05-funciones", () => {
  test("getUser should retur one object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(user).toEqual(userTest);
  });
});

test("should return one object", () => {
  const nombre = "Juan";
  const user = getUsuarioActivo(nombre);
  const getUsuarioActivoTest = {
    uid: "ABC567",
    username: nombre,
  };
  expect(user).toEqual(getUsuarioActivoTest);
});
