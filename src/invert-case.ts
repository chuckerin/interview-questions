// Invert the case of each letter in the string
export function invertCase(s: string): string {
  // x is a string. turn lowercase letters to uppercase and vice versa.
  return s
    .split('')
    .map((char) =>
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    )
    .join('');
}

// Using Bitwise XOR to invert case
export function invertCase2(s: string): string {
  // x is a string. turn lowercase letters to uppercase and vice versa.
  return s
    .split('')
    .map((char) =>
      String.fromCharCode(
        char.charCodeAt(0) === 32 ? char.charCodeAt(0) : char.charCodeAt(0) ^ 32
      )
    )
    .join('');
}

// ineffecient version using an array to hold inverted characters
export function invertCase3(x: string): string {
  // x is a string. turn lowercase letters to uppercase and vice versa.
  let charArray = x.split('');
  // console.log(charArray);
  let inversionArray = new Array(charArray.length);
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === charArray[i].toUpperCase()) {
      inversionArray[i] = charArray[i].toLowerCase();
    } else {
      inversionArray[i] = charArray[i].toUpperCase();
    }
  }
  // console.log(inversionArray.join(''));
  return inversionArray.join('');
}

// Regex version
export function invertCase4(s: string): string {
  return s.replace(/[a-zA-Z]/g, (char) =>
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
  );
}

// Dopest Bitwise XOR solution
export function invertCase5(s: string): string {
  return s.replace(/[a-zA-Z]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) ^ 32)
  );
}

export function invertCase6(s: string): string {
  let charArray = s.split('');
  let inversionArray = new Array(charArray.length);
  for (let c of charArray) {
    //test for a space character and don't bitwise XOR
    if (c.charCodeAt(0) === 32) {
      inversionArray.push(String.fromCharCode(c.charCodeAt(0)));
    } else {
      inversionArray.push(String.fromCharCode(c.charCodeAt(0) ^ 32));
    }
  }
  return inversionArray.join('');
}
