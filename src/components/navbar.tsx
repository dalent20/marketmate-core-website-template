import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-brand">
                    MarketMate
                </Link>
                <ul className="flex space-x-8 text-sm font-medium text-gray-700">
                    <li><Link href="/about" className="hover:text-brand">About</Link></li>
                    <li><Link href="/services" className="hover:text-brand">Services</Link></li>
                    <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
