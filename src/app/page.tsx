// Fonts
import TradeGothic from "next/font/local";

const tradeGothic = TradeGothic({
  src: [
    {
      path: "../../public/fonts/trade-gothic.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/trade-gothic-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--trade-gothic",
});

export default function Home() {
  return (
    <main>
      <h2>Site</h2>
    </main>
  );
}
