describe('HomePage', () => {
  it('should have "Home page" text', () => {
    // given
    websiteIsOpened();

    // when

    // then
    cy.get('h1').contains('Home page');
  });
});

// ================================================================

function websiteIsOpened() {
  cy.visit('http://localhost:3000');
}
