// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />


beforeEach(()=> {

    describe('Central de Atendimento ao Cliente TAT', function() { // titulo do teste
        it('verifica o título da aplicação', function() { //o que o teste vai verificar
    
    
            cy.visit( './src/index.html')//visitar uma url local
            cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')  //confere o titulo da url
    
        })
      })


})

  describe('preenche os campos obrigatórios e envia o formulário', function(){
    it('preenche os textos',function(){

        cy.get('input[id=firstName]').click()
        cy.get('input[id=firstName]').type('Fulano')
        
        cy.get('input[id=lastName]').click()
        cy.get('input[id=lastName]').type('De Tal')

        cy.get('input[id=email]').click()
        cy.get('input[id=email]').type('fulano@teste.com')

        cy.get('input[id=phone]').click()
        cy.get('input[id=phone]').type('99999999')
        
        cy.get('input[id=email]').click()
        cy.get('input[id=email]').type('fulano@teste.com')
     
        cy.get('select[id=product]').should('be.visible').first().click()
        cy.get('select[option value="Selecione"]')

        
    })
  })