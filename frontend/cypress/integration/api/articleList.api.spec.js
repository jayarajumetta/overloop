
const HOST_URL  = Cypress.config('requestUrl')
const RESOURCE_END_POINT = "/articles" 


describe('Validate articles list API', () => {

  it('Verify articles list api response status', () => {
    return cy.fixture('articles').then(request => {
      cy.request({
        method: 'GET',
        url: `${HOST_URL}${RESOURCE_END_POINT}`,
        body: request,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).should((response) => {
        expect(response.status).to.be.eq(200)
      })
    })
  })

  it('Verify articles list api response body', () => {
    return cy.fixture('articles').then(request => {
      cy.request({
        method: 'GET',
        url: `${HOST_URL}${RESOURCE_END_POINT}`,
        body: request,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).should((response) => {
        cy.log(response.body[5])
        expect(response.body[0]).to.have.all.keys(
          'author','authorId','content','id','title','regions'
         )

      })
    })
  })
})
