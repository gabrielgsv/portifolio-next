import About from "@/components/About";
import Title from "@/components/Title";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={roboto.className}>
      <Title />
      <About />
    </div>
  );
}
