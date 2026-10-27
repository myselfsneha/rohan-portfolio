```jsx
import { useEffect } from "react";

export default function useScrollStory() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const sections = document.querySelectorAll(
      "section:not([data-scroll-story='false'])"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active-section");
          } else {
            entry.target.classList.remove("active-section");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.classList.remove("active-section");
      });
    };
  }, []);
}
```
