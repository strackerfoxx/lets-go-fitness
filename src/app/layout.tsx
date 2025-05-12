import "@/app/css/globals.css";
import "@/app/css/main.css";
import { Noto_Sans_Display } from "next/font/google";

export const metadata = {
  title: "Lets go Fitness GYM",
  description: "Gimnasio en 192 Calz. del Hueso, Coapa, Coyoacan, Ciudad de México. Área de spinning, saco de box, pesas, duchas y vestidores. Lets go Fitness. ¡Inscríbete hoy!"
}

const SansDisplay = Noto_Sans_Display({
  subsets: ['latin'],
  weight: '400', // Anton solo tiene un peso (400)
})

export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <html lang="es">
      <body className={SansDisplay.className}>
        {children}
      </body>
    </html>
  );
}
