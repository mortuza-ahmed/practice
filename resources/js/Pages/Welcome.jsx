import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // রিসোর্স ডেটা লুপ করার জন্য
    const resources = [
        {
            title: 'Documentation',
            link: 'https://laravel.com/docs',
            desc: 'Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: 'Laracasts',
            link: 'https://laracasts.com',
            desc: 'Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Massively level up your skills.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Laravel News',
            link: 'https://laravel-news.com',
            desc: 'Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the ecosystem.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
            )
        },
        {
            title: 'Vibrant Ecosystem',
            link: 'https://laravel.com',
            desc: 'Laravel\'s robust library of first-party tools and libraries like Forge, Vapor, Nova, Envoyer, and Herd help take your projects to the next level.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            )
        }
    ];

    return (
        <>
            <Head title="Welcome to Modern App" />

            <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans relative overflow-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-200">

                {/* 🌌 ব্যাকগ্রাউন্ড গ্লোয়িং গ্রেডিয়েন্ট অরব */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute -top-40 -left-20 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
                    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
                    <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
                </div>

                {/* 🚀 মেইন কন্টেন্ট */}
                <div className="relative z-10 flex flex-col min-h-screen">

                    {/* হেডার / নেভিগেশন */}
                    <header className="w-full border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
                        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 p-[1px]">
                                    <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-fuchsia-500" viewBox="0 0 62 65" fill="currentColor">
                                            <path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" />
                                        </svg>
                                    </div>
                                </div>
                                <span className="font-bold text-xl tracking-tight text-white">NextGen<span className="text-fuchsia-500">App</span></span>
                            </div>

                            <nav className="flex gap-4">
                                {auth.user ? (
                                    <Link href={route('dashboard')} className="px-5 py-2.5 rounded-lg font-medium bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white">
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link href={route('login')} className="px-5 py-2.5 rounded-lg font-medium text-slate-300 hover:text-white transition-colors">
                                            Log in
                                        </Link>
                                        <Link href={route('register')} className="px-5 py-2.5 rounded-lg font-medium bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:scale-105 active:scale-95">
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </header>

                    {/* হিরো সেকশন */}
                    <main className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-6 py-20">
                        <div className="text-center max-w-3xl mb-16 space-y-6">
                            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
                                The Modern Framework for <br/>
                                <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Web Artisans</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                                A robust, elegant, and flexible toolkit ready to power your next big idea. Fully equipped with React, Inertia, and Vite.
                            </p>
                        </div>

                        {/* রিসোর্স গ্রিড কার্ডস (গ্লাসমরফিজম) */}
                        <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
                            {resources.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/10"
                                >
                                    {/* হোভার গ্রেডিয়েন্ট গ্লো */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500/20 group-hover:text-fuchsia-300 transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <h2 className="text-xl font-bold text-white group-hover:text-fuchsia-300 transition-colors">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <p className="relative z-10 text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {item.desc}
                                    </p>

                                    {/* ডান দিকের অ্যারো আইকন */}
                                    <div className="absolute right-6 top-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-fuchsia-500">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </main>

                    {/* ফুটার */}
                    <footer className="w-full py-8 text-center border-t border-white/5 mt-auto">
                        <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-400 backdrop-blur-sm">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                Laravel v{laravelVersion}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                PHP v{phpVersion}
                            </span>
                        </div>
                    </footer>
                </div>
            </div>

            {/* কাস্টম অ্যানিমেশন সিএসএস */}
            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.8; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.1); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
