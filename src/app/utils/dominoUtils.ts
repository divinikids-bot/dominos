// app/utils/dominoUtils.ts

export const countDoubles = (dominoes: number[][]): number => {
  return dominoes.filter(([a, b]) => a === b).length;
};

export const sortDominoes = (dominoes: number[][], order: 'asc' | 'desc' = 'asc') => {
  return [...dominoes].sort(([a1, b1], [a2, b2]) => {
    const sum1 = a1 + b1;
    const sum2 = a2 + b2;
    if (sum1 !== sum2) return order === 'asc' ? sum1 - sum2 : sum2 - sum1;
    const minor1 = order === 'asc' ? Math.min(a1, b1) : Math.max(a1, b1);
    const minor2 = order === 'asc' ? Math.min(a2, b2) : Math.max(a2, b2);
    return order === 'asc' ? minor1 - minor2 : minor2 - minor1;
  });
};

export const flipDominoes = (dominoes: number[][]) => {
  return dominoes.map(([a, b]) => [b, a]);
};

export const removeDuplicates = (dominoes: number[][]) => {
  const seen = new Set();
  return dominoes.filter(([a, b]) => {
    const key = [a, b].sort().join(',');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export const removeByTotal = (dominoes: number[][], total: number) => {
  return dominoes.filter(([a, b]) => a + b !== total);
};
