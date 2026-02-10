// determine the largest word in a string
export function longestWord(sentence: string): string {
  const array = sentence.match(/[a-z]+/gi);
  // console.log(array);
  array?.sort((a, b) => b.length - a.length);
  // console.log(array);
  return array ? array[0] : '';
}
