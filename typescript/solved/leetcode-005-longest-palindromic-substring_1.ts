const findSameCharIndexes = (s: string, i: number): number[] => {
  const current = s[i];
  const indexes = Array.from(s.slice(i + 1)).reduce<number[]>((results, v, index) => {
    if (v === current) {
      results.push(index + i + 1);
    }

    return results;
  }, []);

  return indexes;
};

export const longestPalindrome = (s: string): string => {
  if (s.length === 1) {
    return s;
  }

  let sub = s[0];

  for (let i = 0; i < s.length - 1; i++) {
    const indexes = findSameCharIndexes(s, i);

    for (const index of indexes) {
      let target = s.slice(i, index + 1);

      let correct = true;
      let start = 0;
      let end = target.length - 1;

      while (true) {
        if (start >= end) {
          break;
        }

        if (target[start] !== target[end]) {
          correct = false;
          break;
        }

        start += 1;
        end -= 1;
      }

      if (correct && sub.length < target.length) {
        sub = target;
      }
    }
  }

  return sub;
};

export const test = () => {
  console.log(longestPalindrome("babadb") === "bab");
  console.log(longestPalindrome("abad") === "aba");
  console.log(longestPalindrome("cbbd") === "bb");
  console.log(longestPalindrome("abccba") === "abccba");
  console.log(longestPalindrome("ac") === "a");
  console.log(longestPalindrome("aacabdkacaa") === "aca");
};
