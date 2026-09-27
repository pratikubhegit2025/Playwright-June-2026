// A class is a blueprint for creating related objects.

// Define a class that represents a browser session.
class BrowserSession {
  // Constructor receives values when a new object is created.
  constructor(
    private readonly browserName: string,
    private currentUrl: string,
  ) {}

  // A method performs a behavior for this object.
  navigate(url: string): void {
    this.currentUrl = url;
    console.log(this.browserName + ' opened ' + this.currentUrl);
  }
}

// Create an object from the BrowserSession blueprint.
const session: BrowserSession = new BrowserSession('Chromium', 'about:blank');

// Call the object method with a real testing URL.
session.navigate('https://testautomationpractice.blogspot.com/');
