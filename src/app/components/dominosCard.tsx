import React from 'react';

type Props = {
  a: number;
  b: number;
};

export default function DominoCard({ a, b }: Props) {
  return (
    <div className="w-10 border text-center p-1 bg-white shadow rounded">
      <div>{a}</div>
      <hr className="border-t my-1" />
      <div>{b}</div>
    </div>
  );
}