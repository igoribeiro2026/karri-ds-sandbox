"use client";

import { useEffect, useRef, useState } from "react";
import { DetailScreen } from "./detail-screen";
import {
    AlertCircle,
    CalendarDate,
    ChevronRight,
    MarkerPin02,
    ShieldOff,
    ShieldTick,
    User01,
} from "@untitledui/icons";
import Image from "next/image";

/* Figma-exported logos (node IDs: 22:303, 22:985, 22:1133, 12:1680) */
const LOGOS = {
    nationwide: "/logo-nationwide.png",
    ageas:      "/logo-ageas.png",
    aviva:      "/logo-aviva.png",
    connells:   "/logo-connells.png",
};

/* ─────────────────────────────────────────────────
   Figma: node 2:2165 "Home -"  375 × 812
   All spacing/color/font values extracted 1:1
───────────────────────────────────────────────── */

/* ── Status Bar ── */
function StatusBar() {
    return (
        <div className="flex items-center justify-between" style={{ padding: "21px 24px 19px" }}>
            <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 17, lineHeight: "22px", color: "rgba(0,0,0,1)" }}>
                9:41
            </span>
            <div className="flex items-center" style={{ gap: 7 }}>
                {/* Cellular signal */}
                <svg width="19" height="12" viewBox="0 0 19 12" fill="none">
                    <rect x="0" y="9" width="3" height="3" rx="0.5" fill="black" />
                    <rect x="4" y="6" width="3" height="6" rx="0.5" fill="black" />
                    <rect x="8" y="3.5" width="3" height="8.5" rx="0.5" fill="black" />
                    <rect x="12" y="0" width="3" height="12" rx="0.5" fill="black" />
                    <rect x="16" y="0" width="3" height="12" rx="0.5" fill="black" opacity="0.3" />
                </svg>
                {/* WiFi */}
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                    <circle cx="8.5" cy="10.5" r="1.5" fill="black" />
                    <path d="M5.05 7.45a4.88 4.88 0 0 1 6.9 0" stroke="black" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                    <path d="M1.72 4.28a9.58 9.58 0 0 1 13.56 0" stroke="black" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                </svg>
                {/* Battery */}
                <div className="flex items-center" style={{ gap: 1 }}>
                    <div style={{ width: 25, height: 13, borderRadius: 4.3, border: "1px solid rgba(0,0,0,0.35)", padding: 2, boxSizing: "border-box" }}>
                        <div style={{ width: "80%", height: "100%", background: "black", borderRadius: 2.5 }} />
                    </div>
                    <div style={{ width: 1.5, height: 4, background: "rgba(0,0,0,0.4)", borderRadius: "0 1px 1px 0" }} />
                </div>
            </div>
        </div>
    );
}

/* ── Company Logo ── */
function CompanyLogo({ src, alt, width = 96, height = 18 }: { src: string; alt: string; width?: number; height?: number }) {
    return (
        <div style={{ width, height, position: "relative", flexShrink: 0 }}>
            <Image src={src} alt={alt} fill style={{ objectFit: "contain", objectPosition: "left" }} />
        </div>
    );
}

/* ── Sub Section Row (inside Life Insurance card) ── */
function SubSection({ label, value, linkText, shieldOff = false }: {
    label: string;
    value?: string;
    linkText?: string;
    shieldOff?: boolean;
}) {
    return (
        <div className="flex items-center justify-between" style={{ background: "rgba(247,248,250,1)", padding: 16 }}>
            <div className="flex items-center" style={{ gap: 8 }}>
                {shieldOff
                    ? <ShieldOff size={24} style={{ color: "rgba(217,45,32,1)" }} />
                    : <ShieldTick size={24} style={{ color: "rgba(3,152,85,1)" }} />
                }
                <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(0,0,0,1)" }}>
                    {label}
                </span>
            </div>
            <div className="flex items-center" style={{ gap: 8 }}>
                {value && (
                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 12, lineHeight: "18px", color: "rgba(0,0,0,1)" }}>
                        {value}
                    </span>
                )}
                {linkText && (
                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 12, lineHeight: "18px", color: "rgba(36,86,131,1)" }}>
                        {linkText}
                    </span>
                )}
                <ChevronRight size={16} style={{ color: shieldOff ? "rgba(147,157,160,1)" : "rgba(164,167,174,1)" }} />
            </div>
        </div>
    );
}

/* ── Main ── */
export const HomeScreen = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0); // 0 → 1 continuous
    const [page, setPage] = useState<"home" | "detail">("home");

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        // Animate over a 80px window: scrollTop 60 → 140
        const handler = () => {
            const p = Math.min(1, Math.max(0, (el.scrollTop - 60) / 80));
            setScrollProgress(p);
        };
        el.addEventListener("scroll", handler, { passive: true });
        return () => el.removeEventListener("scroll", handler);
    }, []);

    const sp = scrollProgress; // shorthand

    return (
        <div className="flex min-h-dvh items-center justify-center" style={{ background: "#CBD5E1" }}>

            {/* iPhone frame: 375×812 */}
            <div style={{ width: 375, height: 812, borderRadius: 44, background: "linear-gradient(180deg, #F7F8FA 0%, #E7EAF0 41%)", position: "relative", overflow: "hidden", boxShadow: "0 0 0 10px #1D2939, 0 30px 80px rgba(0,0,0,0.55)", flexShrink: 0 }}>

                {/* Notch — above all panels */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 130, height: 28, background: "#1D2939", borderBottomLeftRadius: 18, borderBottomRightRadius: 18, zIndex: 30 }} />

                {/* ── STICKY HEADER: lives at iPhone-frame level so the slide-wrapper
                       transform never affects it. Hidden when on detail page. ── */}
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
                    background: `rgba(255,255,255,${sp})`,
                    transition: "opacity 0.25s ease",
                    opacity: page === "detail" ? 0 : 1,
                    pointerEvents: page === "detail" ? "none" : "auto",
                    willChange: "background",
                }}>
                    <StatusBar />

                    {/* Properties2_condensed — Figma 28:419: 375×48, radii:[0,0,32,32] */}
                    <div style={{
                        height: sp * 48,
                        overflow: "hidden",
                        opacity: sp,
                        willChange: "transform, opacity",
                    }}>
                        <div style={{
                            background: "rgba(255,255,255,1)",
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            borderBottomLeftRadius: 32,
                            borderBottomRightRadius: 32,
                            display: "flex",
                            padding: "0 24px 16px 24px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                            alignSelf: "stretch",
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 12, lineHeight: "16px", color: "rgba(28,37,46,1)", textAlign: "center" }}>
                                    53 Bollingbroke Grove
                                </span>
                                <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "rgba(71,71,71,1)", textAlign: "center" }}>
                                    Wandsworth, London, SW11 6HR
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── SLIDE WRAPPER: 750×812, slides left to show detail ── */}
                <div style={{
                    position: "absolute", top: 0, left: 0,
                    width: 750, height: 812,
                    display: "flex",
                    transform: page === "detail" ? "translateX(-375px)" : "translateX(0)",
                    transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
                }}>

                {/* ── HOME PANEL: 375×812 ── */}
                <div style={{ width: 375, height: 812, flexShrink: 0, position: "relative" }}>

                {/* ── SCROLLABLE CONTENT ── */}
                <div ref={scrollRef} style={{ position: "absolute", inset: 0, overflowY: "auto", scrollbarWidth: "none", paddingTop: 62 }}>

                    {/* ── TOP SECTION ── */}
                    <div style={{ background: "transparent" }}>

                        {/* image 2: 375×40 — Connells logo banner (node 12:1680) */}
                        <div style={{ width: 375, height: 40, position: "relative" }}>
                            <Image src={LOGOS.connells} alt="Connells" fill style={{ objectFit: "cover" }} priority />
                        </div>

                        {/* Hi Sarah: SF Pro 590 14px lineH:22, pad:12/0/12/16 */}
                        <div style={{ padding: "12px 0", textAlign: "center" }}>
                            <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 14, lineHeight: "22px", color: "rgba(0,0,0,1)" }}>
                                Hi Sarah
                            </span>
                        </div>

                        {/* Properties2 expanded: fades out as condensed slides in
                            Figma 27:358: w:375, h:144, pad:8/24, justify:center, align:center, gap:12 */}
                        <div style={{
                            display: "flex", width: 375, height: 144,
                            padding: "8px 24px", justifyContent: "center", alignItems: "center", gap: 12,
                            opacity: 1 - sp,
                            pointerEvents: sp > 0.5 ? "none" : "auto",
                            willChange: "opacity",
                        }}>
                            {/* Address card: 325×128, r:16, pad:16/12, gap:10, flex-col center */}
                            <div className="flex flex-col items-center" style={{ background: "rgba(255,255,255,1)", borderRadius: 16, padding: "16px 12px", gap: 10, boxShadow: "0px 1px 3px rgba(10,13,18,0.1)", width: "100%" }}>
                                {/* Featured icon: 48×48, r:24 (circle), rgba(127,86,217) */}
                                <div className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 24, background: "rgba(127,86,217,1)", flexShrink: 0 }}>
                                    <MarkerPin02 size={24} className="text-white" />
                                </div>
                                {/* Frame 2981: 301×36, flex-col center, gap:-2 */}
                                <div className="flex flex-col items-center" style={{ width: 301, gap: -2 }}>
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "20px", color: "rgba(0,0,0,1)", textAlign: "center" }}>
                                        53 Bollingbroke Grove
                                    </span>
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(83,88,98,1)", textAlign: "center" }}>
                                        Wandsworth, London, SW11 6HR
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── CARDS: "Property products/Residential" — drawer at y:329 (37px gap after Top y:292) ── */}
                    <div style={{ borderRadius: "32px 32px 0 0", background: "rgba(247,248,250,1)", padding: "24px 24px 108px", display: "flex", flexDirection: "column", gap: 12, marginTop: 37 }}>

                        {/* ── MORTGAGE CARD: 327×204, r:16, pad:16, gap:16 ── */}
                        <div onClick={() => setPage("detail")} style={{ background: "rgba(255,255,255,1)", borderRadius: 16, padding: 16, display: "flex", flexDirection: "column", gap: 16, boxShadow: "0px 1px 3px rgba(10,13,18,0.1)", cursor: "pointer" }}>
                            {/* Logo: 134×22 — Nationwide (node 22:303) */}
                            <div style={{ width: 134, height: 22, position: "relative" }}>
                                <Image src={LOGOS.nationwide} alt="Nationwide" fill style={{ objectFit: "contain", objectPosition: "left" }} />
                            </div>
                            {/* Title: Inter 600 12px lineH:18 */}
                            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 12, lineHeight: "18px", color: "rgba(0,0,0,1)" }}>
                                2 yr fixed mortgage&nbsp;&nbsp;|&nbsp;&nbsp;End date 23 Apr 2027
                            </span>
                            {/* Data row: gap:24 */}
                            <div className="flex" style={{ gap: 24 }}>
                                <div className="flex flex-col">
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(83,88,98,1)" }}>Monthly payment</span>
                                    <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 26, lineHeight: "32px", color: "rgba(0,0,0,1)" }}>£895.95</span>
                                </div>
                                <div className="flex flex-col">
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(83,88,98,1)" }}>Interest rate</span>
                                    <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 26, lineHeight: "32px", color: "rgba(0,0,0,1)" }}>3.87%</span>
                                </div>
                            </div>
                            {/* Line + notification: gap:12 — "Expires in 60 days" (Figma 12:2022) */}
                            <div className="flex flex-col" style={{ gap: 12 }}>
                                <div style={{ height: 1, background: "rgba(0,0,0,0.08)" }} />
                                {/* alert-circle rgba(254,200,74) + text fw:600 fs:12 */}
                                <div className="flex items-center" style={{ gap: 8 }}>
                                    <AlertCircle size={24} style={{ color: "rgba(254,200,74,1)", flexShrink: 0 }} />
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 12, lineHeight: "18px", color: "rgba(0,0,0,1)" }}>Expires in 60 days</span>
                                </div>
                            </div>
                        </div>

                        {/* ── HOME INSURANCE ── */}
                        <div style={{ background: "rgba(255,255,255,1)", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24, alignSelf: "stretch", boxShadow: "0px 1px 3px rgba(10,13,18,0.1)" }}>
                            <div className="flex items-center justify-between" style={{ width: "100%" }}>
                                {/* Ageas logo: 102×29 */}
                                <div style={{ width: 102, height: 29, position: "relative", flexShrink: 0 }}>
                                    <Image src={LOGOS.ageas} alt="Ageas" fill style={{ objectFit: "contain", objectPosition: "left" }} />
                                </div>
                                {/* Badge: opacity:0 per Figma */}
                                <div style={{ opacity: 0, flexShrink: 0 }}>
                                    <div style={{ background: "rgba(255,250,235,1)", borderRadius: 4, padding: "2px 8px" }}>
                                        <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 12, lineHeight: "18px" }}>Ends soon</span>
                                    </div>
                                </div>
                            </div>
                            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 12, lineHeight: "18px", color: "rgba(0,0,0,1)" }}>
                                Home Insurance&nbsp;&nbsp;|&nbsp;&nbsp;Policy no: PO12345678
                            </span>
                            {/* Montly rate: 279×50, gap:24 */}
                            <div className="flex" style={{ gap: 24 }}>
                                <div className="flex flex-col">
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(83,88,98,1)" }}>Monthly payment</span>
                                    <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 600, fontSize: 26, lineHeight: "32px", color: "rgba(0,0,0,1)" }}>£23.24</span>
                                </div>
                                <div className="flex flex-col">
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(83,88,98,1)" }}>Interest rate</span>
                                    <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 26, lineHeight: "32px", color: "rgba(0,0,0,1)" }}>3.87%</span>
                                </div>
                            </div>
                        </div>

                        {/* ── LIFE INSURANCE: 327×346, r:16, pad:16, gap:24 ── */}
                        <div style={{ background: "rgba(255,255,255,1)", borderRadius: 16, padding: 16, display: "flex", flexDirection: "column", gap: 24, boxShadow: "0px 1px 3px rgba(10,13,18,0.1)" }}>
                            {/* Aviva title: flex-col, align-start, gap:24, stretch */}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24, alignSelf: "stretch" }}>
                                <CompanyLogo src={LOGOS.aviva} alt="Aviva" />
                                <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 12, lineHeight: "18px", color: "rgba(0,0,0,1)" }}>
                                    Life Insurance&nbsp;&nbsp;|&nbsp;&nbsp;Policy number PO12345678
                                </span>
                            </div>
                            {/* Data points: gap:24 */}
                            <div className="flex" style={{ gap: 24 }}>
                                <div className="flex flex-col">
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(83,88,98,1)" }}>Total monthly payment</span>
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 24, lineHeight: "32px", color: "rgba(0,0,0,1)" }}>120.95</span>
                                </div>
                                <div className="flex flex-col">
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(83,88,98,1)" }}>Term remaining</span>
                                    <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 26, lineHeight: "32px", color: "rgba(0,0,0,1)" }}>14yrs</span>
                                </div>
                            </div>
                            {/* Sub sections: 295×168, no gap, r:8 overflow hidden */}
                            <div className="flex flex-col overflow-hidden" style={{ borderRadius: 8 }}>
                                <SubSection label="Life Insurance" value="£26.00" />
                                <div style={{ height: 1, background: "rgba(255,255,255,1)" }} />
                                <SubSection label="Critical illness" value="£34.45" />
                                <div style={{ height: 1, background: "rgba(255,255,255,1)" }} />
                                <SubSection label="Income protection" linkText="Find out more" shieldOff />
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── TAB BAR: 375×95, white, pad:16/25/25/25 ── */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 95, background: "rgba(255,255,255,1)", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "16px 25px 25px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                    {/* Glass pill: 333×54 r:64 */}
                    <div style={{ width: 333, height: 54, borderRadius: 64, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
                        {/* Active: Tab1 selection bg 95×54, r:100, rgba(237,237,237) */}
                        <div style={{ position: "absolute", left: 0, top: 0, width: 95, height: 54, borderRadius: 100, background: "rgba(237,237,237,1)" }} />

                        {/* Tab 1 — Home (active): 95×54, pad:6/8/7/8, gap:1 */}
                        <div className="flex flex-col items-center" style={{ width: 95, height: 54, padding: "6px 8px 7px", gap: 1, position: "relative", zIndex: 1 }}>
                            <div style={{ padding: "4px 0" }}>
                                {/* home-filled icon: 20×20, rgba(14,112,144) */}
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M1 6.5L8.5 1l7.5 5.5V16a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V6.5Z" fill="rgba(14,112,144,1)" />
                                    <path d="M5.5 16.5V11h6v5.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 10, lineHeight: "12px", color: "rgba(14,112,144,1)" }}>Home</span>
                        </div>

                        {/* Tab 2 — Appointments: 138×54, pad:6/8/7/8, gap:1 */}
                        <div className="flex flex-col items-center" style={{ width: 138, height: 54, padding: "6px 8px 7px", gap: 1 }}>
                            <div style={{ padding: "4px 0" }}>
                                <CalendarDate size={20} style={{ color: "rgba(14,112,144,1)" }} />
                            </div>
                            <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 510, fontSize: 10, lineHeight: "12px", color: "rgba(14,112,144,1)" }}>Appointments</span>
                        </div>

                        {/* Tab 3 — Account: 112×54, pad:6/8/7/8, gap:1 */}
                        <div className="flex flex-col items-center" style={{ width: 112, height: 54, padding: "6px 8px 7px", gap: 1 }}>
                            <div style={{ padding: "4px 0" }}>
                                <User01 size={20} style={{ color: "rgba(14,112,144,1)" }} />
                            </div>
                            <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 510, fontSize: 10, lineHeight: "12px", color: "rgba(14,112,144,1)" }}>Account</span>
                        </div>
                    </div>
                </div>

                </div>{/* end HOME PANEL */}

                {/* ── DETAIL PANEL: 375×812 ── */}
                <div style={{ width: 375, height: 812, flexShrink: 0, position: "relative" }}>
                    <DetailScreen onBack={() => setPage("home")} />
                </div>

                </div>{/* end SLIDE WRAPPER */}

            </div>
        </div>
    );
};
