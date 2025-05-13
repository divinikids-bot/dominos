'use client';

import { useState } from 'react';
import DominoCard from './components/dominosCard';
import DominoControls from './components/dominosControl';
import {
  countDoubles,
  sortDominoes,
  flipDominoes,
  removeDuplicates,
  removeByTotal,
} from './utils/dominoUtils';

const defaultDominoes: number[][] = [
  [6, 1], [4, 3], [5, 1], [3, 4], [1, 1], [3, 4], [1, 2],
];

export default function Home() {
  const [dominoes, setDominoes] = useState<number[][]>(defaultDominoes);
  const [inputTotal, setInputTotal] = useState<string>('');

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <main className="p-8 max-w-3xl w-full text-black rounded shadow bg-white">
        <h1 className="text-4xl font-bold mb-2">Dominoes</h1>
        <p className="mb-6">Create a single page application to show domino cards like the example.</p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="text-xl font-bold mb-2">Source</h2>
          <pre>{JSON.stringify(dominoes)}</pre>
        </div>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="text-xl font-bold mb-2">Double Numbers</h2>
          <p>{countDoubles(dominoes)}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {dominoes.map(([a, b], index) => (
            <DominoCard key={index} a={a} b={b} />
          ))}
        </div>

        <DominoControls
          onSortAsc={() => setDominoes(sortDominoes(dominoes, 'asc'))}
          onSortDesc={() => setDominoes(sortDominoes(dominoes, 'desc'))}
          onFlip={() => setDominoes(flipDominoes(dominoes))}
          onRemoveDup={() => setDominoes(removeDuplicates(dominoes))}
          onReset={() => setDominoes(defaultDominoes)}
          inputTotal={inputTotal}
          setInputTotal={setInputTotal}
          onRemoveTotal={() => {
            const total = parseInt(inputTotal);
            if (!isNaN(total)) setDominoes(removeByTotal(dominoes, total));
          }}
        />
      </main>
    </div>
  );
}
