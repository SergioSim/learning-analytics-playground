describe('Login Test', () => {
    it('should fill login form and redirect to dashboard', () => {
        cy.visit('/login');
        cy.get("input#email").type('edx@example.com')
        cy.get("div:nth-child(4) > input[name=password]").type('edx-PWD-1')
        cy.get("form > button#submit").click()
        // we should be redirected to /dashboard
        cy.url().should('include', '/dashboard')
      });
  })
