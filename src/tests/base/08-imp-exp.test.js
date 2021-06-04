import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";
describe("Pruebas en funciones de heroes", () => {
  test("should return one hero by id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const HeroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(HeroeData);
  });

  test("should return undefinded if hero does not exist", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("should return one array with the DC's heroes", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);
    expect(heroe).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
  });

  test("should return how mani heroes has Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    expect(heroe.length).toBe(2);
  });
});
