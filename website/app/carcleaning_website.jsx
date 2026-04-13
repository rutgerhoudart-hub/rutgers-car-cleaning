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

      const colors = {
     primary: "#0b2e59",
     secondary: "#3aa0c8",
    accent: "#5c9ea6",
    light: "#c9c1ad"
    };

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