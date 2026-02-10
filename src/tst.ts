export function intToRomanNumeral(num: number): string {
  const RomanNumMap = new Map<number, string>();
  RomanNumMap.set(1000, 'M');
  RomanNumMap.set(500, 'D');
  RomanNumMap.set(100, 'C');
  RomanNumMap.set(50, 'L');
  RomanNumMap.set(10, 'X');
  RomanNumMap.set(5, 'V');
  RomanNumMap.set(1, 'I');

  let ans = '';

  RomanNumMap.forEach((val, key) => {
    while (num >= key) {
      ans += val;
      num -= key;
    }
  });

  const ShorcutRomanNumMap = new Map<string, string>();
  ShorcutRomanNumMap.set('DCCCC', 'CM');
  ShorcutRomanNumMap.set('CCCC', 'CD');
  ShorcutRomanNumMap.set('LXXXX', 'XC');
  ShorcutRomanNumMap.set('XXXX', 'XL');
  ShorcutRomanNumMap.set('VIIII', 'IX');
  ShorcutRomanNumMap.set('IIII', 'IV');

  ShorcutRomanNumMap.forEach((val, shortcut) => {
    if (ans.includes(shortcut)) {
      ans = ans.replace(shortcut, val);
    }
  });

  return ans;
}
