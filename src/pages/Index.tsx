// import { useState, useEffect } from "react";
// import { SlideLayout } from "@/components/SlideLayout";
// import { Slide1 } from "@/components/slides/Slide1";
// import { Slide2 } from "@/components/slides/Slide2";
// import { Slide3 } from "@/components/slides/Slide3";
// import { Slide4 } from "@/components/slides/Slide4";
// import { Slide5 } from "@/components/slides/Slide5";
// import { Slide6 } from "@/components/slides/Slide6";
// import { Slide7 } from "@/components/slides/Slide7";

// const slides = [
//   Slide1,
//   Slide2,
//   Slide3,
//   Slide4,
//   Slide5,
//   Slide6,
//   Slide7,
// ];

// const Index = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
//         setCurrentSlide(currentSlide + 1);
//       } else if (e.key === "ArrowLeft" && currentSlide > 0) {
//         setCurrentSlide(currentSlide - 1);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [currentSlide]);

//   const handlePrevious = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentSlide < slides.length - 1) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const CurrentSlideComponent = slides[currentSlide];

//   return (
//     <SlideLayout
//       currentSlide={currentSlide}
//       totalSlides={slides.length}
//       onPrevious={handlePrevious}
//       onNext={handleNext}
//     >
//       <CurrentSlideComponent />
//     </SlideLayout>
//   );
// };

// export default Index;

import { useState, useEffect } from "react";

const CANVA_URL =
  "https://www.canva.com/design/DAGyUM41hJs/AJO52ISla0G1piWezILA9w/view?utm_content=DAGyUM41hJs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3851645125";

// ถ้าอยากเก็บไฟล์โลโก้ไว้ในโปรเจ็กต์แทนการโหลดผ่านเน็ต
// 1) วางไฟล์ใน /public/canva-logo.png
// 2) เปลี่ยน LOGO_SRC เป็น "/canva-logo.png"
const LOGO_SRC =
  "https://static.canva.com/static/images/apple-touch-icon.png";

export default function Index() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        window.open(CANVA_URL, "_blank", "noopener,noreferrer");
      } else if (e.key.toLowerCase() === "c") {
        copyLink();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(CANVA_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.open(CANVA_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-slate-950 text-white">
      {/* พื้นหลังเอฟเฟกต์เบา ๆ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(60rem_60rem_at_50%_-10%,#7dd3fc20,transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0_49%,#ffffff10_50%,transparent_51%),linear-gradient(to_bottom,transparent_0_49%,#ffffff10_50%,transparent_51%)] bg-[size:44px_44px]"
      />

      <section className="relative z-10 mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-center px-6 py-16">
        {/* โลโก้ Canva (ของจริง) */}
        {/* <div className="mb-6 inline-flex items-center gap-3">
          <img
            src={LOGO_SRC}
            alt="Canva"
            className="h-10 w-10 rounded-2xl shadow-lg ring-1 ring-white/20"
            loading="eager"
          />
          <span className="text-sm tracking-wide text-slate-300/90">
            Canva
          </span>
        </div> */}

        {/* การ์ดหลัก */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-lg">
          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            เปิดสไลด์บน{" "}
            <span className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Canva
            </span>
          </h1>
          {/* <p className="mt-3 max-w-prose text-pretty text-slate-300">
            คลิกปุ่มด้านล่างเพื่อไปยังงานนำเสนอ (เปิดในแท็บใหม่) — ช็อตคัต{" "}
            <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs">Enter</kbd> /
            <kbd className="ml-1 rounded bg-white/10 px-1.5 py-0.5 text-xs">Space</kbd>
          </p> */}

          {/* ปุ่มหลัก: ไม่มีลูกศรแล้ว */}
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row">
            <a
              href={CANVA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-sky-300/20 bg-gradient-to-b from-sky-500/80 to-indigo-600/80 px-6 py-3 text-lg font-medium shadow-lg shadow-indigo-900/30 ring-1 ring-inset ring-white/10 transition hover:from-sky-400 hover:to-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 active:scale-[0.99] sm:w-auto"
            >
              เปิดสไลด์ใน <span className="ml-1 font-semibold">Canva</span>
            </a>

            <button
              onClick={copyLink}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-lg font-medium text-slate-100 shadow-lg ring-1 ring-inset ring-white/10 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 active:scale-[0.99] sm:w-auto"
            >
              {copied ? "คัดลอกแล้ว ✓" : "คัดลอกลิงก์"}
            </button>
          </div>

          {/* การ์ดพรีวิวลิงก์ */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300/90 ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_SRC}
                alt="Canva"
                className="h-8 w-8 rounded-xl ring-1 ring-white/15"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="truncate font-medium text-white/90">Canva Presentation</p>
                <p className="truncate text-slate-400">
                  {CANVA_URL.replace(/^https?:\/\//, "")}
                </p>
              </div>
              <a
                href={CANVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto rounded-xl bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                เปิดลิงก์
              </a>
            </div>
          </div>

          {/* <p className="mt-4 text-xs text-slate-400">
            ช็อตคัต: <kbd className="rounded bg-white/10 px-1.5 py-0.5">Enter</kbd>{" "}
            / <kbd className="rounded bg-white/10 px-1.5 py-0.5">Space</kbd> เปิดลิงก์ •{" "}
            <kbd className="rounded bg-white/10 px-1.5 py-0.5">C</kbd> คัดลอกลิงก์
          </p> */}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Puripat Lakornthai
        </p>
      </section>
    </main>
  );
}
