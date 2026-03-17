"use client";

import { useState } from "react";

export default function BeforeAfter() {
    const [slider, setSlider] = useState(50);

    return (
        <section className="py-24 text-center bg-black">
            <h2 className="text-4xl font-bold mb-12 text-white">
                Voor & Na Resultaat
            </h2>

            <div className="max-w-4xl mx-auto">
                <div className="relative h-80 rounded-xl overflow-hidden cursor-col-resize">
                    <img 
                        src="/after.jpg" 
                        alt="After result"
                        className="absolute w-full h-full object-cover" 
                    />

                    <div
                        className="absolute top-0 left-0 h-full overflow-hidden"
                        style={{ width: `${slider}%` }}
                    >
                        <img 
                            src="/before.jpg" 
                            alt="Before result"
                            className="w-full h-full object-cover" 
                        />
                    </div>

                    <div
                        className="absolute top-0 left-0 h-full w-1 bg-white"
                        style={{ left: `${slider}%`, transform: "translateX(-50%)" }}
                    />
                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={slider}
                    onChange={(e) => setSlider(e.target.value)}
                    className="w-full mt-6 cursor-pointer"
                />
            </div>
        </section>
    );
}