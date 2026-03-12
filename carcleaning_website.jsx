import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/*
SEO KEYWORDS
Car Cleaning Keerbergen
Auto Detailing Keerbergen
Auto laten reinigen Keerbergen
Interieur reiniging auto Keerbergen
*/

export default function RutgersCarCleaning(){

const [slider,setSlider]=useState(50);

const [form,setForm]=useState({
name:"",
email:"",
phone:"",
car:"",
service:"",
message:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit=(e)=>{
e.preventDefault();

/*
BACKEND BOOKING SYSTEM
Here you would normally send the booking to a server
Example integrations:
- Google Calendar API
- Calendly
- Custom Node backend
*/

alert("Afspraak aanvraag verzonden");
};

return(

<div className="min-h-screen bg-black text-white">

{/* FLOATING WHATSAPP BUTTON */}
<a
href="https://wa.me/"
className="fixed bottom-6 right-6 bg-green-500 px-6 py-4 rounded-full shadow-xl font-bold z-50"
>
WhatsApp
</a>

{/* NAVBAR */}
<nav className="flex justify-between items-center p-6 border-b border-gray-800">

<div className="flex items-center gap-3">

<div className="bg-white text-black font-bold px-3 py-1 rounded-lg">
RCC
</div>

<span className="font-semibold">Rutger's Car Cleaning</span>

</div>

<div className="space-x-6 text-sm">
<a href="#services">Diensten</a>
<a href="#results">Resultaten</a>
<a href="#booking">Boeken</a>
<a href="#shop">Shop</a>
<a href="#reviews">Reviews</a>
</div>

</nav>

{/* LUXURY HERO */}
<section className="text-center py-32 px-6 bg-gradient-to-b from-black to-gray-900">

<h1 className="text-6xl font-bold mb-6">
Premium Car Detailing in Keerbergen
</h1>

<p className="text-gray-400 text-xl mb-10 max-w-3xl mx-auto">
Professionele car cleaning en auto detailing in Keerbergen. Wij maken jouw wagen weer showroom klaar met interieur reiniging, exterieur detailing en polieren.
</p>

<div className="flex justify-center gap-4 flex-wrap">

<Button className="text-lg px-10 py-5">Boek Afspraak</Button>

<a
href="https://wa.me/"
className="bg-green-500 px-10 py-5 rounded-xl font-semibold"
>
WhatsApp Ons
</a>

</div>

</section>

{/* SERVICES */}
<section id="services" className="py-24 px-6 max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">
Car Cleaning Diensten
</h2>

<div className="grid md:grid-cols-3 gap-8">

<Card className="bg-gray-900 border-gray-800">
<CardContent className="p-8">
<h3 className="text-xl font-semibold mb-3">Interieur Reiniging</h3>
<p className="text-gray-400 mb-4">Dieptereiniging van zetels, dashboard en tapijten.</p>
<p className="text-2xl font-bold">€75</p>
<p className="text-sm text-gray-500">+ €15 grote auto's</p>
</CardContent>
</Card>

<Card className="bg-gray-900 border-gray-800">
<CardContent className="p-8">
<h3 className="text-xl font-semibold mb-3">Binnen & Buiten</h3>
<p className="text-gray-400 mb-4">Complete auto detailing binnen en buiten.</p>
<p className="text-2xl font-bold">€150</p>
<p className="text-sm text-gray-500">+ €25 grote auto's</p>
</CardContent>
</Card>

<Card className="bg-gray-900 border-gray-800">
<CardContent className="p-8">
<h3 className="text-xl font-semibold mb-3">Polieren</h3>
<p className="text-gray-400 mb-4">Lakcorrectie en diepe glans behandeling.</p>
<p className="text-2xl font-bold">Prijs op aanvraag</p>
</CardContent>
</Card>

</div>

</section>

{/* BEFORE AFTER SLIDER */}
<section id="results" className="py-24 bg-gray-950 px-6">

<h2 className="text-4xl font-bold text-center mb-16">
Voor & Na Resultaat
</h2>

<div className="max-w-4xl mx-auto">

<div className="relative h-80 bg-gray-800 rounded-xl overflow-hidden">

<img
src="/after.jpg"
className="absolute w-full h-full object-cover"
/>

<div
className="absolute top-0 left-0 h-full overflow-hidden"
style={{width:slider+"%"}}
>

<img
src="/before.jpg"
className="w-full h-full object-cover"
/>

</div>

</div>

<input
className="w-full mt-6"
type="range"
min="0"
max="100"
value={slider}
onChange={(e)=>setSlider(e.target.value)}
/>

</div>

</section>

{/* BOOKING SYSTEM */}
<section id="booking" className="py-24 px-6 max-w-3xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-12">
Online Afspraak Boeken
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<Input placeholder="Naam" name="name" onChange={handleChange}/>
<Input placeholder="Email" name="email" onChange={handleChange}/>
<Input placeholder="Telefoon" name="phone" onChange={handleChange}/>

<Input placeholder="Auto" name="car" onChange={handleChange}/>

<select className="w-full p-3 rounded bg-gray-900" name="service" onChange={handleChange}>
<option>Dienst kiezen</option>
<option>Interieur reiniging</option>
<option>Binnen & Buiten reiniging</option>
<option>Polieren</option>
</select>

{/* REAL CALENDAR INTEGRATION POSSIBLE */}
<Input type="date" />

<Button className="w-full text-lg">Afspraak aanvragen</Button>

{/* STRIPE PAYMENT BUTTON */}
<Button className="w-full bg-green-600">
Online Betalen (Stripe / Bancontact)
</Button>

</form>

</section>

{/* GIFT CARDS */}
<section className="py-24 bg-gray-950 px-6">

<h2 className="text-4xl font-bold text-center mb-16">
Cadeaubonnen
</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<Card className="bg-gray-900">
<CardContent className="p-6 text-center">
<h3 className="font-bold text-xl">€50 Cadeaubon</h3>
<Button className="mt-4">Koop</Button>
</CardContent>
</Card>

<Card className="bg-gray-900">
<CardContent className="p-6 text-center">
<h3 className="font-bold text-xl">€100 Cadeaubon</h3>
<Button className="mt-4">Koop</Button>
</CardContent>
</Card>

<Card className="bg-gray-900">
<CardContent className="p-6 text-center">
<h3 className="font-bold text-xl">€150 Cadeaubon</h3>
<Button className="mt-4">Koop</Button>
</CardContent>
</Card>

</div>

</section>

{/* WEBSHOP */}
<section id="shop" className="py-24 px-6 max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">
Detailing Webshop
</h2>

<div className="grid md:grid-cols-3 gap-8">

<Card className="bg-gray-900">
<CardContent className="p-6 text-center">
<h3 className="font-semibold">Microvezel Doek</h3>
<p className="text-xl font-bold mt-2">€9.99</p>
<Button className="mt-4">Koop Nu</Button>
</CardContent>
</Card>

<Card className="bg-gray-900">
<CardContent className="p-6 text-center">
<h3 className="font-semibold">Velgenreiniger</h3>
<p className="text-xl font-bold mt-2">€14.99</p>
<Button className="mt-4">Koop Nu</Button>
</CardContent>
</Card>

<Card className="bg-gray-900">
<CardContent className="p-6 text-center">
<h3 className="font-semibold">Auto Shampoo</h3>
<p className="text-xl font-bold mt-2">€19.99</p>
<Button className="mt-4">Koop Nu</Button>
</CardContent>
</Card>

</div>

</section>

{/* GOOGLE REVIEWS API */}
<section id="reviews" className="py-24 bg-gray-950 px-6">

<h2 className="text-4xl font-bold text-center mb-16">
Google Reviews
</h2>

<div className="text-center text-gray-400">

<p>
Hier worden automatisch Google reviews geladen via Google Places API wanneer de website gekoppeld wordt met het Google Business profiel.
</p>

</div>

</section>

{/* GOOGLE MAPS */}
<section className="py-24 px-6">

<h2 className="text-4xl font-bold text-center mb-10">
Auto Detailing in Keerbergen
</h2>

<div className="max-w-5xl mx-auto">

<iframe
src="https://www.google.com/maps?q=Keerbergen&output=embed"
className="w-full h-96 rounded-xl"
/>

</div>

</section>

{/* FOOTER */}
<footer className="text-center py-10 border-t border-gray-800">

<p>© Rutger's Car Cleaning</p>

<p className="text-sm text-gray-400 mt-2">
Car Cleaning Keerbergen • Auto Detailing Keerbergen • Interieur Reiniging
</p>

</footer>

</div>

);
}
