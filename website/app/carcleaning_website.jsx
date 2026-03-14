"use client";

import { useState } from "react";

export default function CarCleaningWebsite() {
  const [slider, setSlider] = useState(50);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/32498350160"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-xl z-50 font-semibold"
      >
        WhatsApp
      </a>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-bold mb-6">Premium Car Cleaning</h1>
        <p className="text-gray-400 max-w-2xl mb-10">
          Professionele auto detailing in Keerbergen. Interieur reiniging • Exterieur detailing • Lakcorrectie
        </p>
        <div className="flex gap-4">
          <a
            href="#booking"
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold"
          >
            Boek Afspraak
          </a>
          <a
            href="https://wa.me/32498350160"
            className="bg-green-500 px-8 py-4 rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-950 px-6">
        <h2 className="text-4xl text-center font-bold mb-16">Onze Diensten</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Interieur Reiniging</h3>
            <p className="text-gray-400 mb-4">Dieptereiniging van zetels en tapijten.</p>
            <p className="text-2xl font-bold">€75</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Binnen & Buiten</h3>
            <p className="text-gray-400 mb-4">Complete auto detailing.</p>
            <p className="text-2xl font-bold">€150</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Polieren</h3>
            <p className="text-gray-400 mb-4">Lakcorrectie en diepe glans.</p>
            <p className="text-2xl font-bold">Prijs op aanvraag</p>
          </div>
        </div>
      </section>

      {/* BEFORE AFTER SLIDER */}
      <section className="py-24 bg-black text-center">
        <h2 className="text-4xl font-bold mb-12">Voor & Na Resultaten</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <img src="/after.jpg" className="absolute w-full h-full object-cover" alt="Na" />
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: slider + "%" }}
            >
              <img src="/before.jpg" className="w-full h-full object-cover" alt="Voor" />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(e) => setSlider(e.target.value)}
            className="w-full mt-6"
          />
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6">
        <h2 className="text-4xl text-center font-bold mb-12">Afspraak Boeken</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input placeholder="Naam" className="w-full p-4 bg-gray-900 rounded" />
          <input placeholder="Email" className="w-full p-4 bg-gray-900 rounded" />
          <input placeholder="Telefoon" className="w-full p-4 bg-gray-900 rounded" />
          <select className="w-full p-4 bg-gray-900 rounded">
            <option>Dienst kiezen</option>
            <option>Interieur reiniging</option>
            <option>Binnen & Buiten</option>
            <option>Polieren</option>
          </select>
          <button className="w-full bg-white text-black py-4 rounded-lg">
            Afspraak aanvragen
          </button>
        </form>
      </section>

      {/* CADEAUBONNEN */}
      <section className="py-24 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold mb-16">Cadeaubonnen</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl mb-4">€50 Cadeaubon</h3>
            <button className="bg-white text-black px-6 py-3 rounded">Koop</button>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl mb-4">€100 Cadeaubon</h3>
            <button className="bg-white text-black px-6 py-3 rounded">Koop</button>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl mb-4">€150 Cadeaubon</h3>
            <button className="bg-white text-black px-6 py-3 rounded">Koop</button>
          </div>
        </div>
      </section>

      {/* WEBSHOP */}
      <section className="py-24 px-6">
        <h2 className="text-4xl text-center font-bold mb-16">Detailing Webshop</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 text-center rounded-xl">
            <h3>Microvezel Doek</h3>
            <p className="text-xl font-bold mt-2">€9.99</p>
            <button className="mt-4 bg-white text-black px-6 py-3 rounded">Koop</button>
          </div>
          <div className="bg-gray-900 p-6 text-center rounded-xl">
            <h3>Velgenreiniger</h3>
            <p className="text-xl font-bold mt-2">€14.99</p>
            <button className="mt-4 bg-white text-black px-6 py-3 rounded">Koop</button>
          </div>
          <div className="bg-gray-900 p-6 text-center rounded-xl">
            <h3>Auto Shampoo</h3>
            <p className="text-xl font-bold mt-2">€19.99</p>
            <button className="mt-4 bg-white text-black px-6 py-3 rounded">Koop</button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold mb-12">Google Reviews</h2>
        <p className="text-gray-400">★★★★★ Beste car cleaning in Keerbergen</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-gray-800">
        © Rutger&apos;s Car Cleaning
      </footer>
    </div>
  );
}