beforeEach(() => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать").should("be.visible");
});

// Список книг
const bookFirst = {
  title: "Маленький принц",
  description: "Эта добрая и грустная сказка полна философского смысла.",
  author: "Антуан де Сент-Экзюпери",
};

const bookSecond = {
  title: "Собор Парижской Богоматери",
  description:
    "Сюжет развивается в Париже 15 века. Для одних город блещет роскошью и величием, для других выглядит помойкой.",
  author: "Виктор Гюго",
};

const bookThird = {
  title: "Анны Франк",
  description: "Девочка Анна Франк описывала ужасы войны в своем дневнике.",
  author: "Франк",
};

describe("Favorite book spec", () => {
  it("Should add new book", () => {
    cy.addBook(bookFirst);
    cy.get(".card-title").should("contain.text", bookFirst.title);
  });

  it("Should add new book to favorite", () => {
    cy.addFavoriteBook(bookSecond);
    cy.visit("/favorites");
    cy.get(".card-title").should("contain.text", bookSecond.title);
  });

  it("Should add book to favorite through 'Book list' page", () => {
    cy.addNoFavoriteBook(bookFirst);
    cy.contains(bookFirst.title)
      .should("be.visible")
      .within(() => cy.get(".card-footer > .btn").click({ force: true }));
    cy.visit("/favorites");
    cy.contains(bookFirst.title).should("be.visible");
  });

  it("Should delete book from favorite", () => {
    cy.visit("/favorites");
    cy.contains(bookSecond.title)
      .should("be.visible")
      .within(() => cy.get(".card-footer > .btn").click({ force: true }));
    cy.contains(bookSecond.title).should("not.exist");
  });
});
