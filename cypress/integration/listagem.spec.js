/// reference types="cypress"

context('Listagem', () => {
    it.only('Listagem sem registro', () => {
        // Cria o mock da tabela vazia para facilitar os testes
        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: []
        }).as('getNewTable');

        cy.visit('WebTable.html');

        // Valida que a tabela está vazia
        cy.get('div[role=row]').should('have.length', 1);
    });
    it('Listagem com apenas 1 registro', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: []
        } ).as('');
    });
});
