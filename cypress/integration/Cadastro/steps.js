// IMplementacao dos passos descritos na feature

/// reference types="cypress"

let Chance = require('chance');
let chance = new Chance();

Given(/^que acesso o site$/, () => {
    cy.server()
    cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewTable');
    cy.route('POST', '**/api/1/databases/userdetails/collections/newtable/?**').as('postNewTable');
    cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**' ).as('postUserTable');

    cy.visit('Register.html');
});

When(/^informar os meus dados$/, () => {
    //type
    cy.get('input[placeholder="First Name"]').type(chance.first())
    cy.get('input[ng-model^=Last]').type(chance.last());
    cy.get('input[ng-model^=Email]').type(chance.email());
    cy.get('input[ng-model^=Phone]').type(chance.phone({formatted:false}));
    
    // check
    cy.get('input[value=FeMale]').check()
    cy.get('input[type=checkbox]').check('Cricket');
    cy.get('input[type=checkbox]').check('Hockey');

    // select
    cy.get('select#Skills').select('Javascript');
    cy.get('select#countries').select('Australia');
    cy.get('select#country').select('Australia', {force: true});
    cy.get('select#yearbox').select('1989');
    cy.get('select[ng-model^=month]').select('February');
    cy.get('select#daybox').select('9');
    cy.get('input#firstpassword').type('Test@123');
    cy.get('input#secondpassword').type('Test@123');

    // upload files
    cy.get('input#imagesrc').attachFile('image_upload.PNG');
});

When(/^salvar$/, () => {
    // click
    cy.get('button[value^=sign]').click();
});

Then(/^devo ser cadastrado com sucesso$/, () => {
    // routes
    cy.wait('@postNewTable').then((resNewTable) => {
        expect(resNewTable.status).to.eq(200)
    })

    cy.wait('@postUserTable').then((resUserTable) => {
        expect(resUserTable.status).to.eq(200)
    })

    cy.wait('@getNewTable').then((resNewTable) => {
        expect(resNewTable.status).to.eq(200)
    })

    cy.url().should('contain', 'WebTable');
});
