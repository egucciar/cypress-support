const json = require('../fixtures/example.json');

function setBaseUrl() {
  Cypress.config('baseUrl', 'http://localhost:8080');
}

describe('Local Storage Reproducer', () => {
  let value;
  beforeEach(() => {
    setBaseUrl();
    cy.request({
      method: 'POST',
      url: 'http://nlv4d.mocklab.io/json2',
    })
    cy.visit('/', {
      onBeforeLoad: (win) => {
        value = win.localStorage.getItem('redux_test');
        console.log('redux_test', value);
      }
    });
    cy.get('#test');
  })
  context('testing', () => {
    it('1', () => {
      expect(value).to.be.null;
    })
    it('2', () => {
      expect(value).to.be.null;
    })
    it('3', () => {
      expect(value).to.be.null;
    })
    it('4', () => {
      expect(value).to.be.null;
    })
    it('5', () => {
      expect(value).to.be.null;
    })
    it('6', () => {
      expect(value).to.be.null;
    })
    it('7', () => {
      expect(value).to.be.null;
    })
    it('8', () => {
      expect(value).to.be.null;
    })
    it('9', () => {
      expect(value).to.be.null;
    })
    it('10', () => {
      expect(value).to.be.null;
    })
  })
});