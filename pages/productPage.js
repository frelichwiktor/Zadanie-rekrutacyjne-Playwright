import { test, expect } from "@playwright/test";

export class productPage {
  constructor(page) {
    this.page = page;
    this.acceptCookieButton = page.locator(
      "#CybotCookiebotDialogBodyLevelButtonAccept"
    );
    this.pageHeader = page.locator('[class="container container-navigation"]');
    this.pageMetaLinks = page.locator('[class="o-desktop-header__meta-links"]');
    this.pageHeaderMenu = page.locator('[class="o-desktop-header__menu"]');
    this.productName = page.locator(
      '[class="qa-pdp-product-name ng-star-inserted"]'
    );
    this.productPhoto = page.locator('[class="o-productpage__image-slider"]');
    this.productPrice = page.locator('[class="m-product-pricing"]');
  }

  async goToPage() {
    await this.page.goto(
      "https://www.24mx.pl/product/kask-cross-airoh-twist-20-czarny_pid-PM-4905040"
    );
  }

  async acceptCookies() {
    await this.acceptCookieButton.click();
  }

  async pageHeaderIsVisible() {
    await expect(this.pageHeader).toBeVisible();
  }

  async pageHeaderMenuIsVisible() {
    await expect(this.pageHeaderMenu).toBeVisible();
  }

  async pageHeaderMetaLinksAreVisible() {
    await expect(this.pageMetaLinks).toBeVisible();
  }

  async productNameIsCorrect(productName) {
    await expect(this.productName).toHaveText(`${productName}`);
  }

  async productPhotoIsVisible() {
    await expect(this.productPhoto).toBeVisible();
  }

  async productPriceIsVisible() {
    await expect(this.productPrice).toBeVisible();
  }
}
