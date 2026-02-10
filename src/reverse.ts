export function reverse(x: string): string {
  // reverse the string x and return it
  return x.split('').reverse().join('');
}

export function reverse2(x: string): string {
  // reverse the string x and return it
  const xArray = x.split('');
  const backwards: string[] = [];
  xArray.forEach((char) => {
    backwards.unshift(char);
  });
  return backwards.join('');
}

export const reverse3 = (str: string) => [...str].reverse().join('');

export function reverse4(str: string): string {
  const reverse = [];
  for (let i = str.length; i > 0; i--) {
    reverse.push(str[i - 1]);
  }
  return reverse.join('');
}
