
const HOST_URL  = Cypress.config('requestUrl')
const END_POINT = `/articles` 
const Reference = require('../../pages/reference')


describe('Validate Edit articles API', () => {

  context('Edit articles API', () => {
    let id
    let titleExpeced

    it('Verify article create api response status', () => {
      return cy.fixture('articles').then(request => {
        request.title = "api_test_tittle_" + Reference.utils.generateRandomNumber(3)
        titleExpeced = request.title
        cy.request({
          method: 'POST',
          url: `${HOST_URL}${END_POINT}`,
          body: request,
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).should((response) => {
          expect(response.status).to.be.eq(200)
          id = response.body["id"]
        })
      })
    })


    it('Verify article edit api response status', () => {
      return cy.fixture('articles').then(request => {
        cy.request({
          method: 'GET',
          url: `${HOST_URL}${END_POINT}/${id}`,
          body: request,
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).should((response) => {
          expect(response.status).to.be.eq(200)
        })
      })
    })
  
    it('Verify article edit api response body', () => {
      return cy.fixture('articles').then(request => {
        cy.request({
          method: 'GET',
          url: `${HOST_URL}${END_POINT}/${id}`,
          body: request,
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).should((response) => {
          expect(response.body["title"]).to.be.eq(titleExpeced)
          expect(response.body).to.have.all.keys(
            'author','authorId','content','id','title','regions'
           )
        })
      })
    })
  })


})
