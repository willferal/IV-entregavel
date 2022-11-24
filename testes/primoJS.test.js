const funcaoPrimo = require("../1-primoJS");

test("verificar se o número 12 é primo ", () => {
  expect(funcaoPrimo(97)).toBe("O numero digitado e primo.");
});

test("verificar se o número 30 é primo ", () => {
  expect(funcaoPrimo(30)).toBe("O numero digitado não é primo.");
});