describe("Order Page", () => {
  beforeEach(() => {
    //cypress.config.js >> baseUrl olarak ekledim
    cy.visit("/");
  });
  describe("Error Message", () => {
    it("Errors", () => {
      it("shows error messages when form is submitted without any selections", () => {
        cy.get("[data-cy=submit-button]").click();

        cy.get("[data-cy=boyut-error-message]")
          .should("be.visible")
          .and("contain", "Lütfen pizza boyutunu seçiniz.");

        cy.get("[data-cy=hamur-error-message]")
          .should("be.visible")
          .and("contain", "Lütfen hamur kalınlığı seçiniz.");

        cy.get("[data-cy=ad-error-message]")
          .should("be.visible")
          .and("contain", "En az 3 karakter giriniz.");

        cy.get("[data-cy=siparisNot-error-message]")
          .should("be.visible")
          .and("contain", "En az 3 karakter giriniz.");

        cy.get("[data-cy=malzeme-error-message]")
          .should("be.visible")
          .and("contain", "En az 4 en fazla 10 seçim yapmalısınız.");
      });
    });
  });
  describe("Form Context", () => {
    it("Name input", () => {
      //Arrange
      //Act
      const validName = "abc";
      cy.get('[data-cy="isim-input"]').clear().type(validName);
      //assert
      cy.contains("Adınız en az 3 karakter olmalıdır.").should("not.exist");
    });
    it("Malzeme input", () => {
      //Arrange
      //Act
      cy.get('[data-cy="malzeme-input"]').check("Pepperoni");
      //assert
      cy.contains("Pepperoni");
    });
    it("button is disabled for unvalidated input", () => {
      //Arrange
      //Act
      cy.get('[data-cy="malzeme-input"]').check("Pepperoni");
      //assert
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });
  });
  describe("Checkbox Test", () => {
    it("should be clickable and selectable", () => {
      cy.get('[data-cy="malzeme-input"]').check().should("be.checked");
      cy.get('[data-cy="malzeme-input"]').uncheck().should("not.be.checked");
    });
  });
  describe("Radio Button Selection", () => {
    it('Selects the "Küçük" size radio button', () => {
      // Küçük boyut radio butonunu seç ve seçili olup olmadığını kontrol et
      cy.get('[data-cy="radio3-input"]').check().should("be.checked");

      // Diğer radio butonlarının seçili olmadığını kontrol et
      cy.get('[data-cy="radio2-input"]').should("not.be.checked");
      cy.get('[data-cy="radio1-input"]').should("not.be.checked");
    });

    it('Selects the "Orta" size radio button', () => {
      // Orta boyut radio butonunu seç ve seçili olup olmadığını kontrol et
      cy.get('[data-cy="radio2-input"]').check().should("be.checked");

      // Diğer radio butonlarının seçili olmadığını kontrol et
      cy.get('[data-cy="radio3-input"]').should("not.be.checked");
      cy.get('[data-cy="radio1-input"]').should("not.be.checked");
    });

    it('Selects the "Büyük" size radio button', () => {
      // Büyük boyut radio butonunu seç ve seçili olup olmadığını kontrol et
      cy.get('[data-cy="radio1-input"]').check().should("be.checked");

      // Diğer radio butonlarının seçili olmadığını kontrol et
      cy.get('[data-cy="radio3-input"]').should("not.be.checked");
      cy.get('[data-cy="radio2-input"]').should("not.be.checked");
    });
  });
});
