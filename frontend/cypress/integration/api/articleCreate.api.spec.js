
const HOST_URL  = Cypress.config('requestUrl')
const END_POINT = "/articles" 
const Reference = require('../../pages/reference')


describe('Validate article create API', () => {

  it('Verify article create api response status', () => {
    return cy.fixture('articles').then(request => {
      cy.request({
        method: 'POST',
        url: `${HOST_URL}${END_POINT}`,
        body: request,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).should((response) => {
        expect(response.status).to.be.eq(200)
      })
    })
  })

  it('Verify article create api response body', () => {
    return cy.fixture('articles').then(request => {
      request.title = "api_test_tittle_" + Reference.utils.generateRandomNumber(3)
      request.content = "api_test_content_" + Reference.utils.generateRandomNumber(3)
      cy.request({
        method: 'POST',
        url: `${HOST_URL}${END_POINT}`,
        body: request,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).should((response) => {
        cy.log(response.body)
        expect(response.body).to.have.all.keys(
          'author','authorId','content','id','title','regions'
         )
         expect(response.body["id"]).not.to.be.eq(null)
         expect(response.body["title"]).to.be.eq(request.title)
         expect(response.body["content"]).to.be.eq(request.content)
      })
    })
  })
})
