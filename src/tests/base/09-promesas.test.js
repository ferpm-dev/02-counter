import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  test("getHeroByIdAsync debe retornar un Héroe async", () => {
    const id = 2;
    return getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[1]);
    });
  });
<<<<<<< HEAD
  test("debe retornar un error cuando detecta que el id no existe", () => {
=======
  test("debe retornar un error cuando detecta que el id no existe", () => {
>>>>>>> fd7e4b197fafac1302f403a668ec633ca184532f
    const id = 10;
    return expect(getHeroeByIdAsync(id)).rejects.toBe(
      "No se pudo encontrar el héroe"
    );
  });
});
