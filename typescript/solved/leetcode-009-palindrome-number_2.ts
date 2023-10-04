/**
 * @runtime 144 ms
 * @memory  51.61 mb
 */
const isPalindrome = (x: number): boolean => {
  const s = x.toString().split("");

  if (s.length === 1) {
    return true;
  }

  while (true) {
    const l = s.shift();
    const r = s.pop();

    if (l === undefined || r === undefined) {
      return true;
    }

    if (l !== r) {
      return false;
    }
  }
};

export const test = () => {
  console.log(isPalindrome(121) === true);
  console.log(isPalindrome(-121) === false);
  console.log(isPalindrome(10) === false);
  console.log(isPalindrome(0) === true);
  console.log(isPalindrome(11) === true);
  console.log(isPalindrome(1001) === true);
};
