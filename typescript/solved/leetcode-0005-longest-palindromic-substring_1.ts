/**
 * @runtime 3406 ms
 * @memory 48 MB
 */
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
  console.log("tc1", ["bab", "aba"].includes(longestPalindrome("babadb")));
  console.log("tc2", ["aba"].includes(longestPalindrome("abad")));
  console.log("tc3", ["bb"].includes(longestPalindrome("cbbd")));
  console.log("tc4", ["abccba"].includes(longestPalindrome("abccba")));
  console.log("tc5", ["a"].includes(longestPalindrome("ac")));
  console.log("tc6", ["aca"].includes(longestPalindrome("aacabdkacaa")));
  console.log("tc7", ["ccc"].includes(longestPalindrome("ccc")));
  console.log("tc8", ["aaaaa"].includes(longestPalindrome("caaaaa")));
  console.log(
    "tc9",
    [
      "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa",
    ].includes(
      longestPalindrome(
        "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"
      )
    )
  );
};
