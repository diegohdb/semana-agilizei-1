/// reference types="cypress"


Given(/^o site não possui registro$/, () => {
    cy.server();
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: []
    }).as('getNewTable');
});

When(/^acessar a Listagem$/, () => {
    cy.visit('WebTable.html');
});

Then(/^devo visualizar a listagem vazia$/, () => {
    // Valida que a tabela está vazia
    cy.get('div[role=row]').should('have.length', 1);
});
