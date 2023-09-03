/**
 * @runtime 75 ms
 * @memory 46.82 mb
 */
export const convert = (s: string, numRows: number): string => {
  const arr = Array(numRows).fill("");

  let layer = 0;
  let direction: "top" | "down" | "up" | "bottom" = "top";

  for (let i = 0; i < s.length; i++) {
    arr[layer] += s[i];

    switch (direction) {
      case "top":
        if (numRows > 1) {
          layer += 1;
        }

        if (numRows - 1 === layer) {
          direction = "bottom";
        } else {
          direction = "down";
        }

        break;

      case "down":
        if (layer < numRows - 1) {
          layer += 1;
        }

        if (layer === numRows - 1) {
          direction = "bottom";
        }

        break;

      case "up":
        if (layer > 0) {
          layer -= 1;
        }

        if (layer === 0) {
          direction = "top";
        }

        break;

      case "bottom":
        if (numRows > 1) {
          layer -= 1;
        }

        if (layer === 0) {
          direction = "top";
        } else {
          direction = "up";
        }

        break;
    }
  }

  return arr.join("");
};

export const test = () => {
  console.log(["PAHNAPLSIIGYIR"].includes(convert("PAYPALISHIRING", 3)));
  console.log(["PINALSIGYAHRPI"].includes(convert("PAYPALISHIRING", 4)));
  console.log(["A"].includes(convert("A", 1)));
  console.log(["AB"].includes(convert("AB", 1)));
  console.log(["ACB"].includes(convert("ABC", 2)));
  console.log(["ABC"].includes(convert("ABC", 1)));
  console.log(["ACBD"].includes(convert("ABCD", 2)));
};
