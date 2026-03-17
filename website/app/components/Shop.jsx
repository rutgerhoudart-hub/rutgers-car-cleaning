export default function Shop() {
    const products = [
        { id: 1, name: "Microvezel Doek", price: 9.99 },
        { id: 2, name: "Schoonmaakset", price: 24.99 },
        { id: 3, name: "Poetsspray", price: 14.99 },
    ];

    return (
        <section className="py-24 text-center bg-gray-950">
            <h2 className="text-4xl font-bold mb-16">Webshop</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map((product) => (
                    <div key={product.id} className="bg-gray-900 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-xl font-bold mt-2">€{product.price.toFixed(2)}</p>
                        <button className="mt-4 bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">
                            Koop
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}