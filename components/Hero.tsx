"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const panel = panelRef.current;
        if (!panel) return;

        const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches;

        const fillBars = () => {
            panel.querySelectorAll<HTMLElement>("[data-fill]").forEach((b) => {
                b.style.width = b.getAttribute("data-fill") + "%";
            });
        };

        const runCounters = () => {
            fillBars();
            panel.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
                const target = parseInt(el.getAttribute("data-count") || "0", 10);
                let start: number | null = null;
                const dur = 1400;

                if (reduce) {
                    el.textContent = target.toLocaleString();
                    return;
                }

                const step = (ts: number) => {
                    if (!start) start = ts;
                    const p = Math.min((ts - start) / dur, 1);
                    const eased = 1 - Math.pow(1 - p, 3);
                    el.textContent = Math.round(target * eased).toLocaleString();
                    if (p < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    runCounters();
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(panel);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" id="top">
            <span className="wm wm-emblem" aria-hidden="true"><svg viewBox="0 0 100 100"><use href="#mmr-m" /></svg></span>
            <div className="wrap hero-inner">
                <div className="hero-copy">
                    <span className="trust-pill reveal"><span className="dot"></span> Clients closed <b>50+ properties</b> this year</span>
                    <p className="eyebrow reveal">Done-for-you calling · acquisitions · full teams</p>
                    <h1 className="reveal">We build the team.<br /><span className="accent">You close the deals.</span></h1>
                    <p className="kicker reveal">More conversations. More offers. <span className="gold">More money.</span></p>
                    <p className="lead reveal">More Money Realty staffs and trains the people who run a real estate operation — callers, acquisitions, dispositions, and everything in between — so your pipeline stays full and your deals keep closing.</p>
                    <div className="hero-cta reveal">
                        <Link className="btn btn-primary btn-arrow" href="#contact">Book a discovery call</Link>
                        <Link className="btn btn-ghost" href="#team">See who we staff</Link>
                    </div>
                    <div className="chips reveal">
                        <span className="chip">U.S. time-zone coverage</span>
                        <span className="chip">Trained on U.S. scripts</span>
                        <span className="chip"><b>~40</b> leads / mo per caller</span>
                        <span className="chip">7 roles staffed</span>
                    </div>
                </div>

                <div className="panel reveal" ref={panelRef} aria-label="Illustration of a typical month per caller">
                    <div className="panel-top">
                        <span className="status"><span className="dot"></span> U.S. lines open</span>
                        <span className="panel-tag">Typical month · 1 caller</span>
                    </div>
                    <div className="funnel">
                        <div className="frow">
                            <span className="flabel">Dials placed</span>
                            <span className="fnum" data-count="4120">0</span>
                            <span className="fbar"><span data-fill="100"></span></span>
                        </div>
                        <div className="frow">
                            <span className="flabel">Live conversations</span>
                            <span className="fnum" data-count="512">0</span>
                            <span className="fbar"><span data-fill="46"></span></span>
                        </div>
                        <div className="frow win">
                            <span className="flabel">Qualified leads to CRM</span>
                            <span className="fnum" data-count="41">0</span>
                            <span className="fbar"><span data-fill="18"></span></span>
                        </div>
                    </div>
                    <div className="panel-foot">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                        Every lead qualified before it reaches your acquisitions team.
                    </div>
                </div>
            </div>
        </section>
    );
}
