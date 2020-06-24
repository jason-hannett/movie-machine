describe ('Fourth Test', () => {
    it ('Accepts input', () => {
      const text = 'New comment';
      cy.visit ('/comments');
      cy.get ('.comments-container').type (text).should ('have.value', text);
    });
  });