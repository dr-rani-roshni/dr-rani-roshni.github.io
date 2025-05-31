"use client";
import { useEffect } from "react";

export function useScrollFadeIn() {
  useEffect(() => {
    // Fade in animations
    const fadeElements = document.querySelectorAll<HTMLElement>(".fade-in-up");
    const counterElements = document.querySelectorAll<HTMLElement>(".counter");
    
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            
            // Handle counter animation
            if (entry.target.classList.contains("counter")) {
              const target = entry.target as HTMLElement;
              const finalValue = parseInt(target.dataset.count || "0");
              animateCounter(target, finalValue);
            }
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    fadeElements.forEach((el) => observer.observe(el));
    counterElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
}

function animateCounter(element: HTMLElement, finalValue: number) {
  const duration = 2000; // 2 seconds
  const startTime = performance.now();
  const startValue = 0;
  
  function updateCounter(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(startValue + (finalValue - startValue) * easeOutQuart);
    
    if (finalValue >= 1000) {
      element.textContent = `${currentValue.toLocaleString()}+`;
    } else if (finalValue === 98) {
      element.textContent = `${currentValue}%`;
    } else if (finalValue === 24) {
      element.textContent = `${currentValue}/7`;
    } else {
      element.textContent = `${currentValue}+`;
    }
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  requestAnimationFrame(updateCounter);
} 