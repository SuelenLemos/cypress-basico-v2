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
        const textolongo = 'Olá este texto é extenso,este texto é extenso,este texto é extenso,este texto é extenso,este texto é extenso,este texto é extenso,este texto é extenso,'
        cy.get('input[id=firstName]').type('Fulano') //cypress já identifica e seleciona o campo, por este motivo não há necessidade de clicar para selecionar
        
        cy.get('input[id=lastName]').type('De Tal')
        //´podemos utilizar o comando 'input[id=lastName]' para identificarmos o tipo do campo e o id do campo 
        //OU podemos simplesmente utilizar #iddocampo sem precisar de escrever a palavra 'id' pois o cypress já identifica que '#' é um ID                                          

        cy.get('#email').type('fulano@teste.com')
        cy.get('#phone').type('99999999')
        cy.get('#open-text-area').type(textolongo, {delay:0})
         
        
        cy.get('.button[type="submit"]').click() //estamos usando classe 'button' type 'submit' para identificar o botão de enviar, depois comando de clicar
        cy.get('.success').should('be.visible')
        cy.get('#product').type('cursos')        
    })
  })

    describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
      it('preenche os textos',function(){ //se quiser testar apenas um ponto isolado , coloca it.only para ele rodar somente um determinado teste
          const textolongo = 'Olá este texto é extenso,este texto é extenso,este texto é extenso,este texto é extenso,este texto é extenso,este texto é extenso,este texto é extenso,'
          cy.get('#firstName').type('Fulano') //cypress já identifica e seleciona o campo, por este motivo não há necessidade de clicar para selecionar
          
          cy.get('#lastName').type('De Tal')
          //´podemos utilizar o comando 'input[id=lastName]' para identificarmos o tipo do campo e o id do campo 
          //OU podemos simplesmente utilizar #iddocampo sem precisar de escrever a palavra 'id' pois o cypress já identifica que '#' é um ID                                          
  
          cy.get('#email').type('fulano.com')
          cy.get('#phone').type('99999999')
          cy.get('#open-text-area').type(textolongo, {delay:0})
           
          
          cy.get('.button[type="submit"]').click() //estamos usando classe 'button' type 'submit' para identificar o botão de enviar, depois comando de clicar
          cy.get('.error').should('be.visible')
          cy.get('#product').type('cursos')        
      })
  })