import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // রিসোর্স ডেটা
    const resources = [
        {
            title: 'Documentation',
            category: 'Getting Started',
            link: 'https://laravel.com/docs',
            desc: 'Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience.',
            badge: 'Essential',
            accent: 'from-cyan-500/20 to-blue-500/20',
            borderGlow: 'group-hover:border-cyan-500/40',
            iconColor: 'text-cyan-400',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: 'Laracasts',
            category: 'Video Tutorials',
            link: 'https://laracasts.com',
            desc: 'Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Massively level up your coding skills.',
            badge: 'Courses',
            accent: 'from-indigo-500/20 to-purple-500/20',
            borderGlow: 'group-hover:border-indigo-500/40',
            iconColor: 'text-indigo-400',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Laravel News',
            category: 'Ecosystem Pulse',
            link: 'https://laravel-news.com',
            desc: 'A community-driven portal and weekly newsletter aggregating the newest packages, tutorials, and ecosystem announcements.',
            badge: 'Community',
            accent: 'from-rose-500/20 to-orange-500/20',
            borderGlow: 'group-hover:border-rose-500/40',
            iconColor: 'text-rose-400',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
            )
        },
        {
            title: 'Vibrant Ecosystem',
            category: 'Tools & DevOps',
            link: 'https://laravel.com',
            desc: "Laravel's robust first-party ecosystem like Forge, Vapor, Nova, Envoyer, and Herd helps scale your projects with ease.",
            badge: 'Official',
            accent: 'from-emerald-500/20 to-teal-500/20',
            borderGlow: 'group-hover:border-emerald-500/40',
            iconColor: 'text-emerald-400',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            )
        }
    ];

    const techStack = ['Laravel 11', 'React 18', 'Inertia.js', 'Tailwind CSS', 'Vite'];

    return (
        <>
            <Head title="Welcome to NextGen" />

            <div className="min-h-screen bg-[#07090E] text-slate-200 font-sans relative overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-300">

                {/* 🌟 ব্যাকগ্রাউন্ড এম্বিয়েন্ট লাইটিং ও গ্রিড ইফেক্ট */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* সাবটল ডট গ্রিড */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                    {/* ওপরের সেন্ট্রাল অরোরা গ্লো */}
                    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-fuchsia-600/20 blur-[140px] rounded-full"></div>

                    {/* বটম এম্বিয়েন্ট লাইট */}
                    <div className="absolute -bottom-20 left-1/4 w-[450px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full"></div>
                </div>

                {/* 🧭 হেডার নেভিগেশন বার */}
                <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090E]/70 border-b border-white/[0.07] transition-all">
                    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                        {/* ব্র্যান্ড লোগো */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="relative">
                                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-40 blur-sm group-hover:opacity-75 transition duration-300"></div>
                                <div className="relative w-10 h-10 rounded-xl bg-[#0b101b] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                                    <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                                    NextGen <span className="text-cyan-400 font-extrabold text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">STACK</span>
                                </span>
                            </div>
                        </div>

                        {/* অথেন্টিকেশন বাটন */}
                        <nav className="flex items-center gap-3">
                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-md transition-all duration-200 shadow-sm hover:shadow-cyan-500/10 flex items-center gap-2"
                                >
                                    <span>Dashboard</span>
                                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="relative group px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                                    >
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-600 group-hover:opacity-90 transition-opacity"></div>
                                        <div className="absolute inset-0 rounded-xl blur-md bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                                        <span className="relative z-10 flex items-center gap-1.5">
                                            Get Started
                                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* 🚀 মেইন কন্টেন্ট / হিরো এরিয়া */}
                <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col items-center">

                    {/* টপ নোটিফিকেশন পিল */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-medium text-slate-300 mb-8 shadow-inner hover:border-cyan-500/40 transition-colors cursor-pointer group">
                        <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span className="text-slate-400 group-hover:text-slate-200 transition-colors">Laravel 11 & Inertia.js React Ready</span>
                        <span className="text-cyan-400 font-semibold flex items-center gap-0.5">
                            Read update <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                        </span>
                    </div>

                    {/* মেইন হেডলাইন */}
                    <div className="text-center max-w-3xl space-y-6 mb-12">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
                            Build Full-Stack Apps <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                                Without Friction.
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            The agility of a single-page React frontend paired with the battle-tested power of Laravel backend. Experience development at supersonic speed.
                        </p>
                    </div>

                    {/* টেকনোলজি ট্যাগস */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16 max-w-2xl">
                        {techStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="px-3 py-1 rounded-lg text-xs font-medium text-slate-400 bg-slate-900/80 border border-white/[0.06] hover:border-white/20 transition-all hover:text-slate-200 shadow-sm"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>

                    {/* 🗂️ কার্ড গ্রিড (Modern Bento-style) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                        {resources.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative flex flex-col justify-between p-7 rounded-2xl bg-[#0d121f]/70 border border-white/[0.08] ${item.borderGlow} hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 backdrop-blur-md overflow-hidden`}
                            >
                                {/* হোভারে সফট গ্র্যাডিয়েন্ট ফ্ল্যাশ */}
                                <div className={`absolute top-0 right-0 -mr-16 -mt-16 w-44 h-44 rounded-full bg-gradient-to-br ${item.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                                <div>
                                    {/* কার্ড হেডার: আইকন এবং ব্যাজ */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className={`p-3 rounded-xl bg-white/[0.04] border border-white/10 ${item.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                            {item.icon}
                                        </div>
                                        <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-slate-400">
                                            {item.badge}
                                        </span>
                                    </div>

                                    {/* কার্ড টেক্সট */}
                                    <div className="space-y-2">
                                        <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">{item.category}</span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed pt-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* কার্ড ফুটার লিঙ্ক অ্যাকশন */}
                                <div className="pt-6 mt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors">
                                    <span>Explore resource</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* ✨ ফিচার হাইলাইটস বার */}
                    <div className="w-full max-w-5xl mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { label: 'Vite HMR', desc: 'Instant hot reload' },
                            { label: 'Type Safe', desc: 'React component props' },
                            { label: 'No REST APIs', desc: 'Direct Inertia routing' },
                            { label: 'Production Ready', desc: 'Optimized build size' },
                        ].map((stat, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                                <div className="text-sm font-semibold text-white">{stat.label}</div>
                                <div className="text-xs text-slate-500 mt-0.5">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* 📌 মডার্ন ডক-স্টাইল ফুটার */}
                <footer className="relative z-10 w-full py-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-4 text-xs text-slate-500">
                    <div>
                        © {new Date().getFullYear()} NextGen App. Built with precision and passion.
                    </div>

                    {/* ফ্রেমওয়ার্ক ও পিএইচপি ভার্সন ব্যাজ */}
                    <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-[#0b101b] border border-white/10 shadow-lg">
                        <span className="flex items-center gap-2 text-slate-300 font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            Laravel v{laravelVersion}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                        <span className="flex items-center gap-2 text-slate-300 font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            PHP v{phpVersion}
                        </span>
                    </div>
                </footer>
            </div>
        </>
    );
}
