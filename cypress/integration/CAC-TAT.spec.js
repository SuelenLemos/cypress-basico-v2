// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />


    describe('Central de Atendimento ao Cliente TAT', function() { // titulo do teste
     beforeEach(function(){
      cy.visit( './src/index.html')//visitar uma url local
     })
        it('verifica o título da aplicação', function() { //o que o teste vai verificar

            cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')  //confere o titulo da url
    
        })
      })




  describe('preenche os campos obrigatórios e envia o formulário', function(){
    it('preenche os textos',function(){ //se quiser testar apenas um ponto isolado , coloca it.only para ele rodar somente um determinado teste

        cy.get('input[id=firstName]').type('Fulano') //cypress já identifica e seleciona o campo, por este motivo não há necessidade de clicar para selecionar
        
        cy.get('input[id=lastName]').type('De Tal')

        cy.get('input[id=email]').type('fulano@teste.com')

        cy.get('input[id=phone]').type('99999999')
        
         
        cy.select('[id=product]').should('be.visible').first().click()
        
        

        
    })
  })