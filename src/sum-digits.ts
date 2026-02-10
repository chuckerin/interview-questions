export function sumDigits(num: number): number {
  //sum the digits of the number x
  return num
    .toString()
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((acc, digit) => acc + parseInt(digit), 0);
}

export function sumDigits2(num: number): number {
  //sum the digits of the number x
  let s = new String(num);
  let cArray = s.split('');

  // console.log('cArray -> ', cArray);
  let sum = 0;
  cArray.map((c) => {
    if (parseInt(c)) {
      sum += parseInt(c);
    }
  });

  // console.log(sum);
  return sum;
}

export function sumDigits3(x: number): number {
  //sum the digits of the number x
  let sum = 0;
  for (let i = 0; i < x.toString().length; i++) {
    // console.log(x.toString()[i]);
    if (/[0-9]/.test(x.toString()[i])) {
      // console.log(`x[i] ${x.toString()[i]}`);
      sum += +x.toString()[i];
    }
  }

  return sum;
}

export function sumDigits4(x: number): number {
  //sum the digits of the number x
  const arr = x.toString();
  return [...arr].reduce(
    (sum, digit) => (!isNaN(Number(digit)) ? sum + Number(digit) : sum),
    0
  );
}

export function sumDigits5(x: number): number {
  // get rid of the '-' and '.'
  const digitArray = x
    .toString()
    .replace(/[^0-9]/g, '')
    .split('');
  // convert from a string array to a number array
  const numArray = digitArray.map(Number);

  // console.log('numArray -> ', numArray);

  // use a reducer to sum the digits
  return numArray.reduce((sum, digit) => (sum += digit));
}

export function sumDigits6(x: number): number {
  // get rid of the '-' and '.'
  const digitArray = x
    .toString()
    .replace(/[^0-9]/g, '')
    .split('');
  // convert from a string array to a number array
  const numArray = digitArray.map(Number);

  // console.log('numArray -> ', numArray);

  // loop through the number array and sum em up
  let total = 0;
  numArray.forEach((digit) => {
    total += digit;
  });
  return total;
}
