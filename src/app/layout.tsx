// Next
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

// Styles
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Golobe Travel Agency',
  description:
    'Experience the world with Golobe Travel Agency, your trusted experts in creating unforgettable global adventures. From relaxing beach getaways to thrilling nature expeditions and immersive cultural explorations, we specialize in crafting personalized itineraries to suit your travel dreams. With a passionate and experienced team dedicated to delivering exceptional customer service, we ensure seamless travel arrangements and provide you with the ultimate travel experience. Discover the world with confidence and embark on a journey of a lifetime with Golobe Travel Agency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat?.className} text-base`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
