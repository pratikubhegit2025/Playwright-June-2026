import { expect, test } from '@playwright/test';

test('XPath locator examples', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // 1. Exact attribute: finds the logo with the exact alt text.
  const logo = page.locator("//img[@alt='Tricentis Demo Web Shop']");
  await expect(logo).toBeVisible();

  console.log('Home page title:', await page.title());

  // 2. Multiple attributes with AND: both conditions must be true.
  const searchBox = page.locator("//input[@type='text' and @name='q']");
  await searchBox.fill('laptop');

  // 3. Exact attribute value: targets the one Search button.
  await page.locator("//input[@type='submit' and @value='Search']").click();
  await expect(page).toHaveTitle(/Search/i);

  // 4. Exact text: normalize-space handles leading and trailing spaces.
  const searchResult = page.locator("//a[normalize-space(.)='14.1-inch Laptop']");
  await expect(searchResult).toBeVisible();

  // Uncomment one example at a time while practising on the home page.
  // await page.goto('https://demowebshop.tricentis.com/');

  // 5. contains(): finds a link containing part of its visible text.
  // await page.locator("//a[contains(normalize-space(.), 'cheap computer')]").click();

  // 6. contains(): finds every product link that has 'build-your' in its href.
  // const buildYourLinks = page.locator("//a[contains(@href, 'build-your')]");
  // console.log('Build-your links:', await buildYourLinks.allInnerTexts());

  // 7. starts-with(): selects links whose href begins with /build-your.
  // await page.locator("//a[starts-with(@href, '/build-your')]").nth(0).click();

  // 8. Exact text: selects the My account link.
  // await page.locator("//a[normalize-space(.)='My account']").click();

  // 9. ends-with() alternative in XPath 1.0.
  // XPath 1.0 has no ends-with(), so substring compares the last characters.
  // await page.locator(
  //   "//a[substring(@href, string-length(@href) - string-length('computer-2') + 1) = 'computer-2']"
  // ).click();

  // 10. Parent to child: limits Add to cart to the main product area.
  // await page.goto('https://demowebshop.tricentis.com/build-your-own-computer');
  // await page.locator(
  //   "//div[contains(@class, 'product-essential')]//input[@type='button' and @value='Add to cart']"
  // ).click();
});

/*
XPath interview questions

1. What is the difference between //a[text()='My account'] and
   //a[normalize-space(.)='My account']?
2. When should you combine attributes with and in an XPath locator?
3. Write an XPath that finds an input with name='q' and type='text'.
4. What does contains(@href, 'build-your') do?
5. What does starts-with(@href, '/build-your') do?
6. XPath 1.0 has no ends-with(). How can substring() be used instead?
7. If a locator has six matching elements, what indexes are valid with nth()?
8. Why is //input[@type='submit'] usually less reliable than using both type and value?
9. How would you find the first product link whose href starts with /build-your?
10. Why is a parent-child XPath useful when multiple buttons have the same text?
*/
