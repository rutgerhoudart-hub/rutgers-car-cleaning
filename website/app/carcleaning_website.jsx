import { useState } from "react";

"use client";

export default function RutgersCarCleaning() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Afspraak aanvraag verzonden");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="bg-white text-black font-bold px-3 py-1 rounded-lg">
            RCC
          </div>
          <span className="font-semibold">Rutger's Car Cleaning</span>
        </div>
      </nav>
      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Premium Car Cleaning in Keerbergen
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Professionele auto reiniging, detailing en polieren in Keerbergen.
        </p>
        <a
          href="https://wa.me/"
          className="bg-green-500 px-8 py-4 rounded-lg font-bold"
        >
          WhatsApp Ons
        </a>
      </section>
      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Diensten</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6">
            <h3 className="text-xl font-semibold mb-3">Interieur Reiniging</h3>
            <p className="text-gray-400 mb-3">
              Dieptereiniging van zetels en tapijten.
            </p>
            <p className="text-2xl font-bold">€75</p>
            <p className="text-sm text-gray-500">+ €15 grote auto's</p>
          </div>
          <div className="bg-gray-900 p-6">
            <h3 className="text-xl font-semibold mb-3">Binnen & Buiten</h3>
            <p className="text-gray-400 mb-3">Complete auto detailing.</p>
            <p className="text-2xl font-bold">€150</p>
            <p className="text-sm text-gray-500">+ €25 grote auto's</p>
          </div>
          <div className="bg-gray-900 p-6">
            <h3 className="text-xl font-semibold mb-3">Polieren</h3>
            <p className="text-gray-400 mb-3">
              Lakcorrectie en diepe glans.
            </p>
            <p className="text-2xl font-bold">Prijs op aanvraag</p>
          </div>
        </div>
      </section>
      {/* BOOKING */}
      <section className="py-20 px-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Afspraak Boeken
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 rounded bg-gray-900"
            placeholder="Naam"
            name="name"
            onChange={handleChange}
          />
          <input
            className="w-full p-3 rounded bg-gray-900"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            className="w-full p-3 rounded bg-gray-900"
            placeholder="Telefoon"
            name="phone"
            onChange={handleChange}
          />
          <select
            className="w-full p-3 rounded bg-gray-900"
            name="service"
            onChange={handleChange}
          >
            <option value="">Dienst kiezen</option>
            <option value="Interieur reiniging">Interieur reiniging</option>
            <option value="Binnen & Buiten">Binnen & Buiten</option>
            <option value="Polieren">Polieren</option>
          </select>
          <button className="w-full bg-white text-black py-3 rounded">
            Afspraak aanvragen
          </button>
        </form>
      </section>
      <footer className="text-center py-10 border-t border-gray-800">
        <p>© Rutger's Car Cleaning</p>
      </footer>
    </div>
  );
}