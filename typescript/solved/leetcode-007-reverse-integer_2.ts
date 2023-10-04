/**
 * @runtime 58 ms
 * @memory 44.85 mb
 */
const MIN = -(2 ** 31);
const MAX = 2 ** 31 - 1;

export const reverse = (x: number): number => {
  const s = x.toString().split("");

  let sign = 1;

  if (s[0] === "-") {
    s.shift();
    sign = -1;
  }

  const v = sign * Number(s.reverse().join(""));

  if (v < MIN || v > MAX) {
    return 0;
  }

  return v;
};

export const test = () => {
  console.log(reverse(123) === 321);
  console.log(reverse(-123) === -321);
  console.log(reverse(120) === 21);
  console.log(reverse(1534236469) === 0);
  console.log(reverse(-2147483648) === 0);
};
