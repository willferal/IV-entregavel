const funcaoSomatorio = require("../2-somatorioJS");
let arrayTest1 = [5, 9, 6, 7, 10]
let arrayTest2 = [10, 15, 47, 15, 21]


test("verificar se array1 é : 37", () => {
  expect(funcaoSomatorio(arrayTest1)).toBe(37);
});

test("verificar se array2 é : 108" , () => {
  expect(funcaoSomatorio(arrayTest2)).toBe(108);
});