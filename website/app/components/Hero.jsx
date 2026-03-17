<div className="absolute top-6 left-6 flex items-center gap-3">

  <img src="/logo.svg" className="h-10" />

  <span className="text-white font-semibold">
    Rutger's Car Cleaning
  </span>

</div>

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-black">
            <h1 className="text-6xl font-bold mb-6">
                Rutger's Car Cleaning
            </h1>
            <p className="text-gray-400 max-w-xl mb-10">
                Premium detailing in Keerbergen
            </p>
            <div className="flex gap-4">
                <a
                    href="#booking"
                    className="px-8 py-4 rounded-lg font-semibold"
                    style={{ background: "var(--primary)" }}
                >
                    Boek Afspraak
                </a>
                <a
                    href="https://wa.me/32498350160"
                    className="px-8 py-4 rounded-lg font-semibold"
                    style={{ background: "var(--accent)" }}
                >
                    WhatsApp
                </a>
            </div>
        </section>
    );
}