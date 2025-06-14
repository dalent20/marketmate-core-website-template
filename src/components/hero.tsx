export default function Hero() {
    return (
        <section className="bg-white py-28 px-6 text-center shadow-sm">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Smarter Websites for Service-Based Businesses
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Launch faster, look better, and get insights that drive revenue. MarketMate gives you an edge — without the complexity.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                    Get Started
                </a>
            </div>
        </section>
    );
}
