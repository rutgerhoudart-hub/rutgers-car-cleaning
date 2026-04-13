"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const slides = [
    { before: "/before1.jpg", after: "/after1.jpg" },
    { before: "/before2.jpg", after: "/after2.jpg" },
    { before: "/before3.jpg", after: "/after3.jpg" },
    { before: "/before4.jpg", after: "/after4.jpg" },
  ];

  const [slide, setSlide] = useState(0);

  return (
    <div className="min-h-screen bg-[#0b2e59] text-white text-xl">

      {/* HEADER */}
      <header className="flex justify-between items-center px-4 md:px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-[#0b2e59]/95">
        <div className="flex items-center gap-4">
          <img
            src="/logo-rutger.svg"
            className="h-12 md:h-16 w-auto object-contain"
            alt="Rutger's Premium Car Cleaning logo"
          />

          <span className="font-bold text-2xl md:text-3xl">
            Rutger's Premium Car Cleaning
          </span>
        </div>

        <a href="https://wa.me/32498350160">
          <button className="bg-[#5c9ea6] px-6 py-4 rounded-full text-xl font-bold hover:scale-105 transition">
            WhatsApp
          </button>
        </a>
      </header>

      {/* HERO */}
      <section className="bg-[#0b2e59] py-32 text-center">
       <h1 className="text-7xl font-bold">
         Premium Car Detailing
      </h1>

      <p className="text-3xl mt-4">
        Binnen- en buiten schoonmaak op topniveau
      </p>

      <a href="https://wa.me/32498350160">
        <button className="mt-10 bg-[#5c9ea6] px-10 py-5 rounded-full text-2xl font-bold hover:scale-105 transition">
          Boek Nu
        </button>
      </a>
    </section>

      {/* VOOR & NA */}
      <section className="text-center py-24 px-6">
        <h2 className="text-6xl font-bold mb-12">
          Voor & Na Resultaten
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <img
            src={slides[slide].before}
            className="w-full h-[350px] object-cover rounded-3xl shadow-2xl"
            alt="Before"
          />

          <img
            src={slides[slide].after}
            className="w-full h-[350px] object-cover rounded-3xl shadow-2xl"
            alt="After"
          />
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={() =>
              setSlide((slide - 1 + slides.length) % slides.length)
            }
            className="bg-gray-700 px-8 py-4 rounded-full text-xl hover:bg-gray-600 transition"
          >
            Vorige
          </button>

          <button
            onClick={() =>
              setSlide((slide + 1) % slides.length)
            }
            className="bg-gray-700 px-8 py-4 rounded-full text-xl hover:bg-gray-600 transition"
          >
            Volgende
          </button>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="grid md:grid-cols-2 gap-10 p-10 max-w-6xl mx-auto">
        <Link href="/interieur">
          <div className="bg-white text-black p-12 rounded-3xl shadow-xl hover:scale-[1.02] transition cursor-pointer">
            <h2 className="text-4xl font-bold">Interieur</h2>
            <p className="mt-4 text-2xl opacity-80">
              Dieptereiniging & bescherming
            </p>
          </div>
        </Link>

        <Link href="/polieren">
          <div className="bg-white text-black p-12 rounded-3xl shadow-xl hover:scale-[1.02] transition cursor-pointer">
            <h2 className="text-4xl font-bold">Polieren</h2>
            <p className="mt-4 text-2xl opacity-80">
              Light & heavy polish
            </p>
          </div>
        </Link>

        <Link href="/exterieur">
          <div className="bg-white text-black p-12 rounded-3xl shadow-xl hover:scale-[1.02] transition cursor-pointer">
            <h2 className="text-4xl font-bold">Exterieur</h2>
            <p className="mt-4 text-2xl opacity-80">
              Premium handwas
            </p>
          </div>
        </Link>

        <Link href="/coating">
          <div className="bg-white text-black p-12 rounded-3xl shadow-xl border-2 border-[#5c9ea6] hover:scale-[1.02] transition cursor-pointer">
            <p className="text-lg mb-3 font-bold text-[#5c9ea6]">
              MEEST GEKOZEN
            </p>

            <h2 className="text-4xl font-bold">Coating</h2>

            <p className="mt-4 text-2xl opacity-80">
              Nanolex bescherming
            </p>
          </div>
        </Link>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-6xl font-bold mb-10">
          Wat klanten zeggen
        </h2>

        <div className="max-w-4xl mx-auto bg-white text-black p-12 rounded-3xl shadow-xl">
          <p className="text-5xl mb-6">⭐⭐⭐⭐⭐</p>

          <p className="text-2xl">
            Mijn wagen zag eruit als nieuw. Top service en super professioneel.
          </p>
        </div>
      </section>

      {/* WEBSHOP */}
      <section className="p-10">
        <h2 className="text-5xl mb-10 text-center font-bold">
          Webshop
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white text-black p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold">Auto Shampoo</h3>
            <p className="text-2xl mt-3">€15</p>
          </div>

          <div className="bg-white text-black p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold">Wax</h3>
            <p className="text-2xl mt-3">€25</p>
          </div>

          <div className="bg-white text-black p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold">Microvezel doek</h3>
            <p className="text-2xl mt-3">€10</p>
          </div>
        </div>
      </section>

      {/* FORMULIER */}
      <section className="p-10 bg-[#c9c1ad] text-black">
        <h2 className="text-5xl font-bold mb-10 text-center">
          Vraag een offerte aan
        </h2>

        <form
          action="https://formsubmit.co/rutgerscarcleaning@outlook.be"
          method="POST"
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input
            type="text"
            name="naam"
            placeholder="Naam"
            required
            className="p-6 rounded-xl text-2xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-6 rounded-xl text-2xl"
          />

          <textarea
            name="bericht"
            placeholder="Wat wil je laten doen?"
            className="p-6 rounded-xl text-2xl"
          />

          <button
            type="submit"
            className="bg-[#0b2e59] text-white py-5 rounded-xl text-2xl font-bold hover:bg-[#092447] transition"
          >
            Verstuur aanvraag
          </button>
        </form>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/32498350160"
        className="fixed bottom-6 right-6 bg-[#25D366] px-8 py-5 rounded-full shadow-2xl z-50 text-xl font-bold"
      >
        WhatsApp
      </a>
    </div>
  );
}