"use client";

export default function Page() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-16">
        Interieur Reiniging
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* DIEPTEREINIGING */}
        <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-[1.02] transition duration-300">

          <h2 className="text-3xl mb-2">Dieptereiniging interieur</h2>

          <p className="text-6xl font-bold mb-4">
            €295 <span className="text-sm font-normal">incl. BTW</span>
          </p>

          <ul className="space-y-2 text-sm opacity-80">
            <li>Dashboard & deurpanelen reinigen</li>
            <li>Lederen zetels reinigen & voeden</li>
            <li>Stoffen zetels (extractie)</li>
            <li>Tapijt & matten reinigen</li>
            <li>Kunststof bescherming (UV)</li>
            <li>Ramen streeploos</li>
          </ul>

          <p className="mt-4 text-sm opacity-70">
            ⏱ Gemiddelde duur: 1 dag
          </p>

          <button className="mt-8 bg-black text-white w-full py-4 rounded-full hover:bg-gray-800 transition">
            MAAK EEN AFSPRAAK
          </button>
        </div>

        {/* DAKHEMEL */}
        <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-[1.02] transition duration-300">

          <h2 className="text-3xl mb-2">Reiniging dakhemel</h2>

          <p className="text-6xl font-bold mb-4">
            €75 <span className="text-sm font-normal">incl. BTW</span>
          </p>

          <ul className="space-y-2 text-sm opacity-80">
            <li>Vlekken verwijderen</li>
            <li>Specifieke producten</li>
            <li>Prijs afhankelijk van vervuiling</li>
          </ul>

          <button className="mt-8 bg-black text-white w-full py-4 rounded-full hover:bg-gray-800 transition">
            VRAAG OFFERTE
          </button>
        </div>

      </div>
    </div>
  );
}