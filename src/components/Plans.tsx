"use client"
import { useEffect } from "react";

import "@/app/css/plans.css";

import { Anton } from "next/font/google"
const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton solo tiene un peso (400)
})


const plans = [
  {
    name: 'Visita',
    price: 50,
    description: 'Entrena con acceso total durante un día completo. Ideal para probar el gimnasio o entrenar sin compromiso. Sin inscripción, sin mensualidad.',
  },
{
    name: 'pro',
    price: 500,
    features: [
      'Acceso total todo el mes',
      'Zona de Pesas',
      'Baños con Regaderas',
      'Zona de Spinning'
    ],
    highlighted: true,
  },
  {
    name: 'Estudiante',
    price: 350,
    description: 'Membresía mensual con acceso completo al gimnasio. Precio especial al presentar credencial vigente. Entrena todos los días, sin límites.',
  },
];

export default function Plans(){
  return (
    <section id="membership" className="plans-container">
      <div className="header">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--primary-color)">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <h2 className={`${anton.className} plans-title`}>
            FLEXIBLE MEMBERSHIP PLANS<br />TO SUIT YOUR LIFESTYLE
        </h2>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan-card fade-in-on-scroll ${plan.highlighted ? 'highlighted' : ''}`}
            style={{height: plan.highlighted ? '350px' : '300px'}}
          >
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <p className="plan-price">${plan.price}<span>/month</span></p>
            </div>

            {plan.highlighted ? (
              <>
              <button className="order-button">Visitar →</button>
                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    {feature}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="plan-description">{plan.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
