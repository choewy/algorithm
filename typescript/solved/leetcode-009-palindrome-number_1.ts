/**
 * @runtime 145 ms
 * @memory  51.97 mb
 */
const isPalindrome = (x: number): boolean => {
  const s = x.toString();

  if (s.length === 1) {
    return true;
  }

  if (s.startsWith("-")) {
    return false;
  }

  let l = 0;
  let r = s.length - 1;

  while (true) {
    if (l === r || l > r) {
      return true;
    }

    if (s[l] !== s[r]) {
      return false;
    }

    l += 1;
    r -= 1;
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
