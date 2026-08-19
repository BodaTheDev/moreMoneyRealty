"use client";
import { useEffect } from "react";

export default function ScrollObserver() {
    useEffect(() => {
        const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches;
        const elements = document.querySelectorAll(".reveal");

        if (reduceMotion || !("IntersectionObserver" in window)) {
            elements.forEach((e) => e.classList.add("is-visible"));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((en) => {
                    if (en.isIntersecting) {
                        en.target.classList.add("is-visible");
                        io.unobserve(en.target);
                    }
                });
            },
            { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
        );

        elements.forEach((e) => io.observe(e));

        return () => io.disconnect();
    }, []);

    return null;
}
