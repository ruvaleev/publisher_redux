describe('Publisher App', function() {
  it('Adds chapter to book', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Тихий Дон');
    cy.contains('Total Chapters Count 1');
    cy.contains('Ready Chapters 0');
    cy.contains('0%');

    cy.contains('Edit').click();
    cy.get("input[data-testid='Add chapter']").type('Example chapter').should('have.value', 'Example chapter');
    cy.contains('Add chapter').click();
    cy.get("input[data-testid='Add chapter']").should('have.value', '');
    cy.contains('Example chapter');
    cy.contains('Total Chapters Count 2');
    cy.contains('Ready Chapters 1');
    cy.contains('50%');
  })

  it('Adds subsection to chapter', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Тихий Дон');
    cy.contains('Total Subsections Count 1');

    cy.contains('Edit').click();
    cy.get("input[data-testid='Add subsection']").type('Example subsection').should('have.value', 'Example subsection');
    cy.contains('Add subsection').click();
    cy.get("input[data-testid='Add subsection']").should('have.value', '');
    cy.contains('Total Subsections Count 2');
  })

  it('Marks subsection as ready', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Тихий Дон');
    cy.contains('Ready Chapters 0');
    cy.contains('Ready Subsections 0');
    cy.contains('0%');
    expect('body').not.to.have.string('completed');

    cy.contains('Edit').click();
    cy.get("input[data-testid='Toggle subsection ready']").click();
    cy.contains('Ready Chapters 1');
    cy.contains('Ready Subsections 1');
    expect('body').not.to.have.string('%');
    cy.contains('completed');
  })
})
