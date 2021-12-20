'use strict'

class ArticleEditPage {

    constructor(){
        /*
        cy.get('h1').then(($ele)=>{
            const text = $ele.text()
            expect(text).to.include('Edit Article')
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
    get _remove_regions_Btn(){return "//span[.='regionName']/parent::li/descendant::span[.='×']/parent::button"}


    inputEditTitle(titleText) 
    {
        cy.xpath(this._title_Input,{ timeout: this._timeout }).first().scrollIntoView().should('be.visible').clear().type(titleText)
    }

    verifyTitleText(titleText) 
    {
        cy.xpath(this._title_Input,{ timeout: this._timeout }).first().scrollIntoView().should('be.visible').should('have.value',titleText)
    }

    inputEditContent(text) 
    {
        cy.xpath(this._content_TextArea,{ timeout: this._timeout }).first().scrollIntoView().should('be.visible').clear().type(text)
    }

    verifyContentText(text) 
    {
        cy.xpath(this._content_TextArea,{ timeout: this._timeout }).first().scrollIntoView().should('be.visible').should('have.text',text)
    }

    clickSaveArticleBtn() 
    {
        cy.xpath(this._save_Article_Btn,{ timeout: this._timeout }).first().scrollIntoView().should('be.visible').click()
    }

    clickRegionsBtn() 
    {
        cy.xpath(this._regions_Btn,{ timeout: this._timeout }).first().scrollIntoView().should('be.visible').click()
    }

    inputEditRegionsText(regionsText) 
    {
        cy.xpath(this._regions_Input,{ timeout: this._timeout }).first().scrollIntoView().should('be.visible').clear().type(regionsText)
    }

    clickRegionsListboxItem() 
    {
        cy.xpath(this._regions_ListboxItem,{ timeout: this._timeout }).last().scrollIntoView().should('be.visible').click()
    }
    
    clickRemoveRegionListboxItems(regions) 
    {
        regions.forEach(regionText => {
        this._remove_regions_final_Btn = this._remove_regions_Btn.replace('regionName',regionText)
        cy.xpath(this._remove_regions_final_Btn,{ timeout: this._timeout }).last().scrollIntoView().should('be.visible').click()
        })
    }

    verifySelectedRegions(selectedRegions)
    {
        cy.xpath(this._regions_ListboxItem,{ timeout: this._timeout }).children('span').each(($ele,index)=>{
            const text = $ele.text()
            expect(selectedRegions).to.include(text)
        })
    }

    verifyAvailableRegionsListItemsCount(count)
    {
        cy.xpath(this._regions_ListboxItem,{ timeout: this._timeout }).should('have.length',count)
    }
    
}

module.exports = new ArticleEditPage()