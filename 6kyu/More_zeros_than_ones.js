//More Zeros than Ones

const moreZeros = (s) => [
  ...new Set(
    s.split("").filter(
      (el) =>
        el
          .charCodeAt(0)
          .toString(2)
          .split("")
          .filter((el) => el == 0).length > 3
    )
  ),
];
