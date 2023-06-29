import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gabriel | Desenvolvedor Web e Mobile",
  description:
    "Esse é o meu site pessoal, onde você pode saber mais sobre mim. Tenho experiência com desenvolvimento front-end utilizando React e suas tecnologias. Neste site, você pode ver alguns dos meus projetos e entrar em contato comigo.",
  verification: {
    google: "QLfjmJeLgGFF9RPbmOB9S3jQDSJYnr_YdDjH6XEknfo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className={roboto.className}>{children}</div>
      </body>
    </html>
  );
}
