import { test, expect } from "@playwright/test";
import { productPage } from "../pages/productPage.js";

test.beforeEach("Setup - entering a page", async ({ page }) => {
  const Product = new productPage(page);
  await Product.goToPage();
  await Product.acceptCookies();
});

test("Product name is correct", async ({ page }) => {
  const Product = new productPage(page);
  await Product.productNameIsCorrect("Kask Cross Airoh Twist 2.0 Czarny");
});

test("Page header is visible", async ({ page }) => {
  const Product = new productPage(page);
  await Product.pageHeaderIsVisible();
});

test("Page header menu is visible", async ({ page }) => {
  const Product = new productPage(page);
  await Product.pageHeaderMenuIsVisible();
});

test("Page meta links are visible", async ({ page }) => {
  const Product = new productPage(page);
  await Product.pageHeaderMetaLinksAreVisible();
});

test("Product photo is visible", async ({ page }) => {
  const Product = new productPage(page);
  await Product.productPhotoIsVisible();
});

test("Product price is visible", async ({ page }) => {
  const Product = new productPage(page);
  await Product.productPriceIsVisible();
});

test("Compare a product page with a screenshot", async ({ page }) => {
  const Product = new productPage(page);
  await expect(page).toHaveScreenshot("productPage.png");
});
