import Hero from "./components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import Booking from "./components/Booking";
import Chatbot from "./components/Chatbot";
import Reviews from "./components/Reviews";
import GiftCards from "./components/GiftCards";
import Shop from "./components/Shop";

export default function CarCleaningWebsite() {
  return (
    <div>
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