import {expect ,test, Locator, Page} from '@playwright/test';

test('Web Actions', async({page}) =>{

//1. Open the browser and navigate to the URL
//2. Enter Name and check the maximum length of the name field
//3. Click on gender radio button and check if it is selected
//4. verify multiple checkboxes and select all of them


//opening browser and navigating to the URL
await page.goto('https://testautomationpractice.blogspot.com/');
await expect(page).toHaveTitle('Automation Testing Practice');
console.log('Title is:', await page.title());
//entering name and checking the maximum length of the name field
//await page.getByPlaceholder('Enter Name').fill('Pratik Ubhe');
//  const name= page.getByPlaceholder('Enter Name');
//  await name.fill('Pratik Ubhe');
//  await page.waitForTimeout(2000);
//  await name.clear();
//  await page.waitForTimeout(2000);
// const longName= 'PratikUbheMaharashtraIndia'; // max leghth of the name field is 15 characters, so this name has 27 characters

// await page.waitForTimeout(2000);

// console.log(longName.substring(3, 18)); // checking the maximum length of the name field

// await expect(name).toHaveAttribute('maxlength', '15'); // checking the maximum length of the name field
// const substring1 = longName.substring(3, 18);
// await name.fill(substring1); // filling the name field with the substring of the long name
// await page.waitForTimeout(2000);
// await expect(name).toHaveValue(substring1); // checking the maximum length of the name field

//RADIO BUTTON


// const male =page.getByRole('radio',{name:'Male',exact:true});
// //const male = await expect(page.getByRole('radio',{name:'Male',exact:true})).toBeChecked();
// const isSelected = await male.isChecked();
// console.log('Male radio button is selected:', isSelected);

// male.check();
// await expect(male).toBeChecked();
// console.log('Male radio button is selected:', await male.isChecked());

//CHECKBOXES

// page.getByRole('checkbox',{name:'Monday'}).check();
// await page.waitForTimeout(2000);
//  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// for (let i=0; i<days.length; i++){
//   const checkbox = page.getByRole('checkbox', { name: days[i] });
//   await checkbox.check();
//   await expect(checkbox).toBeChecked();
//   console.log(days[i] + " checkbox is selected:", await checkbox.isChecked());
//   await page.waitForTimeout(1000);
// }


// const checkboxes =page.locator(`xpath =//input[@id='sunday'] | //input[@id='monday'] | //input[@id='tuesday'] | //input[@id='wednesday'] | //input[@id='thursday'] | //input[@id='friday'] | //input[@id='saturday']`);
// for(let i=0; i<7; i++){
// checkboxes.nth(i).check();
// await expect(checkboxes.nth(i)).toBeChecked();
// console.log('Checkbox ' + (i+1) + ' is selected:', await checkboxes.nth(i).isChecked());
// await page.waitForTimeout(1000);


// handle dropdown and select an option

// await page.locator('#country').selectOption('India');
// await expect(page.locator('#country')).toHaveValue('india');

// console.log('Selected country is:', await page.locator('#country').inputValue());

//To select all values from drop down 


// const country =page.locator('#country');
// const countryValues= ['india', 'usa', 'canada', 'uk', 'germany', 'france', 'japan', 'china', 'brazil', 'australia'];

// for (let i=0;i<countryValues.length;i++){
//  await country.selectOption(countryValues[i]);
//  await expect(country).toHaveValue(countryValues[i]);
//  console.log('Selected country is:', countryValues[i]);
//  await page.waitForTimeout(1000);



// const datepicker1=page.locator('input#datepicker');
// await datepicker1.fill('06/15/2026');
// await page.waitForTimeout(2000);
// await expect(datepicker1).toHaveValue('06/15/2026');
// console.log('Selected date is:', await datepicker1.inputValue());

const datepicker1=page.locator('input#datepicker');
const calender = page.locator('#ui-datepicker-div');
await datepicker1.click();
await calender.locator("td[data-month='8'][data-year='2026'] a[data-date='6']").click();
await page.waitForTimeout(2000);
await expect(datepicker1).toHaveValue('09/06/2026');
console.log('Selected date is:', await datepicker1.inputValue());











});
