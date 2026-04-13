"use client";

export default function Page() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-16">
        Polieren
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* LIGHT */}
        <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-[1.02] transition duration-300">
          <h2 className="text-3xl mb-2">Light polish</h2>
          <p className="text-6xl font-bold mb-4">€595</p>

          <ul className="text-sm space-y-2 opacity-80">
            <li>1-staps polieren</li>
            <li>Lichte krassen verwijderen</li>
            <li>Extra glans</li>
          </ul>

          <button className="mt-8 bg-black text-white w-full py-4 rounded-full">
            CONTACTEER ONS
          </button>
        </div>

        {/* HEAVY */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-black scale-105">
          
          <p className="text-center text-xs mb-2 font-bold">
            MEEST POPULAIR
          </p>

          <h2 className="text-3xl mb-2">Heavy polish</h2>
          <p className="text-6xl font-bold mb-4">€895</p>

          <ul className="text-sm space-y-2 opacity-80">
            <li>Meertraps polieren</li>
            <li>Diepe krassen verwijderen</li>
            <li>Showroom finish</li>
          </ul>

          <button className="bg-black text-white w-full py-4 rounded-full hover:bg-gray-800 transition duration-300">
            CONTACTEER ONS
          </button>
        </div>

      </div>
    </div>
  );
}