import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "THE GALAXY GAMES",
  description: "Buys any games and accessories here",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: 'yes',
  },
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
