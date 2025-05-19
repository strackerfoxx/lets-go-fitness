import Link from "next/link"
import Image from "next/image"
import { Anton } from "next/font/google"

const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton solo tiene un peso (400)
})

export default function Cover() {
  return (
    <section id="home" style={{marginTop: "0px"}}>
      <div className="cover">
        <div className="navigation">
            <Image src={"/images/dKihrXS_d.webp"}  alt="logo del gimnasio lets go fitness gym" width={130} height={70} id="logo-mobile"/>
            {/* <Image src={"https://i.imgur.com/dKihrXS.png"}  alt="logo" width={130} height={70} id="logo"/> */}

            <nav>
                <Link href="#about"><span>Instalaciones</span></Link>
                <Link href="#membership"><span>Membresia</span></Link>
                <Link href="#location"><span>Ubicacion</span></Link>
            </nav>

            <Image src={"/images/dKihrXS_d.webp"}  alt="logo del gimnasio lets go fitness gym" width={130} height={70} id="logo-two"/>
            {/* <Image src={"https://i.imgur.com/dKihrXS.png"}  alt="logo" width={130} height={70} id="logo-two"/> */}
        </div>
        <h1 className={anton.className}>ENTRENA DURO. TRANSFORMA TU CUERPO.</h1>
        <div className="content">
            <div id="description-container">
              <p>Gimnasio completo frente a Prepa 5. Área de pesas, cardio, boxeo, vestidores y duchas. Precio accesible. Descuento para estudiantes.</p>
            </div>
            <Link href="#about" className="button">Empieza tu transformación</Link>
        </div>
        <div>
            <p id="address">160 Calz. del Hueso Ciudad de México</p>
        </div>
      </div>
    </section>
  )
}
