// src/app/layout.tsx
import './globals.css';              // ← must be first
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'MarketMate',
  description: 'Grow your service business with smart web tools',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
