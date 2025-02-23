import { Inter } from 'next/font/google';
import "@/assets/styles/globals.css";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Sean Zhang",
  description: "Sean Zhang's personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ inter.className }>
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
