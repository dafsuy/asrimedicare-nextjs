import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/components/header/header';
import Footer from './ui/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PT Adi Saka Mandiri',
  description:
    'Menyediakan peralatan kesehatan canggih berkualitas internasional'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header>
          <Header></Header>
        </header>
        <main>{children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
