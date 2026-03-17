"use client";

import Hero from "./components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import Booking from "./components/Booking";
import Chatbot from "./components/Chatbot";
import Reviews from "./components/Reviews";
import GiftCards from "./components/GiftCards";
import Shop from "./components/Shop";

export default function CarCleaningWebsite() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* TEST BLOCK */}
      <div className="bg-red-500 text-white p-10 text-center">
        TEST
      </div>

      {/* WEBSITE */}
      <Hero />
      <BeforeAfter />
      <Booking />
      <GiftCards />
      <Shop />
      <Reviews />
      <Chatbot />

    </div>
  );
}