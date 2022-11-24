const quicksort = require("../5-ordenacaoJS");

let arrayTest1 = [23.15, 45, 16.15, 37, 3, 99.48, 22]

test("verificar a ordenacao do arrayTest1" , () => {
  expect(quicksort(arrayTest1)).toStrictEqual([3, 16.15, 22, 23.15, 37, 45, 99.48]);
});