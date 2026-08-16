import {test,expect,Page, Locator} from '@playwright/test';

//test - define scenarios 
//expect- to validate that test cases are giving expected output 
//beforeALL
//beforeEAch
//afterEach
//AfterALL
test.beforeEach(async({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
});


//getByRole

test('get by role', async ({page}) =>{

const primaryButton:Locator =  page.getByRole('button',{name :'Button: Primary Action'});
await primaryButton.click();
await page.getByRole('button',{name: 'Button: Toggle Button'} ).click();
await page.getByRole('checkbox', {name:'Button: Accept terms'}).click();

});



//getByText

test('get by text', async({page})=>{
await expect (page.getByText('This is an important alert message!')).toBeVisible();

});


//getByLable

test('lable locator', async({page})=>{
await page.getByLabel('Email Address:').fill('demo@gamil.com');
await page.getByLabel('Password:').fill('Password1234');
await page.getByLabel('Your Age').fill('25');
});
//getByAltText - 

test('get byAltText locator', async({page}) =>{
 await expect (page.getByAltText('logo image')).toBeVisible();


});

//GetByPlaceHolder

test ('getByPlaceholder Locator', async({page})=>{
const NameInputField:Locator =page.getByPlaceholder('Enter your full name');
await NameInputField.fill('Pratik');
});


//GetByTitle

test('getByTitle Locator', async ({page})=>{
await expect(page.getByTitle('Home')).toBeVisible()
await page.getByTitle('Save').click();

});

// getByTestID

test('GetByTestID',async({page})=>{

await expect(page.getByTestId('Product A')).toBeVisible();
await page.getByTestId('Edit Profile').click();





});