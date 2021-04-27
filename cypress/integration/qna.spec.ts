describe("Qna Page", () => {
  it("should see index page", () => {
    cy.visit("/qna/").title().should("eq", "찰떡궁합 도시 찾는 중")
  })
  it("display first question", () => {
    cy.get("p").findByText("1")
  })
  it("click button display next question", () => {
    cy.findByRole("answer-button-0").click()
    cy.findByRole("answer-button-1").click()
    cy.get("p").findByText("3")
  })
  it("click last question navigate result", () => {
    cy.findByRole("answer-button-1").click()
    cy.findByRole("answer-button-1").click()
    cy.findByRole("answer-button-1").click()
    cy.findByRole("answer-button-1").click()
    cy.findByRole("answer-button-1").click()
    cy.findByRole("answer-button-1").click()
    cy.findByRole("answer-button-0").click()
    cy.findByRole("answer-button-0").click()
    cy.findByRole("answer-button-0").click()
    cy.findByRole("answer-button-0").click()

    cy.url().should("include", "/result?city=")
  })
})
