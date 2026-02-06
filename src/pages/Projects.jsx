export default function Projects() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-12">
            {/* Page header */}
            <section className="rounded-3xl border border-white/10 bg-white/5 p-10">
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                <p className="mt-3 text-white/75 max-w-2xl">
                    A selection of projects that demonstrate my skills in web development, teamwork,
                    and delivering real client outcomes.
                </p>
            </section>

            {/* Projects list */}
            <section className="mt-10 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-900/40">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <p className="text-lg font-semibold">
                                Client Website Development — Capstone Project
                            </p>
                            <p className="mt-1 text-sm text-white/60">
                                University Project • 2025
                            </p>
                        </div>

                        <p className="text-sm text-white/60">Best Capstone Project Award</p>
                    </div>

                    <p className="mt-4 text-sm text-white/75 leading-relaxed">
                        Built a responsive website for a real client as part of a team capstone project.
                        Contributed to requirements, UI development, and feature implementation.
                    </p>

                    {/* Tech pills */}
                    <div className="mt-5 flex flex-wrap gap-2 text-sm">
                        {["React", "Tailwind", "GitHub", "Responsive UI"].map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                        >
                            GitHub (add link)
                        </a>

                        
                    </div>
                </div>

                {/* Placeholder */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                    More projects coming soon.
                </div>
            </section>
        </main>
    );
}
