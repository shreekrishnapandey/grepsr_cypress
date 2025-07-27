class LoginPage {
  visitLogin() {
    cy.visit('https://practice.expandtesting.com/notes/app/login');
  }

  enterEmail(email) {
    cy.get('[data-testid="login-email"]').type(email);
  }

  enterPassword(password) {
    cy.get('[data-testid="login-password"]').type(password);
  }

  submit() {
    cy.get('[data-testid="login-submit"]').click();
  }
}

export default LoginPage;
