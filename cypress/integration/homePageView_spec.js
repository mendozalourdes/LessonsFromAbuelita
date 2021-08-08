describe("Main Page View", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#loadingImg");
    cy.intercept(
      "GET",
      "https://palabras-aleatorias-public-api.herokuapp.com/random",
      {
        status: 201,
        body: "word.json",
      }
    );
    cy.get("h1").contains("Lessons from Abuelita");
  });

  it("Should show the user a page title", () => {
    cy.get("h1").contains("Lessons from Abuelita");
  });

  it("Should get data from the fetch call", () => {
    cy.get("h1").contains("Lessons from Abuelita");
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
    cy.visit("http://localhost:3000/word");
    cy.get("h1").contains("Lessons from Abuelita");
    cy.get("#randomWord").contains("yak");
    cy.get("#wordImage");
  });

  it("Should have instructions for the user", () => {
    cy.get("h3").contains(
      "Welcome to Lessons from Abuelita! This is a place where Abuelitas and nietes (grandkids) can come together to practice their Spanish together, share their culture, and create a beautiful connection that transcends borders and distance."
    );
  });

  it("Should show the user a Let's Get Started button", () => {
    cy.get("#startLearningBtn");
  });

  it("Should show the user a Saved Words and Sentences button", () => {
    cy.get("#savedBtn");
  });

  it("Should show the user a Show Me A Word button", () => {
    cy.get("#wordBtn");
  });

  it("Should be able to click on Let's Get Started button and change page view", () => {
    cy.get("#startLearningBtn").click();
    cy.get("#randomWord");
    cy.get("#wordImage");
    cy.get("#formViewBtn");
    cy.get("#getNewWord");
  });
});
