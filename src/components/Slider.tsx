"use client"
import { useRef } from 'react';
import Image from 'next/image';

import "@/app/css/slider.css";

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);



  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={() => scroll('left')}>‹</button>
      <button className="slider-button right" onClick={() => scroll('right')}>›</button>
      <div className="slider" ref={sliderRef}>
        <Image className="slide-image" src="https://images.unsplash.com/photo-1603734220970-25a0b335ca01?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Imagen de Mancuernas del gimnasio Lets Go Fitness"
          width={350}
          height={320}
        />
        <Image className="slide-image" src="https://images.unsplash.com/photo-1625594755684-a73285a64f66?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Imagen de bicicletas estaticas del gimnasio Lets Go Fitness"
          width={350}
          height={320}
        />
        <Image className="slide-image" src="https://images.unsplash.com/photo-1661497538923-631bd14ecb8a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Imagen de duchas del gimnasio Lets Go Fitness"
          width={350}
          height={320}
        />
        <Image className="slide-image" src="https://images.unsplash.com/photo-1692731753575-6c1405e2479b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Imagen de un saco de boxeo del gimnasio Lets Go Fitness"
          width={350}
          height={320} 
        />
      </div>
    </div>
  );
}
