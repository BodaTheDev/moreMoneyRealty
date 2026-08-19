"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="nav">
            <div className="wrap nav-inner">
                <Link className="brand" href="#top" aria-label="More Money Realty home">
                    <svg className="mark" viewBox="0 0 108 108" aria-hidden="true">
                        <use href="#mmr-emblem" />
                    </svg>
                    <span>More <b>Money</b> Realty</span>
                </Link>
                <nav className={`nav-links ${isOpen ? "open" : ""}`} id="menu" aria-label="Primary">
                    <Link href="#process" onClick={closeMenu}>How it works</Link>
                    <Link href="#team" onClick={closeMenu}>Team we staff</Link>
                    <Link href="#pricing" onClick={closeMenu}>Pricing</Link>
                    <Link href="#results" onClick={closeMenu}>Results</Link>
                    <Link href="#contact" onClick={closeMenu}>Contact</Link>
                </nav>
                <div className="nav-right">
                    <Link className="btn btn-primary" href="#contact">Book a call</Link>
                    <button
                        className="nav-toggle"
                        onClick={toggleMenu}
                        aria-label="Open menu"
                        aria-expanded={isOpen}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="17" x2="20" y2="17" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
