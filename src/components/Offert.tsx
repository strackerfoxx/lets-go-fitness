import Link from "next/link"
import { Anton } from "next/font/google"
import "@/app/css/offert.css"

import Slider from "./Slider"

const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton solo tiene un peso (400)
})

export default function Offert() {
  return (
    <section id="about">
        <div>
            <div className="svgs">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="var(--primary-color)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>

            <h2 className={anton.className}>TODO LO QUE NECESITAS </h2>

            <div id="offer-card" className="fade-in-on-scroll">
                <h3 className={anton.className}>OFRECEMOS</h3>
                <p>Entrena un día completo. Sin compromisos, sin inscripción.</p>
                <Link href="#membership">
                    <div className="button-box">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{margin: "5px"}}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                    <span>Descubrir planes</span>
                </Link>
            </div>
        </div>

        <Slider/>
    </section>
  )
}
