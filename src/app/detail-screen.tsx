"use client";

import Image from "next/image";
import { AlertCircle, ChevronLeft } from "@untitledui/icons";

/* ── Status Bar (same as home) ── */
function StatusBar() {
    return (
        <div className="flex items-center justify-between" style={{ padding: "21px 24px 19px" }}>
            <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 17, lineHeight: "22px", color: "rgba(0,0,0,1)" }}>
                9:41
            </span>
            <div className="flex items-center" style={{ gap: 7 }}>
                <svg width="19" height="12" viewBox="0 0 19 12" fill="none">
                    <rect x="0" y="9" width="3" height="3" rx="0.5" fill="black" />
                    <rect x="4" y="6" width="3" height="6" rx="0.5" fill="black" />
                    <rect x="8" y="3.5" width="3" height="8.5" rx="0.5" fill="black" />
                    <rect x="12" y="0" width="3" height="12" rx="0.5" fill="black" />
                    <rect x="16" y="0" width="3" height="12" rx="0.5" fill="black" opacity="0.3" />
                </svg>
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                    <circle cx="8.5" cy="10.5" r="1.5" fill="black" />
                    <path d="M5.05 7.45a4.88 4.88 0 0 1 6.9 0" stroke="black" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                    <path d="M1.72 4.28a9.58 9.58 0 0 1 13.56 0" stroke="black" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                </svg>
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

/* ── Detail Row (mortgage data list) ── */
function DetailRow({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 40, padding: "8px 0", borderBottom: "1px solid rgba(14,15,12,0.04)" }}>
            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "rgba(0,0,0,1)" }}>
                {label}
            </span>
            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "rgba(113,118,128,1)" }}>
                {value}
            </span>
        </div>
    );
}

/* ── Property Badge (vertical chip with icon + label) ── */
function PropertyBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div style={{ background: "rgba(249,249,249,1)", borderRadius: 4, padding: 8, display: "flex", flexDirection: "column", gap: 4, flex: 1, alignItems: "center" }}>
            <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {icon}
            </div>
            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(0,0,0,1)" }}>
                {label}
            </span>
        </div>
    );
}

/* ── Main ── */
export function DetailScreen({ onBack }: { onBack: () => void }) {
    return (
        <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,1)" }}>

            {/* ── TOP BAR NAV: 375×116, bg:rgba(247,248,250,1) ── */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 116, background: "rgba(247,248,250,1)", zIndex: 10 }}>
                <StatusBar />
                {/* Toolbar: 375×54 */}
                <div style={{ height: 54, display: "flex", alignItems: "center", padding: "5px 16px", position: "relative" }}>
                    {/* Back button: 44×44, r:296, bg:rgba(247,247,247,1) */}
                    <button
                        onClick={onBack}
                        style={{ width: 44, height: 44, borderRadius: 296, background: "rgba(247,247,247,1)", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer", flexShrink: 0 }}
                    >
                        <ChevronLeft size={20} style={{ color: "rgba(64,64,64,1)" }} />
                    </button>
                    {/* Title: "Mortgage details" fw:590 fs:17 lh:22 #333 — centered */}
                    <span style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 17, lineHeight: "22px", color: "rgba(51,51,51,1)", whiteSpace: "nowrap" }}>
                        Mortgage details
                    </span>
                </div>
            </div>

            {/* ── SCROLLABLE CONTENT ── */}
            <div style={{ position: "absolute", inset: 0, overflowY: "auto", scrollbarWidth: "none", paddingTop: 116, paddingBottom: 76 }}>

                {/* Content details dynamic: pad:16/0/16/0 gap:12 */}
                <div style={{ display: "flex", flexDirection: "column", padding: "16px 0", gap: 12 }}>

                    {/* ── Home insurance block ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

                        {/* Mortgage card: 343×162, r:16, pad:16, gap:16 — mx:16 */}
                        <div style={{ margin: "0 16px", background: "rgba(255,255,255,1)", padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
                            <div style={{ width: 134, height: 22, position: "relative" }}>
                                <Image src="/logo-nationwide.png" alt="Nationwide" fill style={{ objectFit: "contain", objectPosition: "left" }} />
                            </div>
                            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 12, lineHeight: "18px", color: "rgba(0,0,0,1)" }}>
                                2 yr fixed mortgage&nbsp;&nbsp;|&nbsp;&nbsp;End date 23 Apr 2027
                            </span>
                            <div className="flex" style={{ gap: 24 }}>
                                <div className="flex flex-col">
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(83,88,97,1)" }}>Monthly payment</span>
                                    <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 26, lineHeight: "32px", color: "rgba(0,0,0,1)" }}>£895.95</span>
                                </div>
                                <div className="flex flex-col">
                                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "rgba(83,88,97,1)" }}>Interest rate</span>
                                    <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 600, fontSize: 26, lineHeight: "32px", color: "rgba(0,0,0,1)" }}>3.87%</span>
                                </div>
                            </div>
                            <div className="flex items-center" style={{ gap: 8 }}>
                                <AlertCircle size={24} style={{ color: "rgba(254,200,74,1)", flexShrink: 0 }} />
                                <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 12, lineHeight: "18px", color: "rgba(0,0,0,1)" }}>Expires in 60 days</span>
                            </div>
                        </div>

                    </div>

                    {/* ── Section divider ── */}
                    <div style={{ margin: "0 16px", height: 1, background: "rgba(14,15,12,0.08)" }} />

                    {/* ── Details section ── */}
                    <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 16 }}>

                        {/* Property address */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "rgba(0,0,0,1)" }}>
                                53 Bollingbroke Grove
                            </span>
                            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "rgba(83,88,97,1)" }}>
                                Wandsworth, London, SW11 6HR
                            </span>
                        </div>

                        {/* Property badges: 3 beds / 1 bathroom / Freehold / 4.2000 */}
                        <div style={{ display: "flex", gap: 8 }}>
                            <PropertyBadge label="3 beds" icon={
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4615 8.97436C18.4615 8.83275 18.3467 8.71795 18.2051 8.71795H1.79487C1.65326 8.71795 1.53846 8.83275 1.53846 8.97436V15.8974H0V8.97436C0 7.98308 0.803592 7.17949 1.79487 7.17949H18.2051C19.1964 7.17949 20 7.98308 20 8.97436V15.8974H18.4615V8.97436Z" fill="black"/>
                                    <path d="M17.4359 1.79487C17.4359 1.65326 17.3211 1.53846 17.1795 1.53846H2.82051C2.6789 1.53846 2.5641 1.65326 2.5641 1.79487V8.71795H1.02564V1.79487C1.02564 0.803592 1.82923 0 2.82051 0H17.1795C18.1708 0 18.9744 0.803592 18.9744 1.79487V8.71795H17.4359V1.79487Z" fill="black"/>
                                    <path d="M8.20513 7.94872V5.89744C8.20513 5.75582 8.09033 5.64103 7.94872 5.64103H4.87179C4.73018 5.64103 4.61538 5.75582 4.61538 5.89744V7.94872C4.61538 8.37355 4.27099 8.71795 3.84615 8.71795C3.42132 8.71795 3.07692 8.37355 3.07692 7.94872V5.89744C3.07692 4.90616 3.88051 4.10256 4.87179 4.10256H7.94872C8.94 4.10256 9.74359 4.90616 9.74359 5.89744V7.94872C9.74359 8.37355 9.39919 8.71795 8.97436 8.71795C8.54952 8.71795 8.20513 8.37355 8.20513 7.94872Z" fill="black"/>
                                    <path d="M15.3846 7.94872V5.89744C15.3846 5.75582 15.2698 5.64103 15.1282 5.64103H12.0513C11.9097 5.64103 11.7949 5.75582 11.7949 5.89744V7.94872C11.7949 8.37355 11.4505 8.71795 11.0256 8.71795C10.6008 8.71795 10.2564 8.37355 10.2564 7.94872V5.89744C10.2564 4.90616 11.06 4.10256 12.0513 4.10256H15.1282C16.1195 4.10256 16.9231 4.90616 16.9231 5.89744V7.94872C16.9231 8.37355 16.5787 8.71795 16.1538 8.71795C15.729 8.71795 15.3846 8.37355 15.3846 7.94872Z" fill="black"/>
                                    <path d="M19.2308 11.5385V13.0769H0.769231V11.5385H19.2308Z" fill="black"/>
                                </svg>
                            } />
                            <PropertyBadge label="1 bathroom" icon={
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.2308 10.7692C19.6556 10.7692 20 10.4248 20 10C20 9.57517 19.6556 9.23077 19.2308 9.23077L0.769231 9.23077C0.344396 9.23077 1.23509e-08 9.57516 0 10C2.39928e-08 10.4248 0.344396 10.7692 0.769231 10.7692L19.2308 10.7692Z" fill="black"/>
                                    <path d="M3.40972 18.747C3.21022 19.1221 3.35255 19.5879 3.72762 19.7874C4.1027 19.9869 4.56849 19.8446 4.76799 19.4695L5.73128 17.6585C5.93079 17.2834 5.78846 16.8176 5.41338 16.6181C5.0383 16.4186 4.57251 16.5609 4.37301 16.936L3.40972 18.747Z" fill="black"/>
                                    <path d="M14.7193 18.747C14.9189 19.1221 14.7765 19.5879 14.4014 19.7874C14.0264 19.9869 13.5606 19.8446 13.3611 19.4695L12.3978 17.6585C12.1983 17.2834 12.3406 16.8176 12.7157 16.6181C13.0908 16.4186 13.5566 16.5609 13.7561 16.936L14.7193 18.747Z" fill="black"/>
                                    <path d="M14.0254 15.7642C13.7972 16.1637 13.3717 16.4103 12.9117 16.4103H4.59936C3.96144 16.4101 3.42055 15.941 3.33033 15.3095L2.55609 9.89082L1.03365 10.1092L1.80789 15.5268C2.00639 16.9163 3.19583 17.9486 4.59936 17.9487H12.9117C13.9238 17.9487 14.8584 17.4062 15.3606 16.5274L18.8732 10.3816L17.5371 9.61839L14.0254 15.7642Z" fill="black"/>
                                    <path d="M3.07692 3.33333C3.07692 1.49238 4.56931 0 6.41026 0C7.90248 0 9.16357 0.980152 9.58934 2.32973L8.122 2.79247C7.89236 2.06473 7.21194 1.53846 6.41026 1.53846C5.41898 1.53846 4.61538 2.34205 4.61538 3.33333V10H3.07692V3.33333Z" fill="black"/>
                                    <path d="M11.6321 4.51189C12.0414 4.39786 12.2807 3.97367 12.1667 3.56442L11.4257 3.77089C12.1667 3.56442 12.1668 3.56478 12.1667 3.56442L12.1618 3.54705C12.1596 3.53957 12.1565 3.53034 12.1531 3.51934C12.146 3.49677 12.1359 3.46675 12.1233 3.43096C12.098 3.35961 12.0611 3.2628 12.0098 3.15064C11.9087 2.92958 11.7447 2.6296 11.4959 2.3435C11.2454 2.05559 10.8945 1.76564 10.4235 1.59943C9.94468 1.43049 9.39481 1.40879 8.78718 1.57809C7.52128 1.93098 6.9792 2.82972 6.78332 3.60351C6.68918 3.97545 6.67211 4.31797 6.67755 4.56356C6.68031 4.68794 6.68861 4.79251 6.69687 4.86803C6.701 4.90569 6.70567 4.93697 6.70906 4.96029C6.71075 4.97183 6.71175 4.98162 6.713 4.98934C6.71361 4.99312 6.71424 4.99643 6.71472 4.99926L6.71661 5.00601C6.75454 5.21949 6.88081 5.40712 7.06433 5.52259C7.24785 5.63805 7.47125 5.67122 7.68011 5.61303L11.6321 4.51189ZM8.31694 3.83853C8.43037 3.51611 8.66417 3.20956 9.20011 3.0601C9.53296 2.96736 9.75815 2.9959 9.91162 3.05005C10.0482 3.09826 10.1683 3.1827 10.2766 3.29253L8.31694 3.83853Z" fill="black"/>
                                </svg>
                            } />
                            <PropertyBadge label="Freehold" icon={
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3024 12.3813C13.3024 12.0823 13.3022 11.9038 13.2914 11.7717C13.2813 11.6488 13.2659 11.635 13.2744 11.6518C13.2499 11.6036 13.2106 11.5644 13.1625 11.5399C13.1792 11.5484 13.1654 11.5329 13.0426 11.5229C12.9105 11.5121 12.732 11.5119 12.433 11.5119H9.56701C9.26804 11.5119 9.08951 11.5121 8.95744 11.5229C8.83458 11.5329 8.82076 11.5484 8.83752 11.5399C8.78939 11.5644 8.75013 11.6036 8.7256 11.6518C8.73414 11.635 8.71867 11.6488 8.70861 11.7717C8.69782 11.9038 8.69762 12.0823 8.69762 12.3813V19.1865H13.3024V12.3813ZM19.9537 16.6792C19.9537 17.2397 19.9547 17.7065 19.9237 18.0862C19.892 18.4748 19.8226 18.8395 19.6469 19.1845C19.3771 19.714 18.9463 20.1448 18.4168 20.4146C18.0718 20.5903 17.7071 20.6597 17.3185 20.6914C16.9388 20.7224 16.472 20.7214 15.9115 20.7214H6.08846C5.52803 20.7214 5.06122 20.7224 4.68145 20.6914C4.29288 20.6597 3.92821 20.5903 3.58322 20.4146C3.05373 20.1448 2.62288 19.714 2.35309 19.1845C2.17738 18.8395 2.10804 18.4748 2.07628 18.0862C2.04526 17.7065 2.0463 17.2397 2.0463 16.6792V8.18522L1.22788 8.79979C0.888903 9.05402 0.408015 8.98571 0.153638 8.6469C-0.100595 8.30792 -0.0322775 7.82703 0.306531 7.57265L9.55701 0.634542C9.85465 0.411316 10.1705 0.157352 10.5443 0.058948C10.843 -0.0196499 11.157 -0.0196488 11.4557 0.058948C11.8295 0.157352 12.1453 0.411316 12.443 0.634542L21.6935 7.57265C22.0323 7.82703 22.1006 8.30792 21.8464 8.6469C21.592 8.9857 21.1111 9.05402 20.7721 8.79979L19.9537 8.18522V16.6792ZM14.8373 19.1865H15.9115C16.4973 19.1865 16.8909 19.1862 17.1936 19.1615C17.4873 19.1375 17.6276 19.0938 17.7203 19.0466C17.9609 18.924 18.1562 18.7286 18.2789 18.488C18.3261 18.3953 18.3698 18.255 18.3938 17.9613C18.4185 17.6586 18.4188 17.265 18.4188 16.6792V7.03403L12.5039 2.59916L12.0293 2.24641C11.6394 1.96358 11.4806 1.87349 11.3258 1.8327C11.1123 1.77651 10.8877 1.77651 10.6742 1.8327C10.4678 1.88708 10.255 2.02997 9.49606 2.59916L3.58122 7.03403V16.6792C3.58122 17.265 3.58147 17.6586 3.60621 17.9613C3.63021 18.255 3.67392 18.3953 3.72112 18.488C3.84374 18.7286 4.03914 18.924 4.27973 19.0466C4.37238 19.0938 4.51268 19.1375 4.80636 19.1615C5.10913 19.1862 5.5027 19.1865 6.08846 19.1865H7.1627V12.3813C7.1627 12.1075 7.16261 11.8558 7.17969 11.6468C7.19752 11.4288 7.23755 11.1898 7.35756 10.9543C7.52921 10.6175 7.80324 10.3435 8.14001 10.1718C8.37556 10.0518 8.61452 10.0118 8.83252 9.99395C9.04156 9.97687 9.29328 9.97696 9.56701 9.97696H12.433C12.7067 9.97696 12.9584 9.97687 13.1675 9.99395C13.3855 10.0118 13.6244 10.0518 13.86 10.1718C14.1968 10.3435 14.4708 10.6175 14.6424 10.9543C14.7625 11.1898 14.8035 11.4288 14.8213 11.6468C14.8384 11.8558 14.8373 12.1075 14.8373 12.3813V19.1865Z" fill="black"/>
                                </svg>
                            } />
                            <PropertyBadge label="4.2000 ac" icon={
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 18.5V20H2V18.5H5ZM5.5 18V2C5.5 1.72386 5.27614 1.5 5 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V18C1.5 18.2761 1.72386 18.5 2 18.5V20L1.7959 19.9893C0.854346 19.8938 0.1062 19.1457 0.0107422 18.2041L0 18V2C2.57706e-07 0.895431 0.895431 4.83192e-08 2 0H5C6.10457 0 7 0.895431 7 2V18L6.98926 18.2041C6.8938 19.1457 6.14565 19.8938 5.2041 19.9893L5 20V18.5C5.27614 18.5 5.5 18.2761 5.5 18Z" fill="black"/>
                                    <path d="M17.5303 15.4697C17.8232 15.7626 17.8232 16.2374 17.5303 16.5303L14.5303 19.5303C14.3896 19.6709 14.1989 19.75 14 19.75C13.8011 19.75 13.6104 19.6709 13.4697 19.5303L10.4697 16.5303C10.1768 16.2374 10.1768 15.7626 10.4697 15.4697C10.7626 15.1768 11.2374 15.1768 11.5303 15.4697L13.25 17.1895V9.81055L11.5303 11.5303C11.2374 11.8232 10.7626 11.8232 10.4697 11.5303C10.1768 11.2374 10.1768 10.7626 10.4697 10.4697L13.4697 7.46973C13.7626 7.17683 14.2374 7.17683 14.5303 7.46973L17.5303 10.4697C17.8232 10.7626 17.8232 11.2374 17.5303 11.5303C17.2374 11.8232 16.7626 11.8232 16.4697 11.5303L14.75 9.81055V17.1895L16.4697 15.4697C16.7626 15.1768 17.2374 15.1768 17.5303 15.4697Z" fill="black"/>
                                    <path d="M3 4.5V3H6V4.5H3Z" fill="black"/>
                                    <path d="M4 16.5V15H6V16.5H4Z" fill="black"/>
                                    <path d="M3 12.5V11H6V12.5H3Z" fill="black"/>
                                    <path d="M4 8.5V7H6V8.5H4Z" fill="black"/>
                                </svg>
                            } />
                        </div>

                        {/* Mortgage Dynamic details list */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <DetailRow label="Deposit" value="£70,000" />
                            <DetailRow label="Original loan amount" value="£280,000" />
                            <DetailRow label="Remaining loan term" value="23 yrs 2 mo" />
                            <DetailRow label="Repayment method" value="Capital & Interest" />
                            <DetailRow label="Loan to Value" value="80%" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── BOOK APPOINTMENT ── */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 76, background: "rgba(255,255,255,1)", padding: 16, zIndex: 20 }}>
                <button style={{ width: "100%", height: 44, background: "rgba(36,86,131,1)", borderRadius: 8, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "-apple-system,'SF Pro Display',system-ui", fontWeight: 590, fontSize: 16, lineHeight: "24px", color: "rgba(255,255,255,1)" }}>
                        Book appointment
                    </span>
                </button>
            </div>

        </div>
    );
}
