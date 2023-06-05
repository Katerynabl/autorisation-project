
//Purchase from internet shop
describe('Purchase', function () {

  before(function () {
    cy.visit('https://automationteststore.com/');
    cy.fixture('params').then(function (params) {
        this.params = params
    })
  })
 

it('Purchase', function ()  {
  cy.log('Search for Euphoria ');
  cy.get('#filter_keyword').click().type('Euphoria');
  cy.get('.button-in-search > .fa').click();

  //Select goods
  cy.get(':nth-child(1) > .thumbnail > :nth-child(1) > img').click();

 // add to cart 
  cy.get('.cart').click();
  cy.get('#cart_checkout2').click();

 // Login required 
  cy.get('#loginFrm_loginname').type(this.params.LoginAutorized);
  cy.get('#loginFrm_password').type(this.params.PasswordAutorized);
  cy.get('button[type="submit"]').contains('Login').click();
 
// Purchase confirmed
  cy.get('#checkout_btn').click(); 
  cy.get('.maintext').should('contain','Your Order Has Been Processed!');

})

})