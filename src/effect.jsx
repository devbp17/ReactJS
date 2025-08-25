import { useEffect } from "react";

function RevealOnScroll({ children }) {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    reveals.forEach(reveal => observer.observe(reveal));
  }, []);

  return <div className="reveal">{children}</div>;
}

export default RevealOnScroll;