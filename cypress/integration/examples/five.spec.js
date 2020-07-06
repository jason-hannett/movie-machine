describe ('Fifth Test', () => {
    context ('No comment', () => {
      it ('adds comment', () => {
        cy.visit ('/comments');
        cy.get ('.comments-container').type ('New Comment').type ('{enter}');
      });
    });
  });

