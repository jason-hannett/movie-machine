describe ('Third Test', () => {
    it ('Focus on the button', () => {
      cy.visit ('/');
      cy.focused ().should ('have.id', 'randombtn');
    });
  });