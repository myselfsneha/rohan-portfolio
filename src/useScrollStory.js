import { useEffect } from "react";

export default function useScrollStory() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-section");
        }
      });
    }, { threshold: 0.3 });

    sections.forEach((sec) => observer.observe(sec));
  }, []);
}