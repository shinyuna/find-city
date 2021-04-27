describe("Index Page", () => {
  it("should see index page", () => {
    cy.visit("/").title().should("eq", "찰떡궁합 도시 찾기")
  })
  it("click button navigates to qna", () => {
    cy.get(".pages__Button-irjAvs")
      .findByText("나랑 찰떡궁합 도시 알아보기")
      .click()
    cy.url().should("includes", "/qna/")
  })
})
