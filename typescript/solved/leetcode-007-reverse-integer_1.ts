/**
 * @runtime 70 ms
 * @memory 45.17 mb
 */
const MIN = 2 ** 31;
const MAX = 2 ** 31 - 1;

export const reverse = (x: number): number => {
  const m = x < 0;
  const t = x.toString().split("");
  const s = m ? t.slice(1) : t;

  let val = "";

  while (true) {
    if (s.length === 0) {
      break;
    }

    val += s.pop();
  }

  const result = Number(val);

  if (m && result > MIN) {
    return 0;
  }

  if (!m && result > MAX) {
    return 0;
  }

  return result * (m ? -1 : 1);
};

export const test = () => {
  console.log(reverse(123) === 321);
  console.log(reverse(-123) === -321);
  console.log(reverse(120) === 21);
  console.log(reverse(1534236469) === 0);
  console.log(reverse(-2147483648) === 0);
};
