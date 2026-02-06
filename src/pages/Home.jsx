export default function Home() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-12">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-10">
                <p className="text-xs font-semibold tracking-[0.25em] text-white/60 uppercase">
                    Portfolio
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight">
                    Darshi Gabani
                </h1>

                <p className="mt-3 text-white/70">
                    IT Graduate • Digital Support • Project Coordination
                </p>

                <p className="mt-6 text-white/75 leading-relaxed max-w-2xl">
                    Bachelor of Information Technology graduate with experience in web development,
                    digital tools, and team coordination. Open to hybrid roles, and available for
                    both remote and office-based opportunities.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                        Surat, Gujarat, India
                    </span>

                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                        Hybrid / Remote / On-site
                    </span>

                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                        darshi.gabani2001@gmail.com
                    </span>
                </div>

            </section>
            <section className="mt-10">
                <h2 className="text-sm font-semibold tracking-[0.25em] text-white/60 uppercase">
                    Skills
                </h2>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-900/40">

                        <p className="font-semibold">Technical</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm">
                            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "GitHub"].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-900/40">

                        <p className="font-semibold">Digital & Marketing</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm">
                            {["Canva", "Social Media", "Content Writing", "Brand Communication"].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Card 3 */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-900/40">

                        <p className="font-semibold">Project & Work</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm">
                            {["Client Communication", "Requirement Gathering", "Documentation", "Time Management"].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            <section className="mt-12">
                <h2 className="text-sm font-semibold tracking-[0.25em] text-white/60 uppercase">
                    Experience
                </h2>

                <div className="mt-5 grid gap-4">

                    {/* Experience 1 */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-900/40">
                        <p className="font-semibold">Shift Supervisor — Hungry Jack’s</p>
                        <p className="mt-1 text-sm text-white/60">2021 – Present</p>

                        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-white/75">
                            <li>Supervised daily shifts and supported managers.</li>
                            <li>Trained new team members.</li>
                            <li>Handled customer service and cash accurately.</li>
                        </ul>
                    </div>

                    {/* Experience 2 */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-900/40">
                        <p className="font-semibold">Store Manager — Liberty Petrol Station</p>
                        <p className="mt-1 text-sm text-white/60">2020 – 2022</p>

                        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-white/75">
                            <li>Managed staff rosters and daily operations.</li>
                            <li>Handled banking, sales reconciliation, and inventory.</li>
                            <li>Resolved customer issues professionally.</li>
                        </ul>
                    </div>

                </div>
            </section>
            {/* EDUCATION */}
            <section className="mt-12">
                <h2 className="mb-4 text-sm font-semibold tracking-[0.25em] text-white/60 uppercase">EDUCATION</h2>

                   

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-900/40">

                    <p className="font-semibold">Bachelor of Information Technology</p>
                    <p className="mt-1 text-sm text-white/60">
                        University of South Australia • Completed July 2025
                    </p>

                    <p className="mt-4 text-sm text-white/75">
                        Relevant: Web Development, Software Projects, Databases, Team-Based Capstone
                    </p>
                </div>
            </section>

            

            {/* CONTACT */}
            <section className="mt-12 mb-16" id="contact">
                <h2 className="mb-4 text-sm font-semibold tracking-[0.25em] text-white/60 uppercase">CONTACT</h2>


                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-900/40">

                    <p className="text-white/80">
                        Surat, Gujarat, India • Open to Hybrid / Remote / On-site
                    </p>

                    <p className="mt-2 text-sm text-white/75">
                        Phone: <a href="tel:+918490051253" className="hover:text-white transition">+91 8490051253</a>
                    </p>
                    <p className="mt-2 text-sm text-white/75">
                        Email: <a href="mailto:darshi.gabani2001@gmail.com" className="hover:text-white transition">darshi.gabani2001@gmail.com</a>
                    </p>


                    <div className="mt-4 flex flex-wrap gap-3">
                        

                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                        >
                            LinkedIn (add link)
                        </a>

                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                        >
                            GitHub (add link)
                        </a>
                    </div>

                    <p className="mt-4 text-sm text-white/60">
                        Languages: English • Hindi • Gujarati
                    </p>
                </div>
            </section>



        </main>
    );
}
