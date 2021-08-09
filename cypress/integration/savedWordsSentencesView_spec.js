describe("Saved Words & Sentences Page View", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/form");
    cy.get("#loadingImg");
    cy.intercept(
      "GET",
      "https://palabras-aleatorias-public-api.herokuapp.com/random"
    );
    cy.get("#titleBtn").contains("Lessons from Abuelita");
  });

  it("Should get data from the fetch call", () => {
    cy.get("#titleBtn").contains("Lessons from Abuelita");
    cy.intercept(
      "GET",
      "https://palabras-aleatorias-public-api.herokuapp.com/random",
      {
        status: 201,
        body: {
          api_owner: {
            author: "Alex P. Scigalszky",
            cafecito: "https://cafecito.app/palabrasaleatorias",
            instagram: "https://www.instagram.com/palabras.aleatorias",
            github: "https://github.com/AlexScigalszky",
            linkedin: "https://www.linkedin.com/in/alexscigalszky/",
          },
          body: {
            Word: "yak",
            Definition:
              "%0D%0A%3Cbr%3E%3Cspan%20class=%22small1%22%3EDiccionario%20de%20la%20lengua%20espa%C3%B1ola%20&copy;%202005%20Espasa-Calpe:%3C/span%3E%3Cdiv%20onclick='redirectWR(event,%22ESdefinicion%22)'%20class='trans%20clickable'%3E%3Ch3%3Eyak%20%3C/h3%3E%3Col%20class='entry'%3E%3Cli%3Em.%20%3Cspan%20class=%22b%22%3Eyac.%3C/span%3E%3Cbr%3E%3C/li%3E%3C/ol%3E%3C/div%3E%3Cdiv%20id='FTintro'%3E&#39;%3Cb%3Eyak%3C/b%3E&#39;%20aparece%20tambi%C3%A9n%20en%20las%20siguientes%20entradas:%0D%0A%3C/div%3E%0D%0A%3Cdiv%20class='FTlist'%3E%0D%0A%3Ca%20href=%22/definicion/yac%22%3Eyac%3C/a%3E%0D%0A%3C/div%3E%0D%0A%0D%0A",
            Author: "ascigalszky",
            ErrorMessage: null,
            EncodingWebName: "utf-8",
            WordOrigin: null,
            UrlDefinitionSource: null,
            urls: {
              url: "https://palabras-aleatorias-public-api.herokuapp.com/palabras-aleatorias?Word=yak",
              wiktionary: "https://es.wiktionary.org/wiki/yak",
              wikipedia: "https://es.wikipedia.org/wiki/yak",
              thumbnail:
                "https://palabras-aleatorias-public-api.herokuapp.com/word-as-small-image?word=yak",
              image:
                "https://palabras-aleatorias-public-api.herokuapp.com/word-as-image?word=yak",
            },
            DefinitionMD:
              " m. yac.\n\n'**yak**' aparece también en las siguientes entradas:\n\n[yac](/definicion/yac)\n",
            Related: [
              {
                Word: "yac",
                urls: {
                  url: "https://palabras-aleatorias-public-api.herokuapp.com/palabras-aleatorias?Word=yac",
                  wiktionary: "https://es.wiktionary.org/wiki/yac",
                  wikipedia: "https://es.wikipedia.org/wiki/yac",
                  thumbnail:
                    "https://palabras-aleatorias-public-api.herokuapp.com/word-as-small-image?word=yac",
                  image:
                    "https://palabras-aleatorias-public-api.herokuapp.com/word-as-image?word=yac",
                },
              },
            ],
          },
        },
      }
    );
    cy.visit("http://localhost:3000/word")
    .location("pathname")
    .should("eq", "/word")
    cy.get("#titleBtn").contains("Lessons from Abuelita");
    cy.get("#randomWord").contains("yak");
    cy.get("#wordImage");
    cy.get("#formViewBtn").click()
    .location("pathname")
    .should("eq", "/form")
    cy.get("textarea");
    cy.get("#currentWord").contains("yak");
  });

  it("Should show the user a Saved Words and Sentences button", () => {
    cy.get("#savedBtn");
  });

  it("Should show the user a Show Me A Word button", () => {
    cy.get("#wordBtn");
  });

  it("Should show the user a page title", () => {
    cy.get("#titleBtn").contains("Lessons from Abuelita");
  });

  it("Should show the current word", () => {
    cy.get("#currentWord");
  });

  it("Should show the user a textarea", () => {
    cy.get("textarea");
  });

  it("Should show the user a button to Submit Sentence to Abuelita", () => {
    cy.get("#submitBtn");
  });

  it("Should show the user a button to Save Word", () => {
    cy.get("#saveThisWordBtn");
  });

  it("Should display the saved word after the user clicks on the Save Word Button", () => {
    cy.get("#saveThisWordBtn").click();
    cy.get("p").should("have.class", "each-word");
  });

  it("Should only be able to save the word once and have it displayed on the board once", () => {
    cy.get("#saveThisWordBtn").click();
    cy.get("p").should("have.class", "each-word");
    cy.get("#saveThisWordBtn").click();
    cy.get("p").should("have.class", "each-word");

  });


  it("Should display the saved sentence after the user clicks on the Submit Button", () => {
    cy.get("textarea").type("This is a practice sentence.");
    cy.get("#submitBtn").click();
    cy.get("p")
      .should("have.class", "each-sentence")
      .contains("This is a practice sentence.");
  });

  it("Should not see anything displayed if they submit an empty text area", () => {
    cy.get("textarea");
    cy.get("#submitBtn").click();
    cy.get("#oneSentence")
  });

  it("Should allow the user to click on the Show Me A Word button to see the word view", () => {
    cy.get("#wordBtn").click()
    .location("pathname")
    .should("eq", "/word")
  });


});
