// src/app/layout.jsx
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';
import Page from './page'; // Ensure the path is correct

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-zinc-50 dark:bg-black lg:px-40 text-black dark:text-white`}>
        <main className="flex flex-col justify-between min-h-screen bg-white dark:bg-zinc-900 max-w-[1600px] mx-auto">
          <Header />
          <div className="flex-grow">
            <Page /> {/* This will render the content of page.jsx */}
            {children} {/* This will render any children passed to RootLayout */}
          </div>
          <footer className="bg-zinc-50 py-4 border-t border-gray-200 fixed bottom-0 left-0 right-0">
            <div className="mx-auto flex justify-center items-center w-full">
              <div className="bg-white bg-opacity-90 flex items-center justify-between p-4 w-full max-w-[1600px]">
                <nav className="flex space-x-8">
                  <a href="/" className="text-black hover:text-blue-600">Home</a>
                  <a href="/about" className="text-black hover:text-blue-600">About</a>
                  <a href="/projects" className="text-black hover:text-blue-600">Projects</a>
                  <a href="/uses" className="text-black hover:text-blue-600">Uses</a>
                </nav>
                <div className="text-black text-[14px] font-[400] leading-[24px] ml-8">
                  © 2024 John Doe. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
