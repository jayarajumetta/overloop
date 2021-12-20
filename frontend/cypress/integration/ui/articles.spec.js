
const Reference = require('../../pages/reference')
/// <reference types="cypress" />

describe('Validate Overloop Tech Test articles app', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Should verify creation of a new article', () => {
      //test data
      let titleText = "Automation_Title_" + Reference.utils.generateRandomString(5)
      let contentText = "Automation_content_" + Reference.utils.generateRandomString(5)
      let regionText = ["Australia","United Kingdom"]

      //test workflow
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.clickCreateNewArticle()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Create Article")
      cy.createNewArticle(titleText,contentText,regionText)
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.verifyArticleListed(titleText.trim())

    })

    it('Should verify edit an article', () => {
      //test data
      let titleText = "Automation_Title_" + Reference.utils.generateRandomString(5)
      let contentText = "Automation_content_" + Reference.utils.generateRandomString(5)
      let regionText = ["Australia","United Kingdom"]
      let editTitleText = "Edit_Automation_Title_" + Reference.utils.generateRandomString(5)
      let editContentText = "Edit_Automation_content_" + Reference.utils.generateRandomString(5)

      //test workflow
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.clickCreateNewArticle()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Create Article")
      cy.createNewArticle(titleText,contentText,regionText)
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.clickArticlelink(titleText.trim())
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Edit Article")
      Reference.pages.ArticleEditPage.inputEditTitle(editTitleText)
      Reference.pages.ArticleEditPage.inputEditContent(editContentText)
      Reference.pages.ArticleCreatePage.clickSaveArticleBtn()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.verifyArticleListed(editTitleText.trim())
    })

    it('Should verify remove the selected regions from an article', () => {
      //test data
      let titleText = "Automation_Title_" + Reference.utils.generateRandomString(5)
      let contentText = "Automation_content_" + Reference.utils.generateRandomString(5)
      let regionText = ["Australia","United Kingdom"]
      let editTitleText = "Edit_Automation_Title_" + Reference.utils.generateRandomString(5)
      let editContentText = "Edit_Automation_content_" + Reference.utils.generateRandomString(5)

      //test workflow
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.clickCreateNewArticle()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Create Article")
      cy.createNewArticle(titleText,contentText,regionText)
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.clickArticlelink(titleText.trim())
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Edit Article")
      Reference.pages.ArticleEditPage.clickRemoveRegionListboxItems(["Australia"])
      Reference.pages.ArticleCreatePage.clickRegionsBtn()
      Reference.pages.ArticleCreatePage.clickSaveArticleBtn()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.verifyArticleListed(titleText.trim())
      Reference.pages.ArticleListPage.clickArticlelink(titleText.trim())
      Reference.pages.ArticleEditPage.verifySelectedRegions(["United Kingdom"])

    })

    it('Should verify an article details', () => {
      //test data
      let titleText = "Automation_Title_" + Reference.utils.generateRandomString(5)
      let contentText = "Automation_content_" + Reference.utils.generateRandomString(5)
      let regionText = ["Australia","United Kingdom"]

      //test workflow
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.clickCreateNewArticle()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Create Article")
      cy.createNewArticle(titleText,contentText,regionText)
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.clickArticlelink(titleText.trim())
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Edit Article")
      Reference.pages.ArticleEditPage.verifyTitleText(titleText)
      Reference.pages.ArticleEditPage.verifyContentText(contentText)
      Reference.pages.ArticleEditPage.verifySelectedRegions(regionText)

    })

    it('Should verify query articles', () => {
      //test data
      let titleText = "Automation_Title_" + Reference.utils.generateRandomString(5)
      let contentText = "Automation_content_" + Reference.utils.generateRandomString(5)
      let regionText = ["Australia","United Kingdom","United States of America"]

      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.clickCreateNewArticle()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Create Article")
      cy.createNewArticle(titleText,contentText,regionText)
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.verifyArticleListed(titleText.trim())
    })

    it('Should verify articles Home navigation', () => {
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.CommonPage.clickArticleHomePageLink()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
    })

    it('Should verify Overloop Tech Test Link navigation', () => {
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.CommonPage.clickOverloopTechTestlink()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
    })

    it('Should verify available regions count', () => {
      //test workflow
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Articles")
      Reference.pages.ArticleListPage.clickCreateNewArticle()
      Reference.pages.CommonPage.verifyNavigatedToCorrectPage("Create Article")
      Reference.pages.ArticleCreatePage.clickRegionsBtn()
      Reference.pages.ArticleEditPage.verifyAvailableRegionsListItemsCount(3)
    })    
  })
  