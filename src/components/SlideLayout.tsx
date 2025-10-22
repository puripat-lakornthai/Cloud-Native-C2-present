import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideLayoutProps {
  children: ReactNode;
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const SlideLayout = ({
  children,
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: SlideLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* content */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl slide-enter">{children}</div>
      </main>

      {/* ===== Controls (auto-hide) =====
          กลุ่มนี้จะ “พับลง” โดยดีฟอลต์ และจะ “เลื่อนขึ้นมา”
          เมื่อโฮเวอร์บริเวณขอบล่างของหน้าจอ หรือโฮเวอร์ตัว nav เอง */}
      <div className="fixed inset-x-0 bottom-0 z-50 group pointer-events-none">
        {/* hit area ให้เอาเมาส์เฉียดๆ ก็โชว์ได้ */}
        <div className="absolute inset-x-0 -top-6 h-6 pointer-events-auto" />

        {/* NAV BAR */}
        <nav
          className={[
            "mx-auto w-max pointer-events-auto",
            "flex items-center gap-4",
            "bg-white/90 backdrop-blur-xl px-6 py-3",
            "rounded-t-2xl border-2 border-primary/20 shadow-xl",
            "transition-transform duration-300",
            // พับลงเหลือให้เห็นหัวเล็กน้อย แล้วโผล่เมื่อ hover
            "translate-y-[calc(100%_-_1.25rem)]",
            "group-hover:translate-y-0 hover:translate-y-0 focus-within:translate-y-0",
          ].join(" ")}
          aria-label="Slide controls"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            disabled={currentSlide === 0}
            className="rounded-full hover:bg-primary/10 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }, (_, i) => (
              <div
                key={i}
                className={[
                  "h-2 rounded-full transition-all",
                  i === currentSlide
                    ? "w-8 bg-gradient-to-r from-primary to-secondary"
                    : "w-2 bg-gray-300",
                ].join(" ")}
                aria-hidden
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="rounded-full hover:bg-primary/10 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
            <span className="sr-only">Next slide</span>
          </Button>
        </nav>

        {/* COUNTER PILL — ให้พับ/โผล่พร้อม nav */}
        <div
          className={[
            "absolute right-6 bottom-0 pointer-events-auto",
            "text-sm font-medium text-foreground",
            "bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full",
            "border border-primary/20 shadow-lg",
            "transition-transform duration-300",
            "translate-y-[calc(100%_-_0.75rem)]",
            "group-hover:translate-y-0",
          ].join(" ")}
          aria-label="Slide number"
        >
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
};
