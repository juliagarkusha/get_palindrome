const getReverseNumber = (number) => BigInt(String(number).split('').reverse().join(''));

const isPalindrome = (number) => number === getReverseNumber(number)

const findPalindromeRecursive = (number, steps = 0) => {
    if(steps > 500) {
        return { result: null, steps: -1 }
    }

    const sum = number + getReverseNumber(number);

    if(isPalindrome(sum)) {
        return { result: sum, steps }
    }

   return findPalindromeRecursive(sum, steps + 1);
}

const startingNumber = BigInt(2373833298382373);
const { result, steps } = findPalindromeRecursive(startingNumber);
const strStartingNumber = startingNumber.toLocaleString('fullwide', { useGrouping: false });
const strResult = result?.toLocaleString('fullwide', { useGrouping: false });

console.log(`Starting from ${strStartingNumber}, it took ${steps} steps to find the palindrome: ${strResult}`);
