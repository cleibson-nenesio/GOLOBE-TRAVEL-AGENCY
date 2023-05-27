import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golobe Travel Agency | Flights",
  description:
    "Experience the world with Golobe Travel Agency, your trusted experts in creating unforgettable global adventures. From relaxing beach getaways to thrilling nature expeditions and immersive cultural explorations, we specialize in crafting personalized itineraries to suit your travel dreams. With a passionate and experienced team dedicated to delivering exceptional customer service, we ensure seamless travel arrangements and provide you with the ultimate travel experience. Discover the world with confidence and embark on a journey of a lifetime with Golobe Travel Agency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
