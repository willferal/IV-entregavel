const funcaoMdc = require("../4-mdcJS");

test("MDC de  16, 36", () => {
  expect(funcaoMdc(16, 36)).toBe(4);
});

test("verificar se o número 30 é primo ", () => {
  expect(funcaoMdc(36, 72)).toBe(36);
});