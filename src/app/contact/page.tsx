export default function ContactPage() {
    return (
        <section className="max-w-2xl mx-auto py-20 px-6">
            <h1 className="text-3xl font-bold mb-6">Let’s Talk</h1>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <textarea
                    placeholder="How can we help?"
                    rows={5}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <button
                    type="submit"
                    className="bg-brand text-white px-6 py-3 rounded-md hover:bg-brand-dark transition font-semibold"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
