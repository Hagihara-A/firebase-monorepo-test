export const splitArray = <T>(arr: T[], n: number) => {
  const groupLen = Math.ceil(arr.length / n);
  return [...Array(groupLen)].map((_, i) => arr.slice(i * n, (i + 1) * n));
};
