"use client"
import "@/app/css/map.css"
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
        <p>Estamos ubicados en calzada del hueso 192 frente a la prepa 5</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.7295419968228!2d-99.13508121361743!3d19.30859254941693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01b0bb4f4a3b%3A0xcd16fd30826aa8a!2sWORLD%20GYM!5e0!3m2!1ses-419!2smx!4v1747016417781!5m2!1ses-419!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
