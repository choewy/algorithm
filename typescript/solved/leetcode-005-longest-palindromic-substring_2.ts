/**
 * @runtime 168 ms
 * @memory 51.93 MB
 */
export const getSubstring = (s: string, i: number): string => {
  let sub = s[i];

  let l = i - 1;
  let r = i + 1;

  while (true) {
    if (l < 0 || r >= s.length) {
      break;
    }

    if (sub.charAt(0) !== sub.charAt(sub.length - 1)) {
      break;
    }

    let lc = s.charAt(l);
    let rc = s.charAt(r);

    if (lc === rc) {
      sub = lc + sub + rc;

      l -= 1;
      r += 1;

      continue;
    }

    if (sub.length < 3 || sub.length % 2) {
      if (rc === sub.charAt(sub.length - 1) && sub.replaceAll(rc, "") === "") {
        sub += rc;
        r += 1;

        continue;
      }

      if (lc === sub.charAt(0) && sub.replaceAll(lc, "") === "") {
        sub = lc + sub;
        l -= 1;

        continue;
      }
    }

    break;
  }

  return sub;
};

export const longestPalindrome = (s: string): string => {
  if (s.length === 1) {
    return s;
  }

  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s.replaceAll(s[i], "") === "") {
      result = s;
      break;
    }

    const sub = getSubstring(s, i);

    if (sub.length > result.length) {
      result = sub;
      if (result.length === s.length) {
        break;
      }
    }
  }

  return result;
};

export const test = () => {
  console.log(["bab", "aba"].includes(longestPalindrome("babadb")));
  console.log(["aba"].includes(longestPalindrome("abad")));
  console.log(["bb"].includes(longestPalindrome("cbbd")));
  console.log(["abccba"].includes(longestPalindrome("abccba")));
  console.log(["a"].includes(longestPalindrome("ac")));
  console.log(["aca"].includes(longestPalindrome("aacabdkacaa")));
  console.log(["ccc"].includes(longestPalindrome("ccc")));
  console.log(["aaaaa"].includes(longestPalindrome("caaaaa")));
  console.log(
    [
      "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa",
    ].includes(
      longestPalindrome(
        "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"
      )
    )
  );
};
