// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() { // titulo do teste
    it('verifica o título da aplicação', function() { //o que o teste vai verificar


        cy.visit( './src/index.html')//visitar uma url local
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')  //confere o titulo da url

    })
  })
  