class LoginTest {
    constructor() {
        this.usernameField = 'input[name="username"]';
        this.passwordField = 'input[name="password"]';
        this.loginButton = 'button[type="submit"]';
        this.alertMessage = '.oxd-alert-content-text';
        this.requiredMessage = '.oxd-input-group__message';
    }

    // Method to log in
    login(username, password) {
        if (username) cy.get(this.usernameField).type(username);
        if (password) cy.get(this.passwordField).type(password);
        cy.get(this.loginButton).click();
    }

    // Method to assert a successful login
    assertSuccessfulLogin() {
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard');
    }

    // Method to assert invalid credentials
    assertInvalidCredentials() {
        cy.get(this.alertMessage).should('contain.text', 'Invalid credentials');
    }

    // Method to assert validation errors for empty fields
    assertRequiredFields() {
        cy.get(this.requiredMessage).should('contain.text', 'Required');
    }
}

export default LoginTest;