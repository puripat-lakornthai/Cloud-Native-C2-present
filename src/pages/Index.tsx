import { useState, useEffect } from "react";
import { SlideLayout } from "@/components/SlideLayout";
import { Slide1 } from "@/components/slides/Slide1";
import { Slide2 } from "@/components/slides/Slide2";
import { Slide3 } from "@/components/slides/Slide3";
import { Slide4 } from "@/components/slides/Slide4";
import { Slide5 } from "@/components/slides/Slide5";
import { Slide6 } from "@/components/slides/Slide6";
import { Slide7 } from "@/components/slides/Slide7";

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <SlideLayout
      currentSlide={currentSlide}
      totalSlides={slides.length}
      onPrevious={handlePrevious}
      onNext={handleNext}
    >
      <CurrentSlideComponent />
    </SlideLayout>
  );
};

export default Index;
