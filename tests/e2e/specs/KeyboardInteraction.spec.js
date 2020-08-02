const mainKeyInput = 'input[data-test="keyboard-input"]';
const keyTest = {
  numeric: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  alpha: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
};

describe('Keyboard interaction tests', () => {
  it('should type numberic keys and show active state on keyboard display', () => {
    cy.visit('/');
    cy.get(mainKeyInput).type(keyTest.numeric.join());
    keyTest.numeric.forEach((keyName) => {
      cy.get(`[data-test='key-${keyName}']`).should('have.class', 'key--activated');
    });
  });

  it('should type alphabet keys and show active state on keyboard display', () => {
    cy.visit('/');
    cy.get(mainKeyInput).type(keyTest.alpha.join());
    keyTest.alpha.forEach((keyName) => {
      cy.get(`[data-test='key-${keyName}']`).should('have.class', 'key--activated');
    });
  });
});
