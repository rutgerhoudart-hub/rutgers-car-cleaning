export default function Reviews() {
    const reviews = [
        {
            id: 1,
            rating: 5,
            text: "Beste detailing in Keerbergen"
        }
    ];

    return (
        <section className="py-24 text-center bg-black">
            <h2 className="text-4xl font-bold mb-12 text-white">
                Reviews
            </h2>

            <div className="space-y-6">
                {reviews.map((review) => (
                    <p key={review.id} className="text-gray-400">
                        {"⭐".repeat(review.rating)} {review.text}
                    </p>
                ))}
            </div>
        </section>
    );
}