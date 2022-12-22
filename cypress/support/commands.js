Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Douglas')
    cy.get('#email').type('douglas@hotmail.com')
    cy.get('#lastName').type('santos')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})