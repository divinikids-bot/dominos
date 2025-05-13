"use client";

import { useState } from "react";
import { initialDominos } from "@/app/types/dominos";
import { countDoubles, flipDominos, removeDuplicates, sortDominos, removeByTotal } from "@/app/utils/dominoUtils"
import DominoCard from "./components/dominosCard";

export default function Home() {
  const [dominos, setDominos] = useState<[number, number][]>(initialDominos);
  const [input, setInput] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dominoes</h1>

      <p><strong>Source:</strong> {JSON.stringify(dominos)}</p>
      <p><strong>Double Numbers:</strong> {countDoubles(dominos)}</p>

      <div className="flex gap-2 my-4 flex-wrap">
        {dominos.map(([a, b], i) => (
          <DominoCard key={i} top={a} bottom={b} />
        ))}
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        <button onClick={() => setDominos(sortDominos(dominos, "asc"))}>Sort (ASC)</button>
        <button onClick={() => setDominos(sortDominos(dominos, "desc"))}>Sort (DESC)</button>
        <button onClick={() => setDominos(flipDominos(dominos))}>Flip</button>
        <button onClick={() => setDominos(removeDuplicates(dominos))}>Remove Dup</button>
        <button onClick={() => setDominos(initialDominos)}>Reset</button>
      </div>

      <div className="flex gap-2 items-center">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Input Total Number" />
        <button onClick={() => setDominos(removeByTotal(dominos, parseInt(input)))}>Remove</button>
      </div>
    </div>
  );
}
