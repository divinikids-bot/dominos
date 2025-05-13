
'use client';

import React from 'react';

interface Props {
  onSortAsc: () => void;
  onSortDesc: () => void;
  onFlip: () => void;
  onRemoveDup: () => void;
  onReset: () => void;
  inputTotal: string;
  setInputTotal: (val: string) => void;
  onRemoveTotal: () => void;
}

export default function DominoControls({
  onSortAsc,
  onSortDesc,
  onFlip,
  onRemoveDup,
  onReset,
  inputTotal,
  setInputTotal,
  onRemoveTotal,
}: Props) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        <button onClick={onSortAsc} className="btn">Sort (ASC)</button>
        <button onClick={onSortDesc} className="btn">Sort (DESC)</button>
        <button onClick={onFlip} className="btn">Flip</button>
        <button onClick={onRemoveDup} className="btn">Remove Dup</button>
        <button onClick={onReset} className="btn">Reset</button>
      </div>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Input Number"
          className="border p-2 rounded"
          value={inputTotal}
          onChange={(e) => setInputTotal(e.target.value)}
        />
        <button onClick={onRemoveTotal} className="btn">Remove</button>
      </div>
    </div>
  );
}
