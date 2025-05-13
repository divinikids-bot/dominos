export default function DominoCard({ top, bottom }: { top: number, bottom: number }) {
  return (
    <div className="border p-2 text-center w-10">
      <div>{top}</div>
      <div>-</div>
      <div>{bottom}</div>
    </div>
  );
}
