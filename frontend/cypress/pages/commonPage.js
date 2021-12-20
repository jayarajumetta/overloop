'use strict'

class CommonPage {

    constructor(){
        /*
        cy.url().then((url)=>{
            expect(url).to.match(/articles/list)
        })
        cy.get('h1').then(($ele)=>{
            const text = $ele.text()
            expect(text).to.include('Articles')
        })
        */
    }

    get _timeout(){return 10000}
    get _Article_Homepage_Link(){return "a[href='/articles/list']"}
    get _Overloop_Tech_Test_Link(){return "a[href='/']"}

    verifyNavigatedToCorrectPage(pageName) 
    {
        cy.get('h1',{ timeout: this._timeout }).should('be.visible').should('have.text',pageName)
    }

    clickOverloopTechTestlink() 
    {
        cy.get(this._Overloop_Tech_Test_Link,{ timeout: this._timeout }).scrollIntoView().should('be.visible').click()
    }

    clickArticleHomePageLink() 
    {
        cy.get(this._Article_Homepage_Link,{ timeout: this._timeout }).scrollIntoView().should('be.visible').click()
    }

}

module.exports = new CommonPage()