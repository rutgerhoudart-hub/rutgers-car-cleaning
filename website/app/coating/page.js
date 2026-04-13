"use client";

export default function Page() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen p-10 grid md:grid-cols-3 gap-10">

      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h2>New Car Coating</h2>
        <p className="text-5xl font-bold">€995</p>

        <ul className="text-sm mt-4 space-y-2">
          <li>Grondige reiniging</li>
          <li>Decontaminatie</li>
          <li>Inspectie lak</li>
          <li>Polieren</li>
          <li>2 lagen Nanolex</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h2>Coating pakket</h2>
        <p className="text-5xl font-bold">€1395</p>

        <ul className="text-sm mt-4 space-y-2">
          <li>Meerstaps polieren</li>
          <li>2 lagen Nanolex</li>
          <li>Extreme glans</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h2>Matte coating</h2>
        <p className="text-5xl font-bold">€995</p>

        <ul className="text-sm mt-4 space-y-2">
          <li>Grondige reiniging</li>
          <li>Decontaminatie</li>
          <li>2 lagen Nanolex</li>
        </ul>
      </div>

    </div>
  );
}