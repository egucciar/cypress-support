describe('Local Storage Reproducer', () => {
  beforeEach(() => {
    // comment out below for tests to now be passing!
    cy.request({
      method: 'POST',
      url: 'http://nlv4d.mocklab.io/json2',
    }).should((resp) => {
      expect(resp.status).to.eq(200)
    })
    cy.visit('/', {
      onBeforeLoad: (win) => {
        expect(win.localStorage.getItem('redux_test')).to.be.null;
      }
    });
    cy.get('#test');
  })
  context('testing', () => {
    it('1', () => {
      cy.window().then((win) => {
        expect(win.localStorage.getItem('redux_test')).to.be.object;
      })
    })
    it('2', () => {
      cy.window().then((win) => {
        expect(win.localStorage.getItem('redux_test')).to.be.object;
      })
    })
  })
});