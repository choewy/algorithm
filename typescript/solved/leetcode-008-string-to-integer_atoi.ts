/**
 * @runtime 57 ms
 * @memory 45.20 mb
 */

const MIN = -(2 ** 31);
const MAX = 2 ** 31 - 1;

export const myAtoi = (s: string): number => {
  const arr = s.trim().split("");

  let val = "";

  while (true) {
    const v = arr.shift();
    const has = ["-", "+", "."].includes(v);

    if ((val.length === 0 && has) || Number.isInteger(parseInt(v))) {
      val += v;
      continue;
    }

    break;
  }

  const result = Number(val);

  if (Number.isNaN(result)) {
    return 0;
  }

  if (result < 0) {
    return Math.max(result, MIN);
  } else {
    return Math.min(result, MAX);
  }
};

export const test = () => {
  console.log(myAtoi("42") === 42);
  console.log(myAtoi("   -42") === -42);
  console.log(myAtoi("4193 with words") === 4193);
  console.log(myAtoi("-91283472332") === -2147483648);
  console.log(myAtoi("+-12") === 0);
  console.log(myAtoi("-5-") === -5);
};
