"use client";

export default function Page() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen p-10 grid md:grid-cols-3 gap-10">

      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <h3 className="text-xl">Premium handwas</h3>
        <p className="text-4xl font-bold">€95</p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-xl border-2 border-black">
        <h3 className="text-xl">Premium handwas + interieur</h3>
        <p className="text-4xl font-bold">€175</p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <h3 className="text-xl">Decontaminatie</h3>
        <p className="text-4xl font-bold">€125</p>
      </div>

    </div>
  );
}