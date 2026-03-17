"use client";

import { useState } from 'react';

export default function Booking() {
    const [formData, setFormData] = useState({
        naam: '',
        email: '',
        telefoon: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ naam: '', email: '', telefoon: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="booking" className="py-24 text-center bg-gray-950">

            <h2 className="text-4xl font-bold mb-12 text-white">
                Boek een Afspraak
            </h2>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">

                <input
                    type="text"
                    name="naam"
                    placeholder="Naam"
                    value={formData.naam}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-900 rounded text-white placeholder-gray-500"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-900 rounded text-white placeholder-gray-500"
                />

                <input
                    type="tel"
                    name="telefoon"
                    placeholder="Telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-900 rounded text-white placeholder-gray-500"
                />

                <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                    Afspraak aanvragen
                </button>

                {submitted && (
                    <p className="text-green-400 mt-4">Dank je wel! We nemen binnenkort contact op.</p>
                )}

            </form>

        </section>
    );
}