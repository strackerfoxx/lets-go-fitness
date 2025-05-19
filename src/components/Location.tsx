"use client"
import "@/app/css/location.css"
import { Anton } from "next/font/google"

const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton solo tiene un peso (400)
})

export default function Location() {
  return (
    <section id="location" className="location-container">
      <div>
        <h2 className={`${anton.className} location-title`}>VISÍTANOS EN NUESTRA UBICACIÓN</h2>
        <p>Estamos ubicados en calzada del hueso 160 frente a la prepa 5</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.3930670017585!2d-99.1376217250034!3d19.308742644625212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01b0a4479a45%3A0x8b6b7e07431fa4ee!2sLet&#39;s%20go%20Fitness!5e0!3m2!1ses!2smx!4v1747634993229!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
