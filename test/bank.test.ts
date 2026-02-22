import { describe, test, expect } from 'vitest';
import { writeOutput } from '../src/bank';

describe('Test Bank Transactions', () => {
  const exit = '\nexit';
  const validNewAccountTransactions = 'new 0 100';
  const validNewAccountTransactionsResults = '0 100\n';

  test('Valid New Account Transaction', () => {
    return expect(writeOutput(validNewAccountTransactions + exit)).toBe(
      validNewAccountTransactionsResults,
    );
  });

  const validCheckingDepositTransactions =
    validNewAccountTransactions + '\ndeposit 100 checking';
  const validCheckingDepositTransactionsResults =
    validNewAccountTransactionsResults + '100 100\n';

  test('Valid Checking Deposit Transaction', () => {
    return expect(writeOutput(validCheckingDepositTransactions + exit)).toBe(
      validCheckingDepositTransactionsResults,
    );
  });

  const validSavingsDepositTransactions =
    validCheckingDepositTransactions + '\ndeposit 100 savings';
  const validSavingsDepositTransactionsResults =
    validCheckingDepositTransactionsResults + '100 200\n';

  test('Valid Savings Deposit Transaction', () => {
    return expect(writeOutput(validSavingsDepositTransactions + exit)).toBe(
      validSavingsDepositTransactionsResults,
    );
  });

  const validCheckingDepositTransactions2 =
    validSavingsDepositTransactions + '\ndeposit 500 checking';
  const validCheckingDepositTransactionsResults2 =
    validSavingsDepositTransactionsResults + '600 200\n';

  test('Valid Checking Deposit Transaction (another one)', () => {
    return expect(writeOutput(validCheckingDepositTransactions2 + exit)).toBe(
      validCheckingDepositTransactionsResults2,
    );
  });

  const invalidCheckingWithdrawTransactions =
    validCheckingDepositTransactions2 + '\nwithdraw 501 checking';
  const invalidCheckingWithdrawTransactionsResults3 =
    validCheckingDepositTransactionsResults2 + '600 200\n';

  test('Invalid Checking Withdraw Transaction (over $500)', () => {
    const output = writeOutput(invalidCheckingWithdrawTransactions + exit);
    // console.log(output);
    // console.log(invalidCheckingWithdrawTransactionsResults3);
    return expect(output).toBe(invalidCheckingWithdrawTransactionsResults3);
  });

  const invalidSavingsWithdrawTransactions =
    invalidCheckingWithdrawTransactions + '\nwithdraw 201 savings';
  const invalidSavingsWithdrawTransactionsResults =
    invalidCheckingWithdrawTransactionsResults3 + '600 200\n';

  test('Invalid Savings Withdraw Transaction ($201 withdraw, $200 balance)', () => {
    const output = writeOutput(invalidSavingsWithdrawTransactions + exit);
    // console.log(output);
    // console.log(invalidSavingsWithdrawTransactionsResults);
    return expect(output).toBe(invalidSavingsWithdrawTransactionsResults);
  });

  const invalidSavingsTransferTransactions =
    invalidSavingsWithdrawTransactions + '\ntransfer 201 savings';
  const invalidSavingsTransferTransactionsResults =
    invalidSavingsWithdrawTransactionsResults + '600 200\n';

  test('Invalid Savings Transfer Transaction ($201 transfer, $200 balance)', () => {
    const output = writeOutput(invalidSavingsTransferTransactions + exit);
    // console.log(output);
    // console.log(invalidSavingsTransferTransactionsResults);
    return expect(output).toBe(invalidSavingsTransferTransactionsResults);
  });

  const invalidCheckingTransferTransactions =
    invalidSavingsTransferTransactions + '\ntransfer 650 checking';
  const invalidCheckingTransferTransactionsResults =
    invalidSavingsTransferTransactionsResults + '600 200\n';

  test('Invalid Checking Transfer Transaction ($650 transfer, $600 balance)', () => {
    const output = writeOutput(invalidCheckingTransferTransactions + exit);
    // console.log(output);
    // console.log(invalidCheckingTransferTransactionsResults);
    return expect(output).toBe(invalidCheckingTransferTransactionsResults);
  });

  const validCheckingTransferTransactions =
    invalidCheckingTransferTransactions + '\ntransfer 200 checking';
  const validCheckingTransferTransactionsResults =
    invalidCheckingTransferTransactionsResults + '400 400\n';

  test('Valid Checking Transfer Transaction ($200 transfer, $600 balance)', () => {
    const output = writeOutput(validCheckingTransferTransactions + exit);
    // console.log(output);
    // console.log(validCheckingTransferTransactionsResults);
    return expect(output).toBe(validCheckingTransferTransactionsResults);
  });

  const validSavingsTransferTransactions =
    validCheckingTransferTransactions + '\ntransfer 100 savings';
  const validSavingsTransferTransactionsResults =
    validCheckingTransferTransactionsResults + '500 300\n';

  test('Valid Savings Transfer Transaction ($100 transfer, $400 balance)', () => {
    const output = writeOutput(validSavingsTransferTransactions + exit);
    // console.log(output);
    // console.log(validSavingsTransferTransactionsResults);
    return expect(output).toBe(validSavingsTransferTransactionsResults);
  });

  const validSavingsWithdrawTransactions =
    validSavingsTransferTransactions + '\nwithdraw 100 savings';
  const validSavingsWithdrawTransactionsResults =
    validSavingsTransferTransactionsResults + '500 200\n';

  test('Valid Savings Withdraw Transaction ($100 withdraw, $300 balance)', () => {
    const output = writeOutput(validSavingsWithdrawTransactions + exit);
    // console.log(output);
    // console.log(validSavingsWithdrawTransactionsResults);
    return expect(output).toBe(validSavingsWithdrawTransactionsResults);
  });

  const validCheckingWithdrawTransactions =
    validSavingsWithdrawTransactions + '\nwithdraw 200 checking';
  const validCheckingWithdrawTransactionsResults =
    validSavingsWithdrawTransactionsResults + '300 200\n';

  test('Valid Checking Withdraw Transaction ($200 withdraw, $500 balance)', () => {
    const output = writeOutput(validCheckingWithdrawTransactions + exit);
    // console.log(output);
    // console.log(validCheckingWithdrawTransactionsResults);
    return expect(output).toBe(validCheckingWithdrawTransactionsResults);
  });

  const validOverdraftTransactions =
    validCheckingWithdrawTransactions + '\nwithdraw 500 checking';
  const validOverdraftTransactionsResults =
    validCheckingWithdrawTransactionsResults + '0 0\n';

  test('Valid Overdraft Transaction ($500 withdraw, $300/200 balance)', () => {
    const output = writeOutput(validOverdraftTransactions + exit);
    // console.log(output);
    // console.log(validOverdraftTransactionsResults);
    return expect(output).toBe(validOverdraftTransactionsResults);
  });
});

describe('Test Empty file', () => {
  test('Invalid empty file', () => {
    return expect(writeOutput('')).toBe(undefined);
  });
});
