// import { test, expect } from "@playwright/test";
import { chromium } from "playwright";
import percySnapshot from "@percy/playwright";

"Percy snapshot test",
  async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(
      "https://www.24mx.pl/product/kask-cross-airoh-twist-20-czarny_pid-PM-4905040"
    );
    await percySnapshot(page, "Product page");

    await browser.close();
  };
