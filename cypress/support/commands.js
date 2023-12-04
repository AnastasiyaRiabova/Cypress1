Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

//Варианты добавления книг без обложки и файла

Cypress.Commands.add("addBook", (book) => {
  cy.contains("Add new").click();
  cy.contains("Book description");
  cy.get("#title").type(book.title);
  cy.get("#description").type(book.description);
  cy.get("#authors").type(book.author);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addFavoriteBook", (book) => {
  cy.contains("Add new").click();
  cy.contains("Book description");
  cy.get("#title").type(book.title);
  cy.get("#description").type(book.description);
  cy.get("#authors").type(book.author);
  cy.get("#favorite").click();
  cy.contains("Submit").click();
});

Cypress.Commands.add("addNoFavoriteBook", (book) => {
  cy.contains("Add new").click();
  cy.get("input#title").type(book.title);
  cy.get("input#description").type(book.description);
  cy.get("input#authors").type(book.author);
  cy.contains("Submit").click();
});
