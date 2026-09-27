import { expect, test, Locator } from '@playwright/test';

test('Slider', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const minimumSlider= page.locator('#slider-range .ui-slider-handle').first(); // to get locator of minimum slider 


const maximumSlider= page.locator('#slider-range .ui-slider-handle').last(); // to get locator of maximum slider 


//arrow keys 
// ArrowRight
//ArrowLeft 
await minimumSlider.press('ArrowRight');

await maximumSlider.press('ArrowLeft');
const priceRange =page.locator('#amount');

console.log("Select price range: ", await priceRange.inputValue());


// validation 
await expect(priceRange).toHaveValue('$76 - $299');








});














//alert
//confirm
//prompt 




