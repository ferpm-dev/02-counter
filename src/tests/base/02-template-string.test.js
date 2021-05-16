import { getSaludo } from "../../base/02-template-string";

// getSaludo debe retornar Hola Carlos si no hay argumento
describe("getSaludo debe retornar Hola Carlos si no hay argumento", () => {
  test("getSaludo debe de retornar hola Carlos!", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos!");
  });
});
