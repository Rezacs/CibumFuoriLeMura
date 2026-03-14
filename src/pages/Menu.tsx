import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { foodSections, simpleSections } from "../data/menuFood";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[èé]/g, "e")
    .replace(/[à]/g, "a")
    .replace(/[ì]/g, "i")
    .replace(/[ò]/g, "o")
    .replace(/[ù]/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function Menu() {
  const allSections = useMemo(() => [...foodSections, ...simpleSections], []);
  const navItems = useMemo(
    () => [
      ...allSections.map((section) => ({
        title: section.title,
        id: slugify(section.title),
      })),
      { title: "Carta dei Vini", id: "carta-dei-vini" },
    ],
    [allSections]
  );

  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        // top offset accounts for fixed header
        // bottom offset helps switch section a bit earlier
        rootMargin: "-140px 0px -55% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className="bg-[#F5EDE3] min-h-screen scroll-smooth">
      {/* HERO */}
      <div className="h-[500px] bg-[#F5EDE3] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl text-[#8B1E2D] font-display mb-6">
            Menu
          </h1>
          <div className="w-32 h-px bg-[#E6A23C] mx-auto"></div>
        </motion.div>
      </div>

      <div className="pt-24 pb-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-41 rounded-3xl bg-white shadow-xl border border-black/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#E6A23C] mb-6">
                Navigazione
              </p>

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`pl-4 py-2 border-l transition-all duration-200 ${
                        isActive
                          ? "border-[#E6A23C] text-[#8B1E2D] font-medium bg-white/60 rounded-r-xl"
                          : "border-[#E6A23C]/30 text-[#8B1E2D]/70 hover:text-[#8B1E2D] hover:border-[#E6A23C]"
                      }`}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* MOBILE NAV */}
          <div className="lg:hidden sticky top-34 z-30 bg-[#F5EDE3]/95 backdrop-blur py-3">
            <nav className="flex gap-3 overflow-x-auto pb-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                      isActive
                        ? "bg-[#8B1E2D] text-white border-[#8B1E2D]"
                        : "bg-white text-[#8B1E2D] border-[#8B1E2D]/20 hover:bg-[#8B1E2D] hover:text-white"
                    }`}
                  >
                    {item.title}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* CONTENT */}
          <div className="space-y-40">
            {foodSections.map((section) => {
              const id = slugify(section.title);

              return (
                <section
                  id={id}
                  key={section.title}
                  className="max-w-5xl mx-auto px-4 sm:px-6 scroll-mt-32"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 md:mb-12 text-[#8B1E2D] font-display text-center">
                      {section.title}
                    </h2>

                    <div className="rounded-2xl sm:rounded-3xl bg-white shadow-xl border border-black/5 p-5 sm:p-8 md:p-12">
                      <div className="space-y-7 sm:space-y-8 md:space-y-10">
                        {section.items.map((item, itemIndex) => (
                          <div key={`${section.title}-${item.name}-${itemIndex}`}>
                            <div className="flex items-start justify-between gap-4 sm:gap-6">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#8B1E2D] leading-snug pr-2">
                                {item.name}
                              </h3>

                              <span className="text-[#E6A23C] font-serif italic text-lg sm:text-xl md:text-2xl whitespace-nowrap shrink-0">
                                {item.price}
                              </span>
                            </div>

                            {item.desc && (
                              <p className="text-sm sm:text-base md:text-lg text-[#5a5a40] mt-2 sm:mt-3 leading-relaxed">
                                {item.desc}
                              </p>
                            )}

                            <div className="mt-5 sm:mt-6 h-px bg-black/5"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </section>
              );
            })}

            {simpleSections.map((section) => {
              const id = slugify(section.title);

              return (
                <section
                  id={id}
                  key={section.title}
                  className="max-w-4xl mx-auto scroll-mt-32"
                >
                  <h2 className="text-4xl md:text-5xl text-[#8B1E2D] font-display text-center mb-10">
                    {section.title}
                  </h2>

                  {section.items && (
                    <div className="rounded-3xl bg-white shadow-xl border border-black/5 p-8 md:p-10">
                      <div
                        className={`grid gap-x-10 gap-y-8 ${
                          section.title === "Caffè e Bevande"
                            ? "grid-cols-1 md:grid-cols-2"
                            : "grid-cols-1"
                        }`}
                      >
                        {section.items.map((item, itemIndex) => (
                          <div key={`${section.title}-${item.name}-${itemIndex}`}>
                            <div className="flex justify-between items-baseline gap-6">
                              <h3 className="text-xl md:text-2xl font-medium text-[#8B1E2D]">
                                {item.name}
                              </h3>
                              <span className="text-[#E6A23C] font-serif italic text-xl whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>

                            {item.desc && (
                              <p className="text-base md:text-lg text-[#5a5a40] mt-2 leading-relaxed">
                                {item.desc}
                              </p>
                            )}

                            <div className="mt-5 h-px bg-black/5"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.subSections && (
                    <div className="rounded-3xl bg-white shadow-xl border border-black/5 p-8 md:p-10">
                      <div
                        className={`grid gap-10 ${
                          section.title === "Alcolici"
                            ? "grid-cols-1 md:grid-cols-2"
                            : "grid-cols-1"
                        }`}
                      >
                        {section.subSections.map((subSection) => (
                          <div key={`${section.title}-${subSection.title}`}>
                            <h3 className="text-2xl md:text-3xl text-[#8B1E2D] font-display mb-6">
                              {subSection.title}
                            </h3>

                            <div className="space-y-6">
                              {subSection.items.map((item, itemIndex) => (
                                <div
                                  key={`${section.title}-${subSection.title}-${item.name}-${itemIndex}`}
                                >
                                  <div className="flex justify-between items-baseline gap-6">
                                    <h4 className="text-xl md:text-2xl font-medium text-[#8B1E2D]">
                                      {item.name}
                                    </h4>
                                    <span className="text-[#E6A23C] font-serif italic text-xl whitespace-nowrap">
                                      {item.price}
                                    </span>
                                  </div>

                                  {item.desc && (
                                    <p className="text-base md:text-lg text-[#5a5a40] mt-2 leading-relaxed">
                                      {item.desc}
                                    </p>
                                  )}

                                  <div className="mt-4 h-px bg-black/5"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              );
            })}

            <section
              id="carta-dei-vini"
              className="text-center pt-10 scroll-mt-32"
            >
              <p className="text-xl md:text-2xl font-serif italic text-[#5a5a40] mb-6">
                Vuoi scoprire la nostra selezione completa di vini?
              </p>
              <a
                href="/wines"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E6A23C] text-[#8B1E2D] uppercase tracking-widest text-sm hover:opacity-90 transition"
              >
                Carta dei Vini
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}