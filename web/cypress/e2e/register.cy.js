/// <reference types="cypress" />
import data from '../fixtures/orphanages.json'

describe('Register of Orphanages', () => {
    it('Deve cadastrar um novo orfanato', () => {
        // eslint-disable-next-line no-undef
    //    cy.visit('http://localhost:3000/orphanages/create')

    const orphanage = data.create

    cy.visitWithMockGeolocation('http://localhost:3000/orphanages/create')

        cy.get('legend')
            .should('be.visible')
            .should('text.text', 'Cadastro')

       //     cy.get('input[name=name]')
      //      .type('Orfanato criança feliz')

      cy.contains('label', 'Nome')
        .parent()
        .find('input').type(orphanage.name)

        cy.get('#description').type(orphanage.description)

        // horário de funcionamento
        cy.get('#opening_hours').type(orphanage.opening_hours)

        cy.contains('button', orphanage.open_on_weekends).click()

        
    })
  })

  Cypress.Commands.add('visitWithMockGeolocation', (url, latitude = -22.2767712, longitude = -49.0728608) => {
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