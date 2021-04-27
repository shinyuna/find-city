describe("Result Page", () => {
  it("should see result page", () => {
    cy.visit("/result?city=seoul")
      .title()
      .should("eq", "나의 찰떡궁합 도시 결과 🍡")
  })
  it("site url", () => {
    cy.url().should("include", "seoul")
  })
  it("button click retesting", () => {
    cy.get(".result__Button-frPAfB").findByText("테스트 다시 해보기").click()
    cy.url().should("include", "/qna")
  })
})
