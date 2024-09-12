import LoginTest from "../support/logintests";
describe('Login Page Tests', () => {
  const loginTest = new LoginTest();
  const validUsername = 'Admin';
  const validPassword = 'admin123';
  const invalidUsername = 'InvalidUser';
  const invalidPassword = 'InvalidPass';


  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  });
  it('Successful login with valid credentials', () => {
    loginTest.login(validUsername, validPassword);
    loginTest.assertSuccessfulLogin();
  });

  it('Login with invalid username and valid password', () => {
    loginTest.login(invalidUsername, validPassword);
    loginTest.assertInvalidCredentials();
  });

  it('Login with valid username and invalid password', () => {
    loginTest.login(validUsername, invalidPassword);
    loginTest.assertInvalidCredentials();
  });

  it('Login with empty username and password', () => {
    loginTest.login('', '');
    loginTest.assertRequiredFields();
  });

  it('Login with valid username and empty password', () => {
    loginTest.login(validUsername, '');
    loginTest.assertRequiredFields();
  });
})