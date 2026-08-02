// Small real-world string practice examples

function formatEmail(userName: string, domain: string): string {
  return `${userName.trim().toLowerCase()}@${domain.toLowerCase()}`;
}

function maskMobileNumber(mobileNumber: string): string {
  let lastFourDigits: string = mobileNumber.slice(-4);
  return `******${lastFourDigits}`;
}

function isValidPassword(password: string): boolean {
  return password.length >= 8 && password.includes('@');
}

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase().replaceAll(' ', '-');
}

console.log('formatEmail:', formatEmail('  Pratik.Patil  ', 'Example.COM'));
console.log('maskMobileNumber:', maskMobileNumber('9876543210'));
console.log('isValidPassword("Easy@123"):', isValidPassword('Easy@123'));
console.log('isValidPassword("test123"):', isValidPassword('test123'));
console.log('normalizeTag:', normalizeTag('  Playwright Basics  '));
