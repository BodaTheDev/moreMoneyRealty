import Link from "next/link";
import React from "react";

export function Stats() {
    return (
        <section className="stats" aria-label="At a glance">
            <div className="wrap">
                <div className="stats-grid">
                    <div className="stat reveal"><div className="n">50+</div><div className="l">Properties clients closed this year</div></div>
                    <div className="stat reveal"><div className="n">$3M+</div><div className="l">In sales our system has driven</div></div>
                    <div className="stat reveal"><div className="n">~40</div><div className="l">Qualified leads / month per caller</div></div>
                    <div className="stat reveal"><div className="n">7</div><div className="l">Roles we recruit &amp; train</div></div>
                </div>
            </div>
        </section>
    );
}

export function Founder() {
    return (
        <section className="block founder">
            <span className="wm wm-emblem" aria-hidden="true"><svg viewBox="0 0 100 100"><use href="#mmr-m" /></svg></span>
            <div className="wrap founder-grid">
                <div className="founder-copy reveal">
                    <p className="eyebrow">Who&apos;s behind it</p>
                    <h2 style={{ marginTop: 16 }}>Built by an operator.<br />Not an agency.</h2>
                    <p className="big">More Money Realty is run by Moe Ali. Before it was a service it was a track record.</p>
                    <p className="body">Moe spent <b>years leading acquisitions</b> and more running operations and sales, and built a team that closed <b>over $3 million</b> in deals. That same system now sits behind every caller and every hire we place for you. You are not renting seats. You are plugging into a machine that already works.</p>
                    <div className="signed">
                        <span className="av">M</span>
                        <span className="who"><b>Moe Ali</b><span>Founder · More Money Realty</span></span>
                    </div>
                </div>
                <div className="proof-row reveal">
                    <div className="proof"><div className="pn">$3M+</div><div className="pl">In sales built and led</div></div>
                    <div className="proof"><div className="pn">50+</div><div className="pl">Client closings this year</div></div>
                    <div className="proof"><div className="pn">3</div><div className="pl">Seats led first-hand: acquisitions, ops &amp; sales</div></div>
                    <div className="proof"><div className="pn">U.S.</div><div className="pl">Investors served coast to coast</div></div>
                </div>
            </div>
        </section>
    );
}

export function Process() {
    return (
        <section className="block sec-light" id="process">
            <div className="wrap">
                <div className="sec-head reveal">
                    <p className="eyebrow">The process</p>
                    <h2>From first dial to a full pipeline</h2>
                    <p>Five simple steps. You bring the dialer and the list. We bring trained people and a process that turns outreach into closed deals.</p>
                </div>
                <div className="steps">
                    <div className="step reveal"><div className="num">01</div><h3>Discovery call</h3><p>We learn your market, buy box, and script preferences so your team sounds like part of your business.</p></div>
                    <div className="step reveal"><div className="num">02</div><h3>Meet your people</h3><p>We match you with trained, English-fluent talent who specialize in U.S. real estate.</p></div>
                    <div className="step reveal"><div className="num">03</div><h3>Plug in your tools</h3><p>You supply the dialer — Batch, Mojo, CallTools — and your lists. We handle the rest.</p></div>
                    <div className="step reveal"><div className="num">04</div><h3>We work your pipeline</h3><p>Callers dial and qualify. Acquisitions lock up deals. Dispo moves them to buyers.</p></div>
                    <div className="step wide reveal">
                        <div className="num">05</div>
                        <h3>Deals close — then you scale</h3>
                        <p>Qualified leads land in your CRM and deals move to close. Want more capacity? Add callers, or bring on lead managers, acquisitions, dispositions, transaction coordinators, sales managers, and IT admins through us.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Roles() {
    return (
        <section className="block sec-tint" id="team">
            <div className="wrap">
                <div className="sec-head center reveal">
                    <p className="eyebrow">Build your team</p>
                    <h2>Staff your entire operation</h2>
                    <p>Start with cold calling or build the whole back office. Every hire is recruited, trained, and managed to work like part of your company.</p>
                </div>
                <div className="roles-grid">
                    <div className="role reveal" style={{ "--rc": "#C8A046" } as React.CSSProperties}>
                        <div className="ric"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.6 9.8a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg></div>
                        <h3>Cold Callers</h3>
                        <p>Fill the top of your funnel with qualified, motivated-seller leads — trained on U.S. scripts, rebuttals, and compliance.</p>
                        <span className="rtag">From $1,500 / mo</span>
                    </div>
                    <div className="role reveal" style={{ "--rc": "#18A06A" } as React.CSSProperties}>
                        <div className="ric"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" /><path d="m9 14 2 2 4-4" /></svg></div>
                        <h3>Acquisitions Managers</h3>
                        <p>Turn leads into signed contracts. Skilled at rapport, underwriting the offer, and locking up the deal.</p>
                        <span className="rtag">Custom pricing</span>
                    </div>
                    <div className="role reveal" style={{ "--rc": "#12A79B" } as React.CSSProperties}>
                        <div className="ric"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.5V19l4 2v-8.5L22 3z" /></svg></div>
                        <h3>Lead Managers</h3>
                        <p>Nurture and route every lead. Keep the pipeline organized so nothing slips through the cracks.</p>
                        <span className="rtag">Custom pricing</span>
                    </div>
                    <div className="role reveal" style={{ "--rc": "#C77B4A" } as React.CSSProperties}>
                        <div className="ric"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h12l6 5-6 5H3z" /><path d="M7 12h.01" /></svg></div>
                        <h3>Dispositions Managers</h3>
                        <p>Move contracts to your buyers fast. Build and work your cash-buyer list for maximum spread.</p>
                        <span className="rtag">Custom pricing</span>
                    </div>
                    <div className="role reveal" style={{ "--rc": "#6B7FC7" } as React.CSSProperties}>
                        <div className="ric"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5" /></svg></div>
                        <h3>Transaction Coordinators</h3>
                        <p>Run every deal from contract to close. Paperwork, title, and deadlines handled without the chase.</p>
                        <span className="rtag">Custom pricing</span>
                    </div>
                    <div className="role reveal" style={{ "--rc": "#B268A8" } as React.CSSProperties}>
                        <div className="ric"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 14l3-4 3 3 4-6" /><path d="m17 7 0 4-4 0" /></svg></div>
                        <h3>Sales Managers</h3>
                        <p>Lead and coach the team. Set targets, run the numbers, and keep everyone closing at a high level.</p>
                        <span className="rtag">Custom pricing</span>
                    </div>
                    <div className="role reveal" style={{ "--rc": "#4FA3B8" } as React.CSSProperties}>
                        <div className="ric"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="6" rx="1.5" /><rect x="2" y="14" width="20" height="6" rx="1.5" /><path d="M6 7h.01M6 17h.01" /></svg></div>
                        <h3>IT &amp; Admin</h3>
                        <p>Keep your CRM, dialers, and systems running. Back-office and tech support so your team just works.</p>
                        <span className="rtag">Custom pricing</span>
                    </div>
                    <div className="role reveal" style={{ "--rc": "#C8A046", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", background: "linear-gradient(160deg,var(--ink),#17291F)", color: "#fff", borderColor: "var(--ink-3)" } as React.CSSProperties}>
                        <h3 style={{ color: "#fff" }}>Not sure what you need?</h3>
                        <p style={{ color: "#C4CFC5" }}>Tell us your bottleneck and we&apos;ll build the right seat — or the whole team — around it.</p>
                        <Link className="btn btn-primary btn-arrow" href="#contact" style={{ marginTop: 18 }}>Talk it through</Link>
                    </div>
                </div>
                <div className="roles-note reveal"><span><b>You bring the dialer and the list.</b> We bring the people, the training, and the process.</span></div>
            </div>
        </section>
    );
}

export function Features() {
    return (
        <section className="block sec-dark" id="why">
            <div className="wrap">
                <div className="sec-head reveal">
                    <p className="eyebrow">Why More Money Realty</p>
                    <h2>Trained talent, held accountable</h2>
                    <p>Anyone can hand you a dialer and a warm body. We place people who understand U.S. real estate — and we watch the numbers so quality never slips.</p>
                </div>
                <div className="feat-grid">
                    <div className="feat reveal">
                        <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg></div>
                        <h3>Trained on U.S. real estate</h3>
                        <p>Scripts, rebuttals, and compliance for wholesaling and off-market acquisitions — not generic call-center reads.</p>
                    </div>
                    <div className="feat reveal">
                        <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5h12v9H8l-4 3v-3H3z" /><path d="M8 9h.01M11.5 9h.01" /></svg></div>
                        <h3>Fluent, confident English</h3>
                        <p>Your prospects feel like they&apos;re talking to a professional — not someone reading off a page.</p>
                    </div>
                    <div className="feat reveal">
                        <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 14l3-4 3 3 4-6" /></svg></div>
                        <h3>Monitored and accountable</h3>
                        <p>We track talk-time, attendance, and QA on every hire, so you can focus on closing deals.</p>
                    </div>
                    <div className="feat reveal">
                        <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /><path d="M2 21c0-3.9 3.1-7 7-7" /><path d="M16 11l2 2 4-4" /></svg></div>
                        <h3>Rigorously screened</h3>
                        <p>We interview hundreds of candidates to place the few who deliver results from day one.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Pricing() {
    return (
        <section className="block sec-light" id="pricing">
            <div className="wrap">
                <div className="sec-head center reveal">
                    <p className="eyebrow">Pricing</p>
                    <h2>Simple pricing. Real pipeline.</h2>
                    <p>Start with one dedicated caller and scale into a full team when you&apos;re ready. No dialer costs or lead-list markups — you keep control of both.</p>
                </div>
                <div className="price-grid">
                    <div className="price lead-plan reveal">
                        <span className="badge">Most popular</span>
                        <span className="ptag">Dedicated caller</span>
                        <h3>One full-time caller</h3>
                        <div className="amount"><span className="val">$1,500</span><span className="per">/ month</span></div>
                        <ul className="plist">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>One dedicated caller aligned to your market</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>Trained on U.S. wholesaling scripts, rebuttals &amp; compliance</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>~40 qualified leads a month, delivered to your CRM</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>Weekly QA snapshot + attendance &amp; performance monitoring</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>U.S. time-zone shift coverage</li>
                        </ul>
                        <Link className="btn btn-primary btn-arrow" href="#contact">Book a call</Link>
                    </div>
                    <div className="price alt-plan reveal">
                        <span className="ptag">Full team &amp; scale</span>
                        <h3>Any role, or the whole operation</h3>
                        <div className="amount"><span className="val custom">Custom</span><span className="per">let&apos;s talk</span></div>
                        <ul className="plist">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>Acquisitions, dispositions &amp; lead managers</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>Transaction coordinators, sales managers &amp; IT admins</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>Add callers for more outreach &amp; faster results</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>Priority replacement &amp; centralized reporting</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>Volume pricing tailored to your goals</li>
                        </ul>
                        <Link className="btn btn-ghost on-light btn-arrow" href="#contact">Talk to us</Link>
                    </div>
                </div>
                <p className="price-note reveal"><b>The best operators don&apos;t do it all themselves.</b> They build a team — we help you build yours.</p>
            </div>
        </section>
    );
}

export function Testimonials() {
    return (
        <section className="block sec-dark wm-band" id="results">
            <div className="wrap">
                <div className="result-hero reveal">
                    <div className="rn">50+</div>
                    <div className="rl">properties closed by clients using our team this year</div>
                </div>
                <div className="sec-head center reveal" style={{ marginBottom: 8 }}>
                    <p className="eyebrow">What clients say</p>
                    <h2>Investors who stopped doing it all alone</h2>
                </div>
                <div className="t-grid" style={{ marginTop: 44 }}>
                    <div className="t reveal">
                        <div className="stars">★★★★★</div>
                        <blockquote>&quot;We&apos;ve seen a significant increase in qualified leads since partnering with this team. They understand our goals and always provide excellent support. We&apos;re very happy with the results.&quot;</blockquote>
                        <div className="who">Real estate investor</div>
                    </div>
                    <div className="t reveal">
                        <div className="stars">★★★★★</div>
                        <blockquote>&quot;This agency has become one of our most trusted partners. The quality of the leads is exceptional, and their commitment to helping us grow shows in everything they do.&quot;</blockquote>
                        <div className="who">Wholesaling team</div>
                    </div>
                    <div className="t reveal">
                        <div className="stars">★★★★★</div>
                        <blockquote>&quot;We couldn&apos;t be more satisfied. They generated a large number of valuable leads, and the whole process has been smooth, transparent, and highly effective. Highly recommended.&quot;</blockquote>
                        <div className="who">Acquisitions lead</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer>
            <span className="wm wm-emblem" aria-hidden="true"><svg viewBox="0 0 100 100"><use href="#mmr-m" /></svg></span>
            <div className="wrap">
                <div className="foot-grid">
                    <div className="foot-brand">
                        <Link className="brand" href="#top"><svg className="mark" viewBox="0 0 108 108" aria-hidden="true"><use href="#mmr-emblem" /></svg><span>More <b>Money</b> Realty</span></Link>
                        <p>Done-for-you cold calling and full real estate teams that fill investors&apos; pipelines with motivated sellers. Built on trained people, tight process, and real follow-through.</p>
                    </div>
                    <div className="foot-col">
                        <h4>Company</h4>
                        <Link href="#process">How it works</Link>
                        <Link href="#team">Team we staff</Link>
                        <Link href="#why">Why us</Link>
                        <Link href="#results">Results</Link>
                    </div>
                    <div className="foot-col">
                        <h4>Get started</h4>
                        <Link href="#contact">Book a call</Link>
                        <Link href="#pricing">Pricing</Link>
                        <a href="https://wa.me/message/OLY3T66O7Y3HJ1" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                    <div className="foot-col">
                        <h4>Contact</h4>
                        <a href="tel:+18727583022">1 (872) 758-3022</a>
                        <a href="mailto:hello@moremoneyrealty.com">hello@moremoneyrealty.com</a>
                        <Link href="#contact">Mon–Sat · 8am–9pm ET</Link>
                    </div>
                </div>
                <div className="foot-bottom">
                    <span>© {new Date().getFullYear()} More Money Realty, LLC · A Wyoming Limited Liability Company</span>
                    <span className="areas">Based in Atlanta metro · Serving investors nationwide</span>
                </div>
            </div>
        </footer>
    );
}
