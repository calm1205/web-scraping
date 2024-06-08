import { By, WebDriver } from "selenium-webdriver";
import { sleep } from "@/src/libs";

/**
 * wordで検索
 */
export const searchWord = async (driver: WebDriver, word: string) => {
  console.log(`"${word}"を検索中...`);
  const searchBox = await driver
    .findElement(By.id("searchbox"))
    .findElement(By.css("input"));

  await searchBox.sendKeys(word);
  await sleep(1000);

  const searchButton = await driver.findElement(
    By.id("searchbox-searchbutton")
  );
  await searchButton.click();
};