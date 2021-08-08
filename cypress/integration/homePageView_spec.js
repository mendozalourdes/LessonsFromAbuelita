describe("Main Page View", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      cy.get('#loadingImg')
      cy.get("h1").contains("Lessons from Abuelita");
    });

      it("Should show the user a page title", () => {
      cy.get("h1").contains("Lessons from Abuelita");
    });

    it("Should show get data from API", () => {
    cy.intercept('GET', 'https://palabras-aleatorias-public-api.herokuapp.com/random', {
        statusCode: 200, 
        fixture: 'word.json'
    })
    cy.get('#startLearningBtn').click()
    cy.get('#randomWord')
    cy.get('#wordImage')
    cy.get('#formViewBtn')
    cy.get('#getNewWord')
    })
  
  
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
  