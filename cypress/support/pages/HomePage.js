class HomePage {
    visit () {
        cypress.visit ('https://automationteststore.com/')
    }

    getLoginOrRgisterButton(){
        return cy.contains('a', 'Login or register');
    }

    