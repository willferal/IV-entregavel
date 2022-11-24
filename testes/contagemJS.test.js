const funcaoContagem = require("../6-contagemJS");

let arrayTest1 = [23.15, 45, 16.15, 37, 3, 99.48, 22]

test("verificar sequencia de arrayTest2" , () => {
  expect(funcaoContagem(arrayTest1)).toBe("4537322");
});