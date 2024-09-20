/// <reference types="cypress" />

describe('Register of Orphanages', () => {
    it('Deve cadastrar um novo orfanato', () => {
        // eslint-disable-next-line no-undef
    //    cy.visit('http://localhost:3000/orphanages/create')

    cy.visitWithMockGeolocation('http://localhost:3000/orphanages/create')

        cy.get('legend')
            .should('be.visible')
            .should('text.text', 'Cadastro')

        
    })
  })

  Cypress.Commands.add('visitWithMockGeolocation', (url, latitude = 54, longitude = 39) => {
    const mockGeolocation = (win, latitude, longitude) => {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition', cb => {
            return cb({ coords: { latitude, longitude }});
        });
    };
    cy.visit(url, {
        onBeforeLoad: win => {
            mockGeolocation(win, latitude, longitude);
        }
    })
  })