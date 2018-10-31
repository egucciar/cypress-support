function setBaseUrl() {
  Cypress.config('baseUrl', 'http://localhost:8080');
}

describe('Reproducer', () => {
  beforeEach(() => {
    setBaseUrl();
  })
  it('Test 1', () => {
  })
});