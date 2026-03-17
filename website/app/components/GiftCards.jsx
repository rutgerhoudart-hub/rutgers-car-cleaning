export default function GiftCards() {
    const giftCards = [
        { amount: 50, price: "€50" },
        { amount: 75, price: "€75" },
        { amount: 100, price: "€100" }
    ];

    return (
        <section className="py-24 text-center bg-black text-white">
            <h2 className="text-4xl font-bold mb-12">Cadeaubonnen</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {giftCards.map((card) => (
                    <div key={card.amount} className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition">
                        <h3 className="text-2xl font-semibold mb-4">{card.price}</h3>
                        <button className="mt-4 bg-white text-black px-6 py-3 rounded hover:bg-gray-100 transition">
                            Koop
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}