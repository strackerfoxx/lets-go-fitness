import Image from "next/image"
import Link from "next/link"

import "@/app/css/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo">
            <Image src={"https://i.imgur.com/boyzK1n.png"}  alt="logo" width={130} height={70}/>
          </div>
          <p>Calzada del Hueso 160<br />CDMX, Coyoacan</p>
        </div>

        <div className="footer-section">
          <h4>Menu</h4>
          <ul>
            <li><Link href="#home"><span>Home</span></Link></li>
            <li><Link href="#about"><span>Instalaciones</span></Link></li>
            <li><Link href="#membership"><span>Membresia</span></Link></li>
            <li><Link href="#location"><span>Ubicacion</span></Link></li>
            
          </ul>
        </div>

        <div className="footer-section">
          <h4>Horarios</h4>
          <p>Todos los dias: 5:00 – 22:00<br />Sabado: 7:00 – 14:00</p>
          <h5>Visita</h5>
          <p>1800-567-8990</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Lets go Fitness. All Rights Reserved.</p>
        <Link href="#home" style={{padding: "10px"}} className="up-button">
            <div className="button-box">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{margin: "5px"}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                </svg>
            </div>
        </Link>
      </div>
    </footer>
  )
}
