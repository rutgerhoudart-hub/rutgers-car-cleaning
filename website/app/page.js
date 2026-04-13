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
      <header className="flex justify-between items-center px-6 py-4 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
         <img
          src="/logo-rutger.svg"
          className="h-2 md:h-3 w-auto object-contain"
         alt="Rutger's Premium Car Cleaning logo"
         />
          <span className="font-bold">Rutger's Premium Car Cleaning</span>
        </div>
        <a href="https://wa.me/32498350160">
          <button className="bg-[#5c9ea6] px-4 py-2 rounded">WhatsApp</button>
        </a>
      </header>

      {/* HERO */}
      <section className="text-center py-20">
       <h1 className="text-6xl md:text-7xl font-bold mb-4">Premium Car Detailing</h1>
       <p className="text-lg md:text-xl opacity-90"></p>
        <p>Binnen- en buiten schoonmaak</p>
      </section>

      {/* VOOR & NA */}
      <section className="text-center py-12 px-6">
  <h2 className="text-3xl font-bold mb-8">Voor & Na Resultaten</h2>

  <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <img
     src={slides[slide].before}
     className="w-[220px] h-[140px] object-cover rounded-xl shadow-lg mx-auto"
     alt="Before"
     />

    <img
     src={slides[slide].after}
     className="w-[220px] h-[140px] object-cover rounded-xl shadow-lg mx-auto"
     alt="After"
     />
  </div>

  <div className="mt-6 flex justify-center gap-4">
    <button
      onClick={() =>
        setSlide((slide - 1 + slides.length) % slides.length)
      }
      className="bg-gray-700 px-5 py-2 rounded-full"
    >
      Vorige
    </button>

    <button
      onClick={() =>
        setSlide((slide + 1) % slides.length)
      }
      className="bg-gray-700 px-5 py-2 rounded-full"
    >
      Volgende
    </button>
  </div>
</section>

      {/* DIENSTEN */}
      <section className="grid md:grid-cols-2 gap-6 p-10">
        <Link href="/interieur">
          <div className="bg-white text-black p-8 rounded-2xl">
            <h2 className="font-bold">Interieur</h2>
          </div>
        </Link>

        <Link href="/polieren">
          <div className="bg-white text-black p-8 rounded-2xl">
            <h2 className="font-bold">Polieren</h2>
          </div>
        </Link>

        <Link href="/exterieur">
          <div className="bg-white text-black p-8 rounded-2xl">
            <h2 className="font-bold">Exterieur</h2>
          </div>
        </Link>

        <Link href="/coating">
          <div className="bg-white text-black p-8 rounded-2xl">
            <h2 className="font-bold">Coating</h2>
          </div>
        </Link>
      </section>

      {/* WEBSHOP */}
      <section className="p-10">
        <h2 className="text-2xl mb-6 text-center">Webshop</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 rounded-2xl">
            <h3>Auto Shampoo</h3>
            <p>€15</p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl">
            <h3>Wax</h3>
            <p>€25</p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl">
            <h3>Microvezel doek</h3>
            <p>€10</p>
          </div>
        </div>
      </section>

      {/* FORMULIER */}
      <section className="p-10 bg-[#c9c1ad] text-black">
        <h2 className="text-2xl mb-6 text-center">Vraag een offerte aan</h2>

        <form 
          action="https://formsubmit.co/rutgerscarcleaning@outlook.be" 
          method="POST"
          className="max-w-xl mx-auto grid gap-4"
        >
          <input type="text" name="naam" placeholder="Naam" required className="p-3 rounded" />
          <input type="email" name="email" placeholder="Email" required className="p-3 rounded" />
          <textarea name="bericht" placeholder="Wat wil je laten doen?" className="p-3 rounded" />

          <button type="submit" className="bg-[#0b2e59] text-white py-3 rounded">
            Verstuur aanvraag
          </button>
        </form>
      </section>

    </div>
  );
}