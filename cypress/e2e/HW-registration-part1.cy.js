
describe('Registration-test', function () {

  before(function () {
    cy.visit('https://automationteststore.com/');

    cy.get('#customer_menu_top > li > a').click();
    cy.get('#accountFrm > fieldset > .btn').click();
    cy.fixture('params').then(function (params) {
        this.params = params
    })
  })

  it('Registration', function ()  {
  //First page - try 
  
    cy.get('[id="AccountFrm_firstname"]').type(this.params.UserFirstName).should('be.visible');
    cy.get('[id="AccountFrm_lastname"]').type(this.params.UserLastName).should('be.visible');
    cy.get('[id="AccountFrm_email"]').type(this.params.UserEmail).should('be.visible');
    cy.get('[id="AccountFrm_telephone"]').type(this.params.UserTelephone).should('be.visible');
    cy.get('[id="AccountFrm_fax"]').type(this.params.UserFax).should('be.visible');
    cy.get('[id="AccountFrm_company"]').type(this.params.Company).should('be.visible');
    cy.get('[id="AccountFrm_address_1"]').type(this.params.Address1).should('be.visible');
    cy.get('[id="AccountFrm_city"]').type(this.params.City).should('be.visible');
    cy.get('[id="AccountFrm_zone_id"]').select('3518')//.should('have.value', '3586').get('body').click(50, 50, { force: true });
    cy.get('[id="AccountFrm_postcode"]').type(this.params.ZipCode);//.should('have.value', '3523');
    cy.get('[id="AccountFrm_country_id"]').select('8').should('have.value', '8');
    cy.get('[id="AccountFrm_loginname"]').type(this.params.LoginName).should('be.visible');
    cy.get('[id="AccountFrm_password"').type(this.params.Password).should('be.visible');
    cy.get('[id="AccountFrm_confirm"]').type(this.params.Password).should('be.visible');
    cy.get('[id="AccountFrm_newsletter1"]').click().should('be.visible');
    cy.get('[id="AccountFrm_agree"]').click().should('be.visible');
    cy.get('button[title="Continue"]').click().should('be.visible');


// Next page
cy.get('[id="AccountFrm_zone_id"]').select('0').should('have.value', '0').get('body').click(50, 50, { force: true });
cy.get('[id="AccountFrm_password"').type(this.params.Password).should('be.visible');
cy.get('[id="AccountFrm_confirm"]').type(this.params.Password).should('be.visible');
cy.get('button[title="Continue"]').click().should('be.visible');

  })
})

  