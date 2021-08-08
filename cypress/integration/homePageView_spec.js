const oneWord = {
  word: 'discriminar',
  DefinitionMD: " Dar trato de inferioridad a una persona o colectividad por motivos raciales,  religiosos,  de sexo,  de clase social o casta u otros motivos ideológicos:discriminar a una persona por cualquier motivo es un acto inconstitucional.  Separar,  diferenciar una cosa de otra",
  image: "https://palabras-aleatorias-public-api.herokuapp.com/word-as-image?word=discriminar"
}

describe("Main Page View", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      cy.get('#loadingImg')
      cy.get("h1").contains("Lessons from Abuelita");
    });

      it("Should show the user a page title", () => {
      cy.get("h1").contains("Lessons from Abuelita");
    });

    // it("Should show get data from API", () => {
    //   cy.get('#startLearningBtn').click()
    // cy.intercept('https://palabras-aleatorias-public-api.herokuapp.com/palabras-aleatorias?Word=discriminar', {
    //     fixture: 'word.json'})

    // // cy.visit("http://localhost:3000");
    // // cy.wait('@wordReques t');
    // cy.contains('a', oneWord.word).should('be.visible');

    // // cy.get('#randomWord')
    // // cy.get('#wordImage')
    // // cy.get('#formViewBtn')
    // // cy.get('#getNewWord')
    // })


    it('Should have a 201 status code', () => {
      cy.visit("http://localhost:3000/word")
      cy.get("h1").contains("Lessons from Abuelita");
      cy.intercept(
        {
            method: "GET",
            url: "https://palabras-aleatorias-public-api.herokuapp.com/palabras-aleatorias?Word=discriminar"
        }, 
        {
            status: 201,
            body: [{
              word: 'discriminar',
              DefinitionMD: " Dar trato de inferioridad a una persona o colectividad por motivos raciales,  religiosos,  de sexo,  de clase social o casta u otros motivos ideológicos:discriminar a una persona por cualquier motivo es un acto inconstitucional.  Separar,  diferenciar una cosa de otra",
              image: "https://palabras-aleatorias-public-api.herokuapp.com/word-as-image?word=discriminar"
            }]
        }) 
        cy.get('#randomWord')
});

  
  
    it("Should have instructions for the user", () => {
      cy.get("h3").contains(
        "Welcome to Lessons from Abuelita! This is a place where Abuelitas and nietes (grandkids) can come together to practice their Spanish together, share their culture, and create a beautiful connection that transcends borders and distance."
      );
    });

    it("Should show the user a Let's Get Started button", () => {
        cy.get('#startLearningBtn')
      });
    
      it("Should show the user a Saved Words and Sentences button", () => {
        cy.get('#savedBtn')
      });

      it("Should show the user a Show Me A Word button", () => {
        cy.get('#wordBtn')
      });

      it("Should be able to click on Let's Get Started button and change page view", () => {
        cy.get('#startLearningBtn').click()
        cy.get('#randomWord')
        cy.get('#wordImage')
        cy.get('#formViewBtn')
        cy.get('#getNewWord')
      });
  
  });
  