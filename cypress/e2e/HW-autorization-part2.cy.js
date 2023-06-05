describe('Autorization-test', function () {

  before(function () {
    cy.visit('https://automationteststore.com/');
    cy.fixture('params').then(function (params) {
        this.params = params
    })
  })


it('Authorization', function ()  {
  cy.log('Open website login page');
  cy.contains('a', 'Login or register').click();

  cy.log('Authorize user');
  cy.get('#loginFrm_loginname').type(this.params.LoginAutorized);
  cy.get('#loginFrm_password').type(this.params.PasswordAutorized);
  cy.get('button[type="submit"]').contains('Login').click();

  cy.get('span.subtext').should('contain', this.params.UsernameAutorized);
})
})
