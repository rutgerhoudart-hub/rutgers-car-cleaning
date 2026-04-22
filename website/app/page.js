"use client";

import Link from "next/link";
import { useState } from "react";


export default function Home() {

  const slides = [
    { before: "/before1.jpg", after: "/after1.jpg" },
    { before: "/before2.jpg", after: "/after2.jpg" },
    { before: "/before3.jpg", after: "/after3.jpg" },
  ];

  const [slide, setSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081f3a] to-[#0b2e59] text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-5 sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-4">
          <img src="/logo-rutger.svg" className="h-12 md:h-14" />
          <span className="font-bold text-xl md:text-2xl tracking-wide">
            Rutger's Premium Car Cleaning
          </span>
        </div>

        <a href="https://wa.me/32498350160">
          <button className="bg-[#5c9ea6] px-6 py-3 rounded-full font-bold text-lg hover:scale-105 transition duration-300 shadow-lg">
            WhatsApp
          </button>
        </a>
      </header>

      {/* HERO */}
      <section className="relative text-center py-32 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Car Detailing
          </h1>

          <p className="text-2xl opacity-90 max-w-2xl mx-auto">
            Binnen- en buiten schoonmaak op topniveau
          </p>

          <a href="https://wa.me/32498350160">
            <button className="mt-10 bg-[#5c9ea6] px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition duration-300 shadow-xl">
              Boek Nu
            </button>
          </a>
        </div>
      </section>

      {/* VOOR & NA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Voor & Na Resultaten
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          <img src={slides[slide].before} className="rounded-2xl h-[260px] object-cover shadow-2xl" />
          <img src={slides[slide].after} className="rounded-2xl h-[260px] object-cover shadow-2xl" />
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}
            className="bg-gray-700 px-6 py-3 rounded-full hover:bg-gray-600 transition"
          >
            Vorige
          </button>

          <button
            onClick={() => setSlide((slide + 1) % slides.length)}
            className="bg-gray-700 px-6 py-3 rounded-full hover:bg-gray-600 transition"
          >
            Volgende
          </button>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="py-24 bg-[#f8f8f8] text-black">
        <h2 className="text-5xl text-center font-bold mb-16">
          Onze Diensten
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">

          {[
            { title: "Interieur", link: "/interieur" },
            { title: "Polieren", link: "/polieren" },
            { title: "Exterieur", link: "/exterieur" },
            { title: "Coating", link: "/coating", highlight: true }
          ].map((item, i) => (
            <Link key={i} href={item.link}>
              <div className={`p-12 rounded-3xl shadow-xl cursor-pointer transition hover:scale-[1.03] ${
                item.highlight ? "border-2 border-[#5c9ea6]" : "bg-white"
              }`}>
                {item.highlight && (
                  <p className="text-sm text-[#5c9ea6] font-bold mb-2">
                    MEEST GEKOZEN
                  </p>
                )}
                <h3 className="text-3xl font-bold">{item.title}</h3>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Waarom kiezen voor ons?
        </h2>

        <p className="max-w-2xl mx-auto text-lg opacity-80 mb-8">
          Wij leveren hoogwaardige detailing met oog voor detail. 
          Jouw wagen krijgt de behandeling die hij verdient.
        </p>

        <p className="text-3xl">⭐⭐⭐⭐⭐</p>
      </section>

      {/* FORM */}
      <section className="py-24 bg-[#c9c1ad] text-black">
        <h2 className="text-5xl text-center font-bold mb-12">
          Vraag een offerte aan
        </h2>

        <form
          action="https://formsubmit.co/rutgerscarcleaning@outlook.be"
          method="POST"
          className="max-w-xl mx-auto grid gap-6"
        >
          <input type="text" placeholder="Naam" required className="p-5 rounded-xl text-lg" />
          <input type="email" placeholder="Email" required className="p-5 rounded-xl text-lg" />
          <textarea placeholder="Wat wil je laten doen?" className="p-5 rounded-xl text-lg" />

          <button className="bg-[#0b2e59] text-white py-4 rounded-xl text-lg font-bold hover:bg-[#092447] transition">
            Verstuur aanvraag
          </button>
        </form>
      </section>

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/32498350160"
        className="fixed bottom-6 right-6 bg-[#25D366] px-6 py-4 rounded-full shadow-2xl text-lg font-bold hover:scale-110 transition"
      >
        WhatsApp
      </a>

    </div>
  );
}