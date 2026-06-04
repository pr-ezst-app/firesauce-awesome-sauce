import { useState } from "react";
import Icon from "@/components/ui/icon";

const SAUCE_IMAGE = "https://cdn.ezst.app/projects/46f74984-a90d-4f33-b66e-4b399623c68b/bucket/f6497fe0-53d6-425a-b78f-9645402e3229.png";
const LOGO_IMAGE = "https://cdn.ezst.app/projects/46f74984-a90d-4f33-b66e-4b399623c68b/bucket/f6497fe0-53d6-425a-b78f-9645402e3229.png";

const products = [
  {
    name: "Sweet & Sour",
    emoji: "🍋",
    desc: "Tangy citrus zing with a sugary finish. The crowd-pleaser that works on everything.",
    price: "$4.99",
    tag: "BEST SELLER",
    color: "#FFB800",
  },
  {
    name: "BBQ",
    emoji: "🍖",
    desc: "Smoky, rich, slow-cooked BBQ flavor packed into every squeeze.",
    price: "$4.99",
    tag: "NEW",
    color: "#8B2500",
  },
  {
    name: "Honey Blaze",
    emoji: "🍯",
    desc: "Sweet wildflower honey with a warm cayenne kick. Universally loved.",
    price: "$4.99",
    tag: "FAN FAVORITE",
    color: "#FF6B1A",
  },
  {
    name: "Ketchup",
    emoji: "🍅",
    desc: "The classic reinvented. Our premium tomato ketchup in a revolutionary packet.",
    price: "$3.99",
    tag: null,
    color: "#E8210A",
  },
];

const navLinks = ["Home", "Products", "About", "Shop"];

export default function Index() {
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ company: "", email: "", phone: "", size: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="bg-[#0F0A00] text-white min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "linear-gradient(to bottom, rgba(15,10,0,0.95) 0%, transparent 100%)" }}>
        <div className="flex items-center gap-2">
          <img src={LOGO_IMAGE} alt="Firesauce Logo" className="h-12 object-contain" style={{ mixBlendMode: "screen", filter: "contrast(1.1) brightness(1.1)" }} />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { setActiveNav(link); scrollTo(link.toLowerCase()); }}
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-200 ${activeNav === link ? "text-[#FF6B1A]" : "text-white/60 hover:text-white"}`}
            >
              {link}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("shop")}
          className="hidden md:block fire-gradient text-white font-semibold text-sm px-6 py-2.5 rounded-full tracking-wide hover:opacity-90 transition-opacity fire-glow-sm"
        >
          Order Now
        </button>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0F0A00]/98 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { setActiveNav(link); scrollTo(link.toLowerCase()); }}
              className="font-display text-5xl tracking-widest fire-gradient-text"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("shop")}
            className="fire-gradient text-white font-semibold px-10 py-3 rounded-full mt-4"
          >
            Order Now
          </button>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 30% 80%, rgba(232,33,10,0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 20%, rgba(255,107,26,0.15) 0%, transparent 50%)"
          }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px"
          }} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 pt-24 pb-12 max-w-7xl mx-auto w-full">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 opacity-0 animate-rise rise-delay-1">
              <span className="w-2 h-2 rounded-full bg-[#FF6B1A] animate-pulse-fire" />
              <span className="text-xs font-medium tracking-widest uppercase text-[#FFB800]">Revolutionary Sauce</span>
            </div>

            <h1 className="font-display text-[clamp(5rem,14vw,12rem)] leading-none tracking-wider opacity-0 animate-rise rise-delay-2">
              <span className="block text-white">IGNITE</span>
              <span className="block fire-gradient-text">EVERY</span>
              <span className="block text-white">BITE.</span>
            </h1>

            <p className="mt-6 text-white/60 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed opacity-0 animate-rise rise-delay-3">
              The world's most convenient sauce packets. Squeeze it, dip in it — Firesauce is always ready when you are.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-rise rise-delay-4">
              <button
                onClick={() => scrollTo("shop")}
                className="fire-gradient text-white font-semibold text-base px-10 py-4 rounded-full tracking-wide hover:opacity-90 transition-all duration-300 fire-glow animate-pulse-fire"
              >
                Shop Now 🔥
              </button>
              <button
                onClick={() => scrollTo("products")}
                className="border border-white/20 text-white font-semibold text-base px-10 py-4 rounded-full tracking-wide hover:border-[#FF6B1A] hover:text-[#FF6B1A] transition-all duration-300"
              >
                See All Flavors
              </button>
            </div>

            <div className="mt-14 flex gap-8 justify-center lg:justify-start opacity-0 animate-rise rise-delay-5">
              {[
                { num: "4", label: "Bold Flavors" },
                { num: "1M+", label: "Packets Sold" },
                { num: "100%", label: "Natural Heat" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display text-3xl fire-gradient-text">{s.num}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center opacity-0 animate-rise rise-delay-3">
            <div className="relative">
              <div className="absolute inset-0 fire-glow scale-105 blur-2xl opacity-40" />
              <img
                src={SAUCE_IMAGE}
                alt="Firesauce packet"
                className="relative z-10 w-80 lg:w-[420px] object-contain animate-float"
                style={{ mixBlendMode: "screen", filter: "contrast(1.1) brightness(1.1)" }}
              />
              <div className="absolute -top-4 -right-4 z-20 fire-gradient rounded-2xl px-4 py-2 shadow-xl">
                <span className="font-display text-white text-xl tracking-widest">NEW!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/30">Scroll</span>
          <Icon name="ChevronDown" size={16} className="text-white/30 animate-bounce" />
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="overflow-hidden py-4 border-y border-[#FF6B1A]/20" style={{ background: "linear-gradient(90deg, #E8210A, #FF6B1A, #FFB800, #FF6B1A, #E8210A)" }}>
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(8).fill("🔥 FIRESAUCE · SQUEEZE IT · DIP IN IT · REVOLUTIONARY TASTE · ").map((t, i) => (
            <span key={i} className="font-display text-white text-lg tracking-widest mx-4">{t}</span>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section id="products" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF6B1A] text-sm font-medium tracking-widest uppercase">Our Lineup</span>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] text-white mt-2 tracking-wider">PICK YOUR FIRE</h2>
          <p className="text-white/40 mt-3 max-w-lg mx-auto">From gentle warmth to scorching inferno — there's a Firesauce for every moment.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#FF6B1A]/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl" style={{ background: p.color }} />
              {p.tag && (
                <div className="absolute -top-3 left-6 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest" style={{ background: p.color }}>
                  {p.tag}
                </div>
              )}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{p.emoji}</div>
              <h3 className="font-display text-2xl text-white tracking-wider mt-2">{p.name}</h3>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-display text-2xl" style={{ color: p.color }}>{p.price}</span>
                <button className="text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity" style={{ background: p.color }}>
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 ember-bg" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-[#FF6B1A] text-sm font-medium tracking-widest uppercase">Our Story</span>
            <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] text-white mt-2 tracking-wider leading-none">
              BORN FROM<br />
              <span className="fire-gradient-text">REAL FIRE.</span>
            </h2>
            <p className="text-white/60 mt-6 text-lg leading-relaxed max-w-lg">
              Firesauce was created for people who refuse to settle for bland. We took the convenience of a dip packet and filled it with something revolutionary — a sauce so good, you'll keep a stash everywhere.
            </p>


            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: "Zap", title: "Easy Squeeze", desc: "One-handed squeeze without the mess" },
                { icon: "Droplets", title: "Perfect Dip", desc: "Wide opening for maximum dunking" },
                { icon: "Leaf", title: "All Natural", desc: "No artificial nonsense, ever" },
                { icon: "Package", title: "Go Anywhere", desc: "Pocket-sized flavor bomb" },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 items-start">
                  <div className="fire-gradient rounded-xl p-2 flex-shrink-0">
                    <Icon name={f.icon} size={16} className="text-white" fallback="Star" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{f.title}</div>
                    <div className="text-white/40 text-xs mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 fire-glow rounded-[3rem] opacity-40 blur-xl" />
              <div className="relative bg-gradient-to-br from-[#2D1500] to-[#1A0800] rounded-[2.5rem] p-10 border border-[#FF6B1A]/20">
                <div className="relative z-10 space-y-6">
                  {["Squeeze it", "Dip in it", "Love it"].map((step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="w-10 h-10 fire-gradient rounded-full flex items-center justify-center font-display text-white text-xl flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-display text-3xl text-white tracking-wider">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="relative z-10 mt-10 pt-8 border-t border-white/10 text-center">
                  <div className="font-display text-5xl fire-gradient-text">THAT SIMPLE.</div>
                  <div className="text-white/40 text-sm mt-2">No forks. No spoons. No drama.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP — B2B */}
      <section id="shop" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(232,33,10,0.12) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF6B1A] text-sm font-medium tracking-widest uppercase">For Business</span>
            <h2 className="font-display text-[clamp(3rem,9vw,7rem)] text-white mt-2 tracking-wider leading-none">
              BULK UP<br />
              <span className="fire-gradient-text">YOUR BRAND.</span>
            </h2>
            <p className="text-white/50 mt-5 text-lg max-w-xl mx-auto">
              From restaurants to stadiums — Firesauce is built for scale. Order by the case or get a custom quote.
            </p>
          </div>

          {/* Case packs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { name: "Standard Case", qty: "100 packets", label: "Great for restaurants & cafes", popular: false, icon: "Package" },
              { name: "Business Case", qty: "500 packets", label: "Perfect for chains & events", popular: true, icon: "Boxes" },
              { name: "Enterprise Case", qty: "1,000 packets", label: "Stadiums, airlines, large venues", popular: false, icon: "Building2" },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl p-8 border transition-all duration-300 cursor-pointer ${
                  pkg.popular
                    ? "fire-gradient border-transparent fire-glow"
                    : "bg-white/5 border-white/10 hover:border-[#FF6B1A]/40"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFB800] text-black font-bold text-xs px-4 py-1.5 rounded-full tracking-wider whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${pkg.popular ? "bg-white/20" : "fire-gradient"}`}>
                  <Icon name={pkg.icon} size={22} className="text-white" fallback="Package" />
                </div>
                <div className="font-display text-3xl text-white tracking-wider">{pkg.name}</div>
                <div className="font-display text-5xl text-white mt-3">{pkg.qty}</div>
                <div className="text-white/60 text-sm mt-2">{pkg.label}</div>
                <button
                  onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
                  className={`mt-8 w-full py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${
                    pkg.popular
                      ? "bg-white text-[#E8210A] hover:bg-white/90"
                      : "border border-[#FF6B1A] text-[#FF6B1A] hover:bg-[#FF6B1A] hover:text-white"
                  }`}
                >
                  Request a Quote
                </button>
              </div>
            ))}
          </div>

          {/* Quote form */}
          <div id="quote-form" className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">🔥</div>
                <div className="font-display text-4xl fire-gradient-text tracking-wider">WE'RE ON IT!</div>
                <p className="text-white/50 mt-3">Our team will reach out within 1 business day.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="font-display text-4xl text-white tracking-wider">GET A CUSTOM QUOTE</div>
                  <p className="text-white/40 text-sm mt-2">Tell us about your business and we'll handle the rest.</p>
                </div>
                <form
                  className="space-y-4"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-widest mb-1.5 block">Company Name</label>
                      <input
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-widest mb-1.5 block">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-widest mb-1.5 block">Phone</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-widest mb-1.5 block">Order Size</label>
                      <select
                        value={form.size}
                        onChange={(e) => setForm({ ...form, size: e.target.value })}
                        className="w-full bg-[#1A0800] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm appearance-none"
                      >
                        <option value="">Select case size...</option>
                        <option value="100">100 packets</option>
                        <option value="500">500 packets</option>
                        <option value="1000">1,000 packets</option>
                        <option value="custom">Custom / Not sure</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-widest mb-1.5 block">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business, flavors needed, frequency..."
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full fire-gradient text-white font-bold py-4 rounded-full text-sm tracking-widest uppercase hover:opacity-90 transition-opacity fire-glow mt-2"
                  >
                    Send Quote Request 🔥
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm">
            {["🏭 Made in the USA", "🚚 Fast bulk shipping", "🌿 All natural", "⭐ Trusted by 500+ businesses"].map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={LOGO_IMAGE} alt="Firesauce" className="h-12 object-contain" style={{ mixBlendMode: "screen", filter: "contrast(1.1) brightness(1.1)" }} />
          </div>
          <p className="text-white/30 text-sm text-center">
            © 2026 Firesauce. Ignite every bite.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Twitter", "TikTok"].map((s) => (
              <button key={s} className="text-white/30 hover:text-[#FF6B1A] transition-colors text-sm font-medium">
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}