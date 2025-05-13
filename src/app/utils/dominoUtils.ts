import { Domino } from "../types/dominos";

export function countDoubles(dominos: Domino[]) {
  return dominos.filter(([a, b]) => a === b).length;
}

export function sortDominos(dominos: Domino[], order: "asc" | "desc") {
  return [...dominos].sort((a, b) => {
    const totalA = a[0] + a[1];
    const totalB = b[0] + b[1];
    if (totalA === totalB) {
      return order === "asc" ? a[0] - b[0] : b[0] - a[0];
    }
    return order === "asc" ? totalA - totalB : totalB - totalA;
  });
}

export function flipDominos(dominos: Domino[]): [number, number][] {
  return dominos.map(([a, b]) => [b, a] as [number, number]);
}
export function removeDuplicates(dominos: Domino[]) {
  const seen = new Set<string>();
  return dominos.filter(([a, b]) => {
    const key1 = `${a}-${b}`;
    const key2 = `${b}-${a}`;
    if (seen.has(key1) || seen.has(key2)) return false;
    seen.add(key1);
    return true;
  });
}

export function removeByTotal(dominos: Domino[], total: number) {
  return dominos.filter(([a, b]) => a + b !== total);
}
