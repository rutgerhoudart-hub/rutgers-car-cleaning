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
    <div className="min-h-screen bg-[#0b2e59] text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-5 bg-[#0b2e59] sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img
            src="/logo-rutger.svg"
            className="h-16 md:h-20 w-auto"
            alt="logo"
          />
          <span className="text-2xl md:text-3xl font-bold">
            Rutger's Premium Car Cleaning
          </span>
        </div>

        <a href="https://wa.me/32498350160">
          <button className="bg-[#5c9ea6] px-6 py-3 rounded-full text-xl font-bold hover:scale-105 transition">
            WhatsApp
          </button>
        </a>
      </header>

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <img
          src="/hero-car.jpg"
          className="absolute w-full h-full object-cover opacity-40"
          alt="hero"
        />

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold">
            Premium Car Detailing
          </h1>

          <p className="text-2xl mt-4">
            Binnen & buiten tot showroomstaat
          </p>

          <a href="https://wa.me/32498350160">
            <button className="mt-8 bg-[#5c9ea6] px-8 py-4 rounded-full text-2xl font-bold hover:scale-105 transition">
              Boek Nu
            </button>
          </a>
        </div>
      </section>

      {/* VOOR NA */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold mb-10">
          Voor & Na Resultaten
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <img
            src={slides[slide].before}
            className="w-full h-[300px] object-cover rounded-2xl"
          />

          <img
            src={slides[slide].after}
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() =>
              setSlide((slide - 1 + slides.length) % slides.length)
            }
            className="bg-gray-700 px-6 py-3 rounded-full"
          >
            Vorige
          </button>

          <button
            onClick={() =>
              setSlide((slide + 1) % slides.length)
            }
            className="bg-gray-700 px-6 py-3 rounded-full"
          >
            Volgende
          </button>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="grid md:grid-cols-2 gap-8 p-10 max-w-6xl mx-auto">
        {["interieur", "polieren", "exterieur", "coating"].map((item) => (
          <Link key={item} href={`/${item}`}>
            <div className="bg-white text-black p-10 rounded-3xl text-center hover:scale-105 transition cursor-pointer">
              <h2 className="text-3xl font-bold capitalize">{item}</h2>
            </div>
          </Link>
        ))}
      </section>

      {/* WEBSHOP */}
      <section className="p-10">
        <h2 className="text-4xl text-center mb-8 font-bold">Webshop</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Auto Shampoo", price: "€15" },
            { name: "Wax", price: "€25" },
            { name: "Microvezel doek", price: "€10" },
          ].map((p, i) => (
            <div key={i} className="bg-white text-black p-8 rounded-3xl text-center">
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="text-xl mt-2">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10 bg-[#c9c1ad] text-black">
        <h2 className="text-4xl text-center mb-8 font-bold">
          Vraag een offerte aan
        </h2>

        <form
          action="https://formsubmit.co/rutgerscarcleaning@outlook.be"
          method="POST"
          className="max-w-xl mx-auto grid gap-4"
        >
          <input type="text" name="naam" placeholder="Naam" className="p-4 rounded" required />
          <input type="email" name="email" placeholder="Email" className="p-4 rounded" required />
          <textarea name="bericht" placeholder="Wat wil je laten doen?" className="p-4 rounded" />

          <button className="bg-[#0b2e59] text-white py-4 rounded text-xl">
            Verstuur
          </button>
        </form>
      </section>

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/32498350160"
        className="fixed bottom-6 right-6 bg-[#25D366] px-6 py-4 rounded-full text-xl font-bold shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}
