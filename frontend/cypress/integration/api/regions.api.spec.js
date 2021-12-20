
const HOST_URL  = Cypress.config('requestUrl')
const RESOURCE_END_POINT = "/regions" 


describe('Validate regions dropdown list api', () => {

  it('Verify regions dropdown list api response status', () => {
    return cy.fixture('regions').then(request => {
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

  it('Verify regions dropdown list api response body', () => {
    return cy.fixture('regions').then(request => {
      cy.request({
        method: 'GET',
        url: `${HOST_URL}${RESOURCE_END_POINT}`,
        body: request,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).should((response) => {
        expect(response.body.length).to.be.eq(3)
        expect(response.body[0]).to.have.all.keys(
          'id','code','name'
         )
         expect(response.body[0]["name"]).to.be.eq("Australia")
         expect(response.body[0]["code"]).to.be.eq("AU")
         expect(response.body[1]["code"]).to.be.eq("UK")
         expect(response.body[1]["name"]).to.be.eq("United Kingdom")
         expect(response.body[2]["code"]).to.be.eq("US")
         expect(response.body[2]["name"]).to.be.eq("United States of America")
      })
    })
  })
})
