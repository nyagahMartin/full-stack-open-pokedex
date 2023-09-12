/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('https://twilight-haze-7938.fly.dev/')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Navigate', function() {
  it('pokemon page can be navigated to', function() {
    cy.visit('https://twilight-haze-7938.fly.dev/')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})