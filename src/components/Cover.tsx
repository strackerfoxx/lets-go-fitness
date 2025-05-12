import Link from "next/link"
import Image from "next/image"
import { Anton } from "next/font/google"

const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton solo tiene un peso (400)
})

export default function Cover() {
  return (
    <>
      <div className="cover">
        <div className="navigation">
            <nav>
                <Link href="#about"><span>About</span></Link>
                <Link href="#membership"><span>Membership</span></Link>
                <Link href="#location"><span>Location</span></Link>
            </nav>

            <Image src={"https://i.imgur.com/dKihrXS.png"}  alt="logo" width={130} height={70}/>
            
            {/* <div>
              <button>552424</button>
            </div> */}
        </div>
        <h1 className={anton.className}>ENTRENA DURO. TRANSFORMA TU CUERPO.</h1>
        <div className="content">
            <p>Gimnasio completo frente a Prepa 5. Área de pesas, spinning, boxeo, vestidores y duchas. Precio accesible. Descuento para estudiantes.</p>
            <Link href="#about" className="button">Empieza tu transformación</Link>
        </div>
        <div>
            <p id="address">192 Calz. del Hueso Ciudad de México</p>
        </div>
      </div>
    </>
  )
}
