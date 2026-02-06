import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const itemBase =
        "flex items-center gap-2 w-full px-4 py-3 text-sm leading-none text-white/80 hover:text-white hover:bg-white/10 transition rounded-xl whitespace-nowrap";

    const itemActive = "text-white bg-white/10";


    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
            <div className="mx-auto max-w-6xl px-6 py-5 flex items-center">
                {/* Left spacer (keeps center truly centered) */}
                <div className="w-12" />

                {/* Center Name + Profession */}
                <div className="flex-1 text-center">
                    <p className="text-base font-semibold tracking-wide text-white">
                        Darshi Gabani
                    </p>
                    <p className="text-xs text-white/60">
                        IT Graduate • Digital Support • Project Coordination
                    </p>
                </div>

                {/* Right Menu */}
                <div className="relative w-12 flex justify-end">
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
                        aria-label="Open menu"
                        aria-expanded={open}
                    >
                        {/* Hamburger icon */}
                        <div className="flex flex-col gap-1">
                            <span className="h-[2px] w-5 bg-white/80 rounded" />
                            <span className="h-[2px] w-5 bg-white/80 rounded" />
                            <span className="h-[2px] w-5 bg-white/80 rounded" />
                        </div>
                    </button>

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute right-0 top-12 w-56 rounded-2xl border border-white/10 bg-black/80 backdrop-blur p-2 shadow-lg">
                            <NavLink
                                to="/"
                                end
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `${itemBase} ${isActive ? itemActive : ""}`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/projects"
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `${itemBase} ${isActive ? itemActive : ""}`
                                }
                            >
                                Projects
                            </NavLink>

                            <a
                                href="mailto:darshi.gabani2001@gmail.com"
                                onClick={() => setOpen(false)}
                                className={itemBase}
                            >
                                Email
                            </a>

                            <a
                                href="/Darshi-Gabani-Resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className={itemBase}
                            >
                               Download Resume
                            </a>

                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
