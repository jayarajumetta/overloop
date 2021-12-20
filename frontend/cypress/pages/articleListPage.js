'use strict'

class ArticleListPage {

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
    get _createNewArticle_Link(){return "a[href='/articles/create']"}
    get _articleLink(){return "//table/tbody//td/a[.='articleName']"}

    
    clickCreateNewArticle() 
    {
        cy.get(this._createNewArticle_Link,{ timeout: this._timeout }).scrollIntoView().should('be.visible').click()
    }

    verifyArticleListed(articleText) 
    {
        this._articleFinalLink = this._articleLink.replace('articleName',articleText)
        cy.xpath(this._articleFinalLink,{ timeout: this._timeout }).scrollIntoView().should('be.visible')
    }

    clickArticlelink(articleText) 
    {
        this._articleFinalLink = this._articleLink.replace('articleName',articleText)
        cy.xpath(this._articleFinalLink,{ timeout: this._timeout }).scrollIntoView().should('be.visible').click()
    }

}

module.exports = new ArticleListPage()