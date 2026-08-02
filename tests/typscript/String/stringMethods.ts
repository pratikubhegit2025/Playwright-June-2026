// Common string methods in TypeScript

let city: string = 'Pune';
let sentence: string = 'I love TypeScript';
let text: string = '  Learning Playwright  ';

console.log('toUpperCase:', city.toUpperCase());
console.log('toLowerCase:', city.toLowerCase());

console.log('charAt(2):', city.charAt(2));
console.log('indexOf("Type"):', sentence.indexOf('Type'));
console.log('includes("love"):', sentence.includes('love'));

console.log('startsWith("I"):', sentence.startsWith('I'));
console.log('endsWith("Script"):', sentence.endsWith('Script'));

console.log('replace:', sentence.replace('TypeScript', 'JavaScript'));

let fruits: string = 'apple, banana, apple';
console.log('replaceAll:', fruits.replaceAll('apple', 'mango'));

console.log('substring(0, 4):', sentence.substring(0, 4));
console.log('slice(7, 17):', sentence.slice(7, 17));

console.log('trim:', text.trim());
console.log('trimStart:', text.trimStart());
console.log('trimEnd:', text.trimEnd());

let words: string[] = sentence.split(' ');
console.log('split:', words);
