let savingsBalance = 0;
let checkingBalance = 0;
let outputData = '';

const transactionTypes = {
  NEW: 'new',
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  TRANSFER: 'transfer',
  EXIT: 'exit',
};

const accountTypes = {
  CHECKING: 'checking',
  SAVINGS: 'savings',
};

export function writeOutput(inputData: string) {
  // Start writing code here to consume input, and return result.
  // console.log(inputData);

  // create an array by splitting the lines of the input
  const inputDataLinesArray = inputData.match(/[^\r\n]+/g);
  // console.log(inputDataLinesArray);
  // console.log(inputDataLinesArray[0]);
  if (inputDataLinesArray === null) {
    return;
  }

  // reset outputData
  outputData = '';

  for (let i = 0; i < inputDataLinesArray.length; i++) {
    // console.log(inputData[i]);

    // parse through the line to create a transaction object
    const transaction = inputDataLinesArray[i].split(' ');

    // create a case statement to handle all of the transactions
    // the '+' symbol is used to quickly convert a string to a number
    switch (transaction[0]) {
      case transactionTypes.NEW:
        createNewAccount(+transaction[1], +transaction[2]);
        break;
      case transactionTypes.DEPOSIT:
        deposit(+transaction[1], transaction[2]);
        break;
      case transactionTypes.WITHDRAW:
        withdraw(+transaction[1], transaction[2]);
        break;
      case transactionTypes.TRANSFER:
        transfer(+transaction[1], transaction[2]);
        break;
      case transactionTypes.EXIT:
        break;
    }
  }

  return outputData;
}

// create a new account with a checking and savings balance
function createNewAccount(checkingAmt: number, savingsAmt: number) {
  checkingBalance = checkingAmt;
  savingsBalance = savingsAmt;

  outputData += `${checkingBalance} ${savingsBalance}\n`;

  // console.log(`${checkingBalance} ${savingsBalance}`);
}

// deposit funds into account based on account types
function deposit(amount: number, account: string) {
  if (account === accountTypes.CHECKING) {
    checkingBalance += amount;
  } else if (account === accountTypes.SAVINGS) {
    savingsBalance += amount;
  }

  outputData += `${checkingBalance} ${savingsBalance}\n`;
  // console.log(`${checkingBalance} ${savingsBalance}`)
}

// withdraw based on account type, checking has some serious safegaurds
function withdraw(amount: number, account: string) {
  if (account === accountTypes.CHECKING) {
    // withdraw limit for checking is $500 and overdraft protection is in place
    if (amount <= 500 && amount <= checkingBalance + savingsBalance) {
      let overdraftAmount = 0;
      // check to see if the amount is greater than the checking balance and use overdraft protection if it is
      if (amount > checkingBalance) {
        overdraftAmount = amount - checkingBalance;
        checkingBalance = 0;
        savingsBalance -= overdraftAmount;
        // normal savings withdraw
      } else {
        checkingBalance -= amount;
      }
    }
  } else if (account === accountTypes.SAVINGS) {
    // no withdraw limit on savings except that it can't exceed the saving balance
    if (amount < savingsBalance) {
      savingsBalance -= amount;
    }
  }

  outputData += `${checkingBalance} ${savingsBalance}\n`;
  // console.log(`${checkingBalance} ${savingsBalance}`)
}

function transfer(amount: number, account: string) {
  // can only transfer if the account has enough of a balance
  if (account === accountTypes.CHECKING) {
    if (amount < checkingBalance) {
      checkingBalance -= amount;
      savingsBalance += amount;
    }
  } else if (account === accountTypes.SAVINGS) {
    if (amount < savingsBalance) {
      savingsBalance -= amount;
      checkingBalance += amount;
    }
  }

  outputData += `${checkingBalance} ${savingsBalance}\n`;
  // console.log(`${checkingBalance} ${savingsBalance}`)
}
