"use client";
import { FormEvent, useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // We will hook this up to /api/contact/route.ts in Step 5
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        console.log("Form data to send:", data);
        alert("Form setup complete! API integration coming in Step 5.");
        setIsSubmitting(false);
    };

    return (
        <section className="block sec-light" id="contact">
            <div className="wrap contact-grid">
                <div className="reveal">
                    <p className="eyebrow">Get started</p>
                    <h2 style={{ marginTop: 16, fontSize: "clamp(1.95rem,3.6vw,2.85rem)" }}>Ready to build your team?</h2>
                    <p style={{ marginTop: 16, color: "var(--muted-dark)", fontSize: "1.05rem", maxWidth: "44ch" }}>
                        Tell us your market and where you're stuck. We'll match you with the right people and get your pipeline moving.
                    </p>
                    <form className="lead-form" id="leadForm" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="field">
                                <label htmlFor="name">Your name *</label>
                                <input id="name" name="name" type="text" required placeholder="Jane Investor" />
                            </div>
                            <div className="field">
                                <label htmlFor="phone">Phone *</label>
                                <input id="phone" name="phone" type="tel" required placeholder="(555) 000-0000" />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="you@company.com" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">What do you need?</label>
                            <textarea id="message" name="message" placeholder="I wholesale in the Atlanta metro and need cold callers plus an acquisitions manager..."></textarea>
                        </div>
                        <button className="btn btn-primary btn-arrow" type="submit" disabled={isSubmitting} style={{ justifyContent: "center" }}>
                            {isSubmitting ? "Sending..." : "Send message"}
                        </button>
                    </form>
                </div>

                <aside className="contact-side reveal">
                    <h3>Talk to us directly</h3>
                    <p className="subtle">Prefer to skip the form? Reach us any of these ways — we usually reply the same day.</p>
                    <div className="cline">
                        <div className="cic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.6 9.8a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg></div>
                        <div className="ct"><span>Call</span><a href="tel:+18727583022">1 (872) 758-3022</a></div>
                    </div>
                    <div className="cline">
                        <div className="cic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></div>
                        <div className="ct"><span>Email</span><a href="mailto:hello@moremoneyrealty.com">hello@moremoneyrealty.com</a></div>
                    </div>
                    <div className="cline">
                        <div className="cic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></div>
                        <div className="ct"><span>Hours</span><b>Mon–Sat · 8am–9pm ET</b></div>
                    </div>
                    <a className="btn wa-btn btn-arrow" href="https://wa.me/message/OLY3T66O7Y3HJ1" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
                </aside>
            </div>
        </section>
    );
}
