"use client"
import { useEffect } from "react"


export default function Animation() {

    useEffect(() => {
        const elements = document.querySelectorAll('.slide-image, .fade-in-on-scroll');

        const observer = new IntersectionObserver(
            (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                obs.unobserve(entry.target); // Solo una vez
                }
            });
            },
            { threshold: 0.1 }
        );

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    
  return null;
}
