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
    <div className="bg-[#0b2e59] text-white">
      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
        <header className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo-rutger.svg"
              className="h-10 md:h-14 w-auto"
              alt="logo"
            />
            <span className="text-lg md:text-2xl font-bold">
              Rutger's Premium Car Cleaning
            </span>
          </div>

          <a href="https://wa.me/32498350160">
            <button className="bg-[#5c9ea6] px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-bold">
              WhatsApp
            </button>
          </a>
        </header>

        {/* HERO */}
        <section className="text-center py-20 md:py-32 px-4">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Premium Car Detailing
          </h1>

          <p className="text-lg md:text-2xl mt-4 opacity-90">
            Binnen- en buiten schoonmaak op topniveau
          </p>

          <button className="mt-8 md:mt-10 bg-[#5c9ea6] px-6 md:px-10 py-3 md:py-5 rounded-full text-lg md:text-xl font-bold">
            Boek Nu
          </button>
        </section>

        {/* VOOR NA */}
        <section className="py-16 md:py-24 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Voor & Na Resultaten
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <img
              src={slides[slide].before}
              className="w-full h-[200px] md:h-[350px] object-cover rounded-2xl"
              alt="Before"
            />

            <img
              src={slides[slide].after}
              className="w-full h-[200px] md:h-[350px] object-cover rounded-2xl"
              alt="After"
            />
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() =>
                setSlide((slide - 1 + slides.length) % slides.length)
              }
              className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
            >
              Vorige
            </button>

            <button
              onClick={() => setSlide((slide + 1) % slides.length)}
              className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
            >
              Volgende
            </button>
          </div>
        </section>

        {/* DIENSTEN */}
        <section className="bg-white text-black py-16 md:py-24 px-4">
          <h2 className="text-3xl md:text-5xl text-center font-bold mb-12">
            Onze Diensten
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {["Interieur", "Polieren", "Exterieur", "Coating"].map(
              (item, i) => (
                <div
                  key={i}
                  className="p-8 md:p-12 bg-white rounded-2xl shadow-lg"
                >
                  <h3 className="text-2xl md:text-3xl font-bold">{item}</h3>
                </div>
              )
            )}
          </div>
        </section>

        {/* FORM */}
        <section className="py-16 md:py-24 px-4 bg-[#c9c1ad] text-black">
          <h2 className="text-3xl md:text-5xl text-center font-bold mb-10">
            Vraag een offerte aan
          </h2>

          <form
            action="https://formsubmit.co/rutgerscarcleaning@outlook.be"
            method="POST"
            className="max-w-xl mx-auto grid gap-4"
          >
            <input
              type="text"
              placeholder="Naam"
              required
              className="p-4 md:p-5 rounded text-base md:text-lg"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="p-4 md:p-5 rounded text-base md:text-lg"
            />

            <textarea
              placeholder="Wat wil je laten doen?"
              className="p-4 md:p-5 rounded text-base md:text-lg"
            />

            <button className="bg-[#0b2e59] text-white py-3 md:py-4 rounded text-lg font-bold hover:bg-[#0a1f3a]">
              Verstuur aanvraag
            </button>
          </form>
        </section>
      </div>

      {/* FLOAT BUTTON */}
      <a
        href="https://wa.me/32498350160"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white px-5 py-3 rounded-full text-sm md:text-lg font-bold shadow-xl hover:bg-[#1da851]"
      >
        WhatsApp
      </a>
    </div>
  );
}