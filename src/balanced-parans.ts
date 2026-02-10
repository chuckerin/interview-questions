export function isBalanced(s: string): boolean {
  // x is a string. return whether its parentheses are balanced
  // that is, whether every opening ( has a closing )
  let leftCount = 0;
  let rightCount = 0;
  const cArray = s.split('');

  for (let i = 0; i < cArray.length; i++) {
    if (cArray[i] === '(') {
      leftCount++;
    } else if (cArray[i] === ')') {
      rightCount++;
    }

    if (rightCount > leftCount) {
      // console.log(
      //   'leftCount -> ' + leftCount + ', rightCount -> ' + rightCount
      // );
      return false;
    }
  }

  return leftCount === rightCount;
}

export function isBalanced2(s: string): boolean {
  // x is a string. return whether its parentheses are balanced
  // that is, whether every opening ( has a closing )
  let numOpenParens = 0;
  const splitString = s.split('');
  let balanced = true;
  splitString.forEach((char) => {
    if (char === '(') {
      numOpenParens++;
    }
    if (char === ')') {
      numOpenParens--;
    }
    if (numOpenParens < 0) {
      balanced = false;
    }
  });

  return balanced && numOpenParens === 0;
}

export function isBalanced3(s: string): boolean {
  // x is a string. return whether its parentheses are balanced
  // that is, whether every opening ( has a closing )
  let leftCount = 0;
  let rightCount = 0;
  const cArray = [...s];

  for (let i = 0; i < cArray.length; i++) {
    if (cArray[i] === '(') {
      leftCount++;
    } else if (cArray[i] === ')') {
      rightCount++;
    }

    if (rightCount > leftCount) {
      return false;
    }
  }

  return leftCount === rightCount;
}
