'use strict'

class ArticleCreatePage {

    constructor(){
        /*
        cy.url().then((url)=>{
            expect(url).to.match(/articles/create)
        })
        cy.get('h1').then(($ele)=>{
            const text = $ele.text()
            expect(text).to.include('Create Article')
        })
        */
    }

    get _timeout(){return 10000}
    get _title_Input(){return "//label[.='Title']/following-sibling::input"}
    get _content_TextArea(){return "//label[.='Content']/following-sibling::textarea"}
    get _save_Article_Btn(){return "//button[.='Save Article']"}
    get _regions_Btn(){return "//button/parent::span[@class='rw-select']"}
    get _regions_Input(){return "//button/parent::span[@class='rw-select']/preceding-sibling::div/input"}
    get _regions_ListboxItem(){return "//ul[@role='listbox']/li" }

    inputTitle(titleText) 
    {
        cy.xpath(this._title_Input,{ timeout: this._timeout }).scrollIntoView().should('be.visible').clear().type(titleText)
    }

    inputContent(text) 
    {
        cy.xpath(this._content_TextArea,{ timeout: this._timeout }).scrollIntoView().should('be.visible').clear().type(text)
    }

    clickSaveArticleBtn() 
    {
        cy.xpath(this._save_Article_Btn,{ timeout: this._timeout }).scrollIntoView().should('be.visible').click()
    }

    clickRegionsBtn() 
    {
        cy.xpath(this._regions_Btn,{ timeout: this._timeout }).scrollIntoView().should('be.visible').click()
    }

    inputRegionsText(regionsText) 
    {
        cy.xpath(this._regions_Input,{ timeout: this._timeout }).scrollIntoView().should('be.visible').clear().type(regionsText)
    }

    clickRegionsListboxItem() 
    {
        cy.xpath(this._regions_ListboxItem,{ timeout: this._timeout }).last().scrollIntoView().should('be.visible').click()
    }

    createNewArticle(title, content,region)
    {
        this.inputTitle(title)
        this.inputContent(content)
        region.forEach(regionText => {
            this.clickRegionsBtn
            this.inputRegionsText(regionText)
            this.clickRegionsListboxItem()
            this.clickRegionsBtn()
        })
        this.clickSaveArticleBtn()
    }
}
module.exports = new ArticleCreatePage()