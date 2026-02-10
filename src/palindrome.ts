export function isPalindrome(s: string): boolean {
  // determine if the string is a palindrome
  // ignore spaces, punctuation, and capitalization

  const cleanedS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // console.log('cleanedS after replace and lower cased -> ', cleanedS);

  return cleanedS === cleanedS.split('').reverse().join('');
}
