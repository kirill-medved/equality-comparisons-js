const arr = [
  47,
  46,
  48,
  31,
  63,
  47,
  36,
  48,
  36,
  49,
  50,
  31,
  50,
  59,
  63,
  38,
  35,
  31,
  50,
  59,
  63,
  45,
  36,
  46,
  38,
  40,
  35,
  31,
  45,
  45,
  58,
  53,
  63,
  47,
  46,
  35,
  31,
  48,
  42,
  46,
  33,
  63,
  46,
  50,
  63,
  38,
  40,
  39,
  45,
  40,
  63,
  31,
  63,
  49,
  31,
  44,
  46,
  44,
  51,
  63,
  35,
  36,
  43,
  31,
  50,
  59,
  63,
  38,
  40,
  39,
  45,
  59,
];

const map = arr.reduce((acc, cur) => {
  if (!acc.has(cur)) {
    return acc.set(cur, 1);
  }
  return acc.set(cur, acc.get(cur) + 1);
}, new Map());

const sortedEntries = Object.entries(Object.fromEntries(map)).sort((a, b) =>
  a[1] > b[1] ? -1 : 1,
);

console.table(sortedEntries);
