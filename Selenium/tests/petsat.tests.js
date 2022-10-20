require("chromedriver"); // You WILL need to update chrome on the LoD
const { Builder, By, Key, until } = require("selenium-webdriver");
//Builder - what builds our browser
//By - how we select the element to click or input values into
//Key - keyboard functionality
const { expect } = require("chai");

describe("selenium practice tests", function () {
  this.timeout(90_000); 

  it("should buy a kong", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("https://www.petsathome.com/");
      const search = await driver.findElement(By.id("SimpleSearchForm_SearchTerm"));
      await search.sendKeys("kong");
      await driver.findElement(By.id("search_submit")).click();
      const result = await driver.findElement(By.css("#searchBasedNavigation_widget > section > a:nth-child(2)"));
      expect(await result.getText()).to.equal("Kong Classic Chew Treat Dog Toy Red");
    //   await driver.findElement(By.css("#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default")).click();//add to cart 
    // //   //checkout 1 
    // //   await driver.findElement(By.css("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a")).click(); //go to checkout

    //   await driver.findElement(By.css("#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a")).click(); //go to checkout
      
    //   const basket = await driver.findElement(By.css("#product_5_19_0_0 > td.cart_description > p > a"));
    //   expect(await basket.getText()).to.equal("Printed Summer Dress");
    } finally {
     await driver.quit();
    }
  })
  });
  //terminating the browser after each test
  // afterEach(async () => {
  //   await driver.quit();
  // });
